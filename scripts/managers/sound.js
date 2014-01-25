function soundManager()
{
	var sound = new Howl({
	  urls: [config.female.head.good.sound[0]],
	  autoplay: true,
	  loop: true,
	  volume: 0.5,
	})
}