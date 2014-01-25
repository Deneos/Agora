var People = function(params)
{
	this.x = params.x;
	this.y = params.y;

	this.nature = params.nature;
	this.speed  = params.speed;
	this.sentance = params.sentance;
	this.sound = params.sound;


	this.move = function()
	{

	}
	this.render = function()
	{
		
	}
}

var BadPeople = function()
{

}

var NicePeople = function()
{

}


function addMethodCapabilities(object, param)
{
	object.prototype.move = function()
	{

	}

	object.prototype.render = function()
	{

	}

	object.prototype.update = function()
	{
		this.render();
	}
}