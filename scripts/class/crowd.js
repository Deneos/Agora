var People = function(params)
{
	this.x = params.slot.begin;
	this.y = (canvasHeight/2)+50;
	this.slotID = params.slot.id;
	this.end = params.slot.end;
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
    this.timeScale = 0;

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
			this.height+=0.25;
		}

		if(this.y >= canvasHeight)
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
		context.fillStyle = "blue";
		context.fillRect(this.slot[0].begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot[0].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[1].begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot[1].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[2].begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot[2].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[3].begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot[3].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[4].begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot[4].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[5].begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot[5].end,canvasHeight-4,4,4);
		context.fillRect(this.slot[6].begin,(canvasHeight/2)+50,4,4);
		context.fillRect(this.slot[6].end,canvasHeight-4,4,4);

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
			this.tabPeople[i].scale();

			if(this.tabPeople[i].alive===false)
				this.tabPeople.splice(i,1);
		}
	}
	return this;
}

