const monacoBaseURL = "https://cdn.jsdelivr.net/npm/monaco-editor@0.30.0/min/vs";

const skeletonTemplate = `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<style>
	</style>
</head>
<body>
	<h1>Hello, World!</h1>
	
	<!-- <script type="module">
	</script> -->
</body>
</html>
`.trim();
const skeletonSelection = {
	startLineNumber: 9,
	endLineNumber: 10,
	startColumn: 2,
	endColumn: Infinity, // this works, but isn't documented
};

const editorContainer = document.querySelector("#editor");
const frame = document.querySelector("iframe");
let editor;

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

function focusEditorEvent(ev)
{
	if(
		editorContainer.contains(document.activeElement) ||
		(!ev.ctrlKey && !ev.metaKey) || // cmd for macs
		ev.code !== "Digit1"
	) return;
	
	ev.preventDefault();
	editor.focus();
}
document.addEventListener("keydown", focusEditorEvent);
// events dispatched within iframes don't bubble up, and the document is reset every refresh
frame.addEventListener("load", () => {
	frame.contentDocument.addEventListener("keydown", focusEditorEvent);
});

function refresh()
{
	//console.clear();
	frame.srcdoc = editor.getModel().getValue();
}

async function main()
{
	require.config({ paths: { vs: monacoBaseURL } });
	await new Promise((resolve) => require(["vs/editor/editor.main"], resolve));
	
	// monaco.languages.html.htmlDefaults.setOptions({data: { useDefaultDataProvider: true }});
	monaco.languages.html.htmlDefaults.setOptions({ ...monaco.languages.html.htmlDefaults.options, suggest: {css: true, javascript: true} });
	
	editor = monaco.editor.create(editorContainer, {
		value: skeletonTemplate,
		language: "html",
		theme: "vs-dark",
		minimap: {enabled: false},
		insertSpaces: false,
		autoIndent: "full",
	});
	new ResizeObserver(debounce(100, editor.layout.bind(editor))).observe(editorContainer);
	/* editor.getModel().onDidChangeContent(debounce(500, () => {
		console.log("changed");
	})); */
	
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
