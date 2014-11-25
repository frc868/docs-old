function sandbox_run() {
	var code = editor.getSession().getValue();
	eval(code);
}
function sandbox_clear() {
	var output = document.getElementById("sandbox_output");
	while(output.firstChild) {
		output.removeChild(output.firstChild);
	}
}
