var Level = function()
{
    this.decount = 0;
    this.init = function()
    {
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[0], nature : 'bad', speed : 0.2}));
        game.crowd.nb_of_bad++;
        game.crowd.slot[0].occupated = true;
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[1], nature : 'nice', speed : 0.2}));
        game.crowd.nb_of_nice++;
        game.crowd.slot[1].occupated = true;
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[2], nature : 'bad', speed : 0.2}));
        game.crowd.nb_of_bad++;
        game.crowd.slot[2].occupated = true;
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[3], nature : 'bad', speed : 0.2}));
        game.crowd.nb_of_bad++;
        game.crowd.slot[3].occupated = true;
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[4], nature : 'nice', speed : 0.2}));
        game.crowd.nb_of_nice++;
        game.crowd.slot[4].occupated = true;
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[5], nature : 'nice', speed : 0.2}));
        game.crowd.nb_of_nice++;
        game.crowd.slot[5].occupated = true;
        game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[6], nature : 'nice', speed : 0.2}));
        game.crowd.nb_of_nice++;
        game.crowd.slot[6].occupated = true;
    }
    this.motor = function()
    {
        this.decount++;
        if(this.decount%100===0)
        {   
            //bien
            if(game.player.assurance >= 40 && game.player.assurance <= 60)
            {
                var alea = Math.floor(Math.random()*7);
                var aleaNature = Math.round(Math.random()*3);
                if(aleaNature===3)
                {    
                    var carac = 'bad';
                    game.crowd.nb_of_bad++;
                }
                else
                {    
                    var carac = 'nice';
                    game.crowd.nb_of_nice++;
                }
                game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2}));
            }
            //plutot bien
            if(game.player.assurance >= 20 && game.player.assurance <= 40)
            {
                var alea = Math.floor(Math.random()*7);
                var aleaNature = Math.round(Math.random()*2);
                if(aleaNature===2)
                {    
                    var carac = 'bad';
                    game.crowd.nb_of_bad++;
                }
                else
                {    
                    var carac = 'nice';
                    game.crowd.nb_of_nice++;
                }
                game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2}));
            }
            //neutre
            if(game.player.assurance >= 40 && game.player.assurance <= 60)
            {
                var alea = Math.floor(Math.random()*7);
                var aleaNature = Math.round(Math.random());
                if(aleaNature===1)
                {    
                    var carac = 'bad';
                    game.crowd.nb_of_bad++;
                }
                else
                {    
                    var carac = 'nice';
                    game.crowd.nb_of_nice++;
                }
                game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2}));
            }
            
        }
    }
}