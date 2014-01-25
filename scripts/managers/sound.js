function soundManager(params)
{
	config.son.fond = new Howl({
	  urls: [params.url],
	    autoplay: params.autoplay,
		  loop: params.loop,
		  volume: params.volume,
		  buffer: params.buffer
	})
}

function soundClick()
{
	//config.son.fond.play();
}

