const monacoBaseURL = "https://cdn.jsdelivr.net/npm/monaco-editor@0.37.1/min/vs";

const skeletonTemplate = `
<!DOCTYPE html>
<html>
<head>
	<!-- in case this gets copypasta'd -->
	<meta charset="utf-8">
	<title>untitled</title>
</head>
<body>
	<h1>Hello, World!</h1>
</body>
</html>
`.trim();
const skeletonSelection = {
	startLineNumber: 9,
	endLineNumber: 9,
	startColumn: 2,
	endColumn: Infinity, // this works, but isn't documented
};

const editorContainer = document.querySelector("#editor");
const frame = document.querySelector("iframe");
let editor;

const modalContainer = document.querySelector("#modalContainer");
document.querySelector("button#openModal").addEventListener("click",
	() => document.body.classList.remove("modalClosed")
);
modalContainer.addEventListener("click", ev => {
	// ignore clicks inside #modal
	if(ev.target !== ev.currentTarget)
		return;
	document.body.classList.add("modalClosed");
});

const settings = {
	autoRefreshEnabled: document.querySelector("input[name=autoRefreshEnabled]"),
	autoRefreshDelay: document.querySelector("input[name=autoRefreshDelay]"),
	clearConsoleEnabled: document.querySelector("input[name=clearConsoleEnabled]"),
	embedJSAsModule: document.querySelector("input[name=embedJSAsModule]"),
};

function debounce(delay, fn)
{
	let timeout = null;
	return () => {
		if(timeout != null) clearTimeout(timeout);
		timeout = setTimeout(() => {
			timeout = null;
			fn();
		}, delay);
	};
}

const tabs = document.querySelectorAll("#toolbar .tab");
function focusTab(ev)
{
	if(!ev.ctrlKey && !ev.metaKey) // metaKey is Cmd on Macs
		return;
	
	switch(ev.code)
	{
		case "Digit1":
			switchTab({ target: tabs[0] }); // terrible hack
			break;
		case "Digit2":
			switchTab({ target: tabs[1] });
			break;
		case "Digit3":
			switchTab({ target: tabs[2] });
			break;
		default:
			return;
	}
	
	ev.preventDefault();
	editor.focus();
}
document.addEventListener("keydown", focusTab);

const resourceBlobURLs = [];
function frameLoaded()
{
	// events dispatched within iframes don't bubble up, and the document is reset every refresh
	frame.contentDocument.addEventListener("keydown", focusTab);
	
	resourceBlobURLs.forEach(url => URL.revokeObjectURL(url));
	resourceBlobURLs.length = 0;
}
frame.addEventListener("load", frameLoaded);

const models = {
	html: null,
	css: null,
	js: null,
};
const domParser = new DOMParser();
const xmlSerializer = new XMLSerializer();
function refresh()
{
	const newDoc = domParser.parseFromString(models.html.getValue(), "text/html");
	
	const css = newDoc.createElement("link");
	css.rel = "stylesheet";
	css.href = URL.createObjectURL(new Blob([models.css.getValue()], { type: "text/css" }));
	resourceBlobURLs.push(css.href);
	newDoc.head.appendChild(css);
	
	const js = newDoc.createElement("script");
	js.type = settings.embedJSAsModule.checked ? "module" : "text/javascript";
	js.src = URL.createObjectURL(new Blob([models.js.getValue()], { type: "text/javascript" }));
	resourceBlobURLs.push(css.href);
	newDoc.body.appendChild(js);
	
	if(settings.clearConsoleEnabled.checked) console.clear();
	frame.srcdoc = xmlSerializer.serializeToString(newDoc);
}

let currentModel = "html";
const modelStates = {
	html: null,
	css: null,
	js: null,
};
function switchTab(ev)
{
	tabs.forEach(e => e.classList.remove("selected"));
	ev.target.classList.add("selected");
	
	const newTab = ev.target.dataset.model
	if(!(newTab in models))
		throw new Error(`Unknown model ${newTab}`);
	
	if(newTab === currentModel)
		return;
	
	modelStates[currentModel] = editor.saveViewState();
	editor.setModel(models[newTab]);
	currentModel = newTab;
	
	const state = modelStates[newTab];
	if(state != null) editor.restoreViewState(state);
}
tabs.forEach(e => e.addEventListener("click", switchTab));

const autoRefreshCallbacks = {
	html: null,
	css: null,
	js: null,
};
function resetAutoRefreshCallbacks()
{
	let newDelay = parseInt(settings.autoRefreshDelay.value);
	if(newDelay === NaN)
		newDelay = settings.autoRefreshDelay.value = 1000;
	
	const callback = debounce(newDelay, () => {
		// for simplicity, always register callbacks but ignore them when not auto-refreshing
		if(!settings.autoRefreshEnabled.checked) return;
		refresh();
	});
	for(let model in autoRefreshCallbacks)
	{
		const disposable = autoRefreshCallbacks[model];
		if(disposable !== null) disposable.dispose();
		autoRefreshCallbacks[model] = models[model].onDidChangeContent(callback);
	}
}
settings.autoRefreshDelay.addEventListener("input", resetAutoRefreshCallbacks);

async function main()
{
	require.config({ paths: { vs: monacoBaseURL } });
	await new Promise(resolve => require(["vs/editor/editor.main"], resolve));
	
	models.html = monaco.editor.createModel(skeletonTemplate, "html");
	models.css = monaco.editor.createModel("", "css");
	models.js = monaco.editor.createModel("", "javascript");
	
	editor = monaco.editor.create(editorContainer, {
		model: models.html,
		theme: "vs-dark",
		minimap: { enabled: false },
		insertSpaces: false,
		autoIndent: "full",
	});
	new ResizeObserver(debounce(100, editor.layout.bind(editor))).observe(editorContainer);
	resetAutoRefreshCallbacks();
	
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, refresh);
	/*editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
		console.log("save?");
	});
	editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyO, () => {
		console.log("open?");
	});*/
	
	editor.revealRangeInCenter(skeletonSelection);
	editor.setSelection(skeletonSelection);
	editor.focus();
	refresh();
}

// we load the script here so updating is as simple as changing monacoBaseURL
{
	let loaderScript = document.createElement("script");
	loaderScript.src = `${monacoBaseURL}/loader.js`;
	loaderScript.addEventListener("load", main);
	document.body.appendChild(loaderScript);
}
