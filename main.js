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

require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.32.1/min/vs" } });
require(["vs/editor/editor.main"], () => {
	editor = monaco.editor.create(editorContainer, {
		value: "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n\t<h1>Hello, World!</h1>\n</body>\n</html>",
		language: "html",
		theme: "vs-dark",
		minimap: {enabled: false},
		insertSpaces: false,
		autoIndent: "full",
	});
	refresh();
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
	
	const startPos = {
		startLineNumber: 6,
		endLineNumber: 6,
		startColumn: 2,
		endColumn: Infinity,
	};
	editor.revealRangeInCenter(startPos);
	editor.setSelection(startPos);
	editor.focus();
});
