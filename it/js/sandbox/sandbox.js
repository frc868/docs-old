function sandbox_run() {
	var code = editor.getSession().getValue();
	eval(code);
}
