var People = function(params)
{
	this.x = params.slot.begin;
	this.y = (canvasHeight/2)+100;
	this.slotID = params.slot.id;
	this.end = params.slot.end;
	this.end = params.slot.end;

	// SON
	this.volume = 0;
	this.playedWalk = true;

	this.priority = false;
	this.nature = params.nature;	
	this.speed  = params.speed;


	this.img	= new Image();
	this.img2	= new Image();
	this.img3	= new Image();
	this.img.src = params.src;
	this.img2.src = params.src2;
	this.img3.src = params.src3;
	this.imageAlpha = 0.5;
	this.f = 0;
	this.frameWidth = 150;
	this.frameHeight = 500;
	this.currentFrameX = 0;
	this.nb_of_frame = 4;
	this.sentance = params.sentance;
	this.said = false;
	this.width = 30;
	this.height = 100;
	this.dirX = 0;
    this.dirY = 0;
    this.alive = true;
    this.timeScale = 0;
    this.type = this.img.src.substring(80, 59);
  	console.log(this.type);
	this.sound = new Howl({
      urls: [config.howlerSounds.walkWomen.source],
        autoplay: config.howlerSounds.walkWomen.autoplay,
          loop: config.howlerSounds.walkWomen.loop,
          volume: config.howlerSounds.walkWomen.volume,
          buffer: config.howlerSounds.walkWomen.buffer
	});

	this.move = function()
	{
		var diffX = (this.x - this.end);
        var diffY = (this.y - canvasHeight);
        var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
        var moveX = distance > this.speed ? (Math.abs(diffX) * (this.speed / distance)) : Math.abs(diffX);
        var moveY = distance > this.speed ? (Math.abs(diffY) * (this.speed / distance)) : Math.abs(diffY);

        if(this.x < this.end)
            this.dirX = 1;
        else
            this.dirX = -1;
        if(this.y < canvasHeight)
            this.dirY = 1;
        else
            this.dirY = -1;
        this.y = (this.y + (this.dirY * moveY));
        this.x = (this.x + (this.dirX * moveX));

		//when an ennemi finish is path
		if(this.y >= canvasHeight)
		{
			this.attack();
			game.crowd.slot[this.slotID].occupated = false;
		}
	}
	this.scale = function()
	{
		this.timeScale++;
		if(this.y < canvasHeight && this.timeScale%4===0)
		{
			this.width+=0.25;
			this.height+=0.75;
		}
	}
	this.render = function()
	{	
		if(this.nature === "withoutFaceNeutral")
        {
        	context.drawImage(this.img3,this.currentFrameX,0,this.frameWidth,this.frameHeight,this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
        }
        else
        {
        	this.imageAlpha = 1-((game.player.assurance/100));
        	context.drawImage(this.img,this.currentFrameX,0,this.frameWidth,this.frameHeight,this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
        	context.globalAlpha = this.imageAlpha;
        	context.drawImage(this.img2,this.currentFrameX,0,this.frameWidth,this.frameHeight,this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
        	context.globalAlpha = 1;
        }
	}
	this.animate = function ()
    {
        //the f is time frame, to fluidify the animation
        this.f++;
        if(this.f%12==0)
        {
            this.currentFrameX+=this.frameWidth;
            if(this.currentFrameX>=(this.nb_of_frame*this.frameWidth))
            {
                this.currentFrameX = 0;
            }
        }
    }
    //quand un ennemi arrive en bas 
	this.attack = function()
	{	
			if(this.nature === "bad")
			{	
				game.player.assurance+=5;
				game.crowd.nb_of_bad--;

				if(!this.said){
					if(game.player.gender === "male")
					{	
						var aleaPhrase = Math.floor(Math.random()*config.male.bad.sentences.length);
						this.sentances = config.male.bad.sentences[aleaPhrase];
					}
					if(game.player.gender === "female")
					{	
						var aleaPhrase = Math.floor(Math.random()*config.female.bad.sentences.length);
						this.sentances = config.female.bad.sentences[aleaPhrase];
					}

					var t = new TextEffect(this.x,this.y-20,"#DE0F0F",this.sentances);
					game.effect.push(t);
					this.said = true;
				}
			}
			if(this.nature === "withoutFaceNeutral" || this.nature === "neutral")
			{	
				game.crowd.nb_of_bad--;
			}
			if(this.nature === "nice")
			{	
				game.player.assurance-=5;
				game.crowd.nb_of_nice--;
				if(!this.said){
					if(game.player.gender === "male")
					{	
						var aleaPhrase = Math.floor(Math.random()*config.male.good.sentences.length);
						this.sentances = config.male.good.sentences[aleaPhrase];
					}
					if(game.player.gender === "female")
					{	
						var aleaPhrase = Math.floor(Math.random()*config.female.good.sentences.length);
						this.sentances = config.female.good.sentences[aleaPhrase];
					}

					var t = new TextEffect(this.x,this.y-20,"#F4BE49",this.sentances);
					game.effect.push(t);
					this.said = true;
				}
			}
		this.alive = false;
		this.female01.unload();
	}
	this.cliked = function()
	{	
			if(this.nature === "withoutFaceNeutral")
			{	
				//game.player.assurance-=5;
				this.speed = 1;

			}
			if(this.nature === "neutral")
			{	
			}
		this.sound.unload();
	}

	this.message = function()
	{		
		if(!this.said){
			if(this.nature === "bad")
			{
				game.player.assurance += 5;
				if(game.player.gender === "male")
				{	
					var aleaPhrase = Math.floor(Math.random()*config.male.bad.sentences.length);
					this.sentances = config.male.bad.sentences[aleaPhrase];
				}
				if(game.player.gender === "female")
				{	
					var aleaPhrase = Math.floor(Math.random()*config.female.bad.sentences.length);
					this.sentances = config.female.bad.sentences[aleaPhrase];
				}

				var t = new TextEffect(this.x,this.y-20,"#DE0F0F",this.sentances);
				game.effect.push(t);
				this.said = true;
			}
			if(this.nature === "neutral")
			{	
				game.player.assurance-=5;
				if(game.player.gender === "male")
				{	
					var aleaPhrase = Math.floor(Math.random()*config.male.good.sentences.length);
					this.sentances = config.male.good.sentences[aleaPhrase];
				}
				if(game.player.gender === "female")
				{	
					var aleaPhrase = Math.floor(Math.random()*config.female.good.sentences.length);
					this.sentances = config.female.good.sentences[aleaPhrase];
				}

				var t = new TextEffect(this.x,this.y-20,"#F4BE49",this.sentances);
				game.effect.push(t);
				this.said = true;	
			}
		}
	}
}

var Crowd = function()
{
	this.tabPeople = [];
	this.nb_of_nice = 0;
	this.nb_of_bad = 0;
	this.slot = [{
		begin : (canvasWidth/2)+50,
		end : (canvasWidth/2)+50,
		occupated : false,
		id : 0
	}, {
		begin : (canvasWidth/2)+30,
		end : (canvasWidth/2)-50,
		occupated : false,
		id : 1
	}, {
		begin : (canvasWidth/2)+70,
		end : (canvasWidth/2)+150,
		occupated : false,
		id : 2
	}, {
		begin : (canvasWidth/2)+10,
		end : (canvasWidth/2)-150,
		occupated : false,
		id : 3
	}, {
		begin : (canvasWidth/2)+90,
		end : (canvasWidth/2)+250,
		occupated : false,
		id : 4
	}, {
		begin : (canvasWidth/2)-10,
		end : (canvasWidth/2)-250,
		occupated : false,
		id : 5
	}, {
		begin : (canvasWidth/2)+110,
		end : (canvasWidth/2)+350,
		occupated : false,
		id : 6
	}];
	
	this.render = function()
	{
		/*context.fillStyle = "blue";
		context.fillRect(this.slot[0].begin,(canvasHeight/2)+100,4,4);
		context.fillRect(this.slot[0].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[1].begin,(canvasHeight/2)+100,4,4);
		context.fillRect(this.slot[1].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[2].begin,(canvasHeight/2)+100,4,4);
		context.fillRect(this.slot[2].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[3].begin,(canvasHeight/2)+100,4,4);
		context.fillRect(this.slot[3].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[4].begin,(canvasHeight/2)+100,4,4);
		context.fillRect(this.slot[4].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[5].begin,(canvasHeight/2)+100,4,4);
		context.fillRect(this.slot[5].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[6].begin,(canvasHeight/2)+100,4,4);
		context.fillRect(this.slot[6].end,canvasHeight-4,4,4);*/

		for(var i = this.tabPeople.length-1; i >= 0; i--)
		{
			this.tabPeople[i].animate();
			this.tabPeople[i].render();
		}
	}

	this.emitSound = function()
	{

	}

	this.update = function()
	{
		for(var i = this.tabPeople.length-1; i >= 0; i--)
		{
			this.tabPeople[i].move();
			this.tabPeople[i].scale();

			if(this.tabPeople[i].alive===false)
				this.tabPeople.splice(i,1);
		}
	}
	return this;
}

