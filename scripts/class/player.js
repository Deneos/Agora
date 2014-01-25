var Player = function(gender)
{
    this.gender = gender;
    this.assurance = 50;
    this.body = {
        head : "imagehead",
        feeling : "feeling",
        trunk : "imagetrunk",
        legs :  "imagelegs",
        feet :  "imagefeet"
    };

    this.update = function()
    {
        if(this.assurance > 100)
            this.assurance = 100;
        if(this.assurance < 0)
            this.assurance = 0;
    }
    
}