function soundManager()
{
	config.son.fond = new Howl({
	  urls: [config.female.head.good.sound[0]],
	    autoplay: config.howlerSounds.Agora_OST_01.autoplay,
		  loop: config.howlerSounds.Agora_OST_01.loop,
		  volume: config.howlerSounds.Agora_OST_01.volume
	})
}

function soundClick()
{
	config.son.fond.play();
}

