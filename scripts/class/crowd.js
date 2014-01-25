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