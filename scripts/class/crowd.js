var People = function(params)
{
	this.x = params.slot.begin;
	this.y = (canvasHeight/2)+50;
	this.end = params.slot.end;

	this.nature = params.nature;
	this.speed  = params.speed;

	this.sentance = params.sentance;
	this.sound = params.sound;

	this.width = 20;
	this.height = 20;
	this.dirX = 0;
    this.dirY = 0;
    this.alive = true;
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

        if(this.y < canvasHeight)
		{
			this.width+=1;
			this.height+=1;
		}
		//quand un ennemi atteint le bord de l'ecran
		else
		{
			this.attack();
		}
	}
	this.render = function()
	{
		if(this.nature==="nice")
		{
			context.fillStyle = "green";
		}
		if(this.nature==="bad")
		{
			context.fillStyle = "red";
		}
		context.fillRect(this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
	}
	this.attack = function()
	{
		if(this.nature==="bad")
			game.player.assurance+=10;
		if(this.nature==="nice")
			game.player.assurance-=10;
		this.alive = false;
		
	}
}

var Crowd = function()
{
	this.tabPeople = [];

	this.slot1 = {
		begin : (canvasWidth/2)+50,
		end : (canvasWidth/2)+50
	};
	this.slot2 = {
		begin : ((canvasWidth/2)+50)-20,
		end : ((canvasWidth/2)+50)-100
	};
	this.slot3 = {
		begin : ((canvasWidth/2)+50)+20,
		end : ((canvasWidth/2)+50)+100
	};
	this.slot4 = {
		begin : ((canvasWidth/2)+50)-40,
		end : ((canvasWidth/2)+50)-200
	};
	this.slot5 = {
		begin : ((canvasWidth/2)+50)+40,
		end : ((canvasWidth/2)+50)+200
	};
	this.slot6 = {
		begin : ((canvasWidth/2)+50)-60,
		end : ((canvasWidth/2)+50)-300
	};
	this.slot7 = {
		begin : ((canvasWidth/2)+50)+60,
		end : ((canvasWidth/2)+50)+300
	};
	this.render = function()
	{
		context.fillStyle = "blue";
		context.fillRect(this.slot1.begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot1.end,canvasHeight-4,4,4);
		context.fillRect(this.slot2.begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot2.end,canvasHeight-4,4,4);
		context.fillRect(this.slot3.begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot3.end,canvasHeight-4,4,4);
		context.fillRect(this.slot4.begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot4.end,canvasHeight-4,4,4);
		context.fillRect(this.slot5.begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot5.end,canvasHeight-4,4,4);
		context.fillRect(this.slot6.begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot6.end,canvasHeight-4,4,4);
		context.fillRect(this.slot7.begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot7.end,canvasHeight-4,4,4);

		for(var i = 0; i < this.tabPeople.length; i++)
		{
			this.tabPeople[i].render();
		}
	}
	this.update = function()
	{
		for(var i = 0; i < this.tabPeople.length; i++)
		{
			this.tabPeople[i].move();
			if(this.tabPeople[i].alive===false)
				this.tabPeople.splice(i,1);
		}
	}
	return this;
}

