var config = {
	'male' : {
	},
	'female' : {
		'head' : {
			'good' : {
				'sentences' : ["You're marvelous !", "You're a nice people"],
				'sound'     : ['medias/sons/Agora_OST_01.mp3', 'sound/nice.mp3']
			},
			'bad' : {
				'sentences' : ["You're fucking ugly !", "You're a fat whore"],
				'sound'     : ['../../sons/ugly.mp3', 'sound/fat.mp3']
			}
		}
	},
	'howlerSounds' : {
		'Agora_OST_01' : {
			'autoplay' : false,
			'loop' 	   : true,
			'volume'   : 0.5,
			'buffer'   : true,
			onend: function() {
		    	console.log("Sound Finished !");
		  }
		}
	},
	'son' : {
		'fond' : {}
	}
};