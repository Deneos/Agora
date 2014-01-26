var config = {
	'male' : {
		'good' : {
			'sentences' : ["Nice haircut.", "I like his hair.", "Can I let my hand through your hair?", 
				"Such a pretty face.", "Look at me.", "What a smile!",
				"Hey, handsome.", "Pretty flower for a white guy.", "Wanna come along?",
				"I'd like to grab that ass.", "Let me slap you.", "How can poop go outta this?",
				"I like his fine lines.", "Am i bisexual?", "Et on se prend la main...",
				"I can see the sun on his head.", "No hair can be cool, finally.", "The skin should be soft." ]
		},
		'bad'  : {
			'sentences' : ["Gosh, have you seen his hair?", "I couldn't bear having such a mess on my head.", "He should shave his head.", 
			"Where are his eyes?", "Can I see his face, behind his nose?", "Butthead.",
			"What a fatty…", "Stop eating, piggy.", "Poor guy, he ate too much.",
			"Fat ass.", "Think about ass surgery.", "Please don't show me your back.", 
			"Is he gay?", "Pfff, he looks like a girl.", "Is it a dress he's wearing?", 
			"Is it a choice not to have hair?", "Brrr, he must freeze, at winter.", "He's too young to loose hair." ]
		}
	},
	'female' : {
		'good' : {
			'sentences' : ["She has a beautiful hair.", "Her curls are perfect.", "This haircut wouldn't be so cool on me.", 
				"She's cute.", "I want her eyes.", "Hei, cutie pie.",
				"Look at her…", "She has beautiful curves.", "What a body.",
				"Look at this ass.", "Shake that butt.", "Will you sit on me?", 
				"She's somewhat beautiful, with her short hair.", "He reminds me of David Bowie.", "Et on se prend la main...", 
				"What a chest!", "Breathe again?", "I'd like to rest on them." ],
		},
		'bad' : {
			'sentences' : [ "A girl with no shampoo?", "I couldn't bear having such a mess on my head.", "Get a new hairdresser, bitch.", 
					"Look at her face!", "Is it a sunburn?", "Should I give her my surgeon's name?",
					"She mustn't be well.", "Stop eating, piggy.", "How can you be so fat?",
					"Big assed-slut.", "She musn't hurt herself when she sits.", "How come she didn't broke her bed?", 
					"Fucking tomboy.", "Can't you wear makeup?", "Be a woman. Wear a dress.", 
					"She has no breasts.", "How can boobs be this flaccid?", "She must breathe very well." ]
		}
	},
	'howlerSounds' : {
		'Agora_OST_01' : {
			'source'   : 'medias/sons/Agora_OST_01.mp3',
			'autoplay' : false,
			'loop' 	   : true,
			'volume'   : 1,
			'buffer'   : true,
			onend: function() {
		    	console.log("Sound Finished !");
		  },
		}
	},
	'son' : {
		'fond' : {}
	}
};