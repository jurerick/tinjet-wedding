'use-strict';

window.addEventListener('load', function () {
	if(window.animateGLInstance) return;
	// const isBlocksEditor = typeof wp !== 'undefined' && typeof wp.blocks !== 'undefined';
	// if(isBlocksEditor) return;

    agl_options = agl_options || []
    agl_options[0] = agl_options[0] || "{}"
    const options = JSON.parse(agl_options[0])
    options.rootFolder = agl_options[1]

	// Reset presets to global presets
	if(options && options.in && options.in.presets) options.in.presets = agl.defaults.in.presets

    window.animateGLInstance = new AnimateGL(options)
	
	window.dispatchEvent(new Event('agl-init'))
});