var Level = function()
{
    this.decount = 0;
    this.init = function()
    {
        /*game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[0], nature : 'bad', speed : 0.2}));
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
        game.crowd.slot[6].occupated = true;*/
    }
    this.motor = function()
    {
        this.decount++;
        if(this.decount%50===0)
        {
            
            for(var i = 0; i < game.crowd.tabPeople.length; i++)
            {
                if(game.crowd.tabPeople[i].nature === "bad")
                {
                    game.player.assurance += 1;
                    
                }
            }
        }
        if(this.decount%100===0 && (game.crowd.nb_of_bad+game.crowd.nb_of_nice) < 12)
        {   
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
                    var carac = 'neutral';
                    game.crowd.nb_of_nice++;
                }
                //image selection
                var aleaImage = Math.round(Math.random()*4);
                if(aleaImage===0)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/nice1.png", src2 : "medias/images/nice2.png", src3 : "medias/images/nice3.png" }));
                if(aleaImage===1)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/gentils1.png", src2 : "medias/images/gentils2.png", src3 : "medias/images/gentils3.png"}));
                if(aleaImage===2)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/mechant1.png", src2 : "medias/images/mechant2.png", src3 : "medias/images/mechant3.png"}));
                if(aleaImage===3)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/mixte1.png", src2 : "medias/images/mixte2.png", src3 : "medias/images/mixte3.png"}));
                if(aleaImage===4)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/evil1.png", src2 : "medias/images/evil2.png", src3 : "medias/images/evil3.png"}));


            }

            //bien
            if(game.player.assurance >= 0 && game.player.assurance < 40)
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
                    var carac = 'neutral';
                    game.crowd.nb_of_nice++;
                }
                //image selection
                var aleaImage = Math.round(Math.random()*4);
                if(aleaImage===0)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/nice1.png", src2 : "medias/images/nice2.png", src3 : "medias/images/nice3.png" }));
                if(aleaImage===1)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/gentils1.png", src2 : "medias/images/gentils2.png", src3 : "medias/images/gentils3.png"}));
                if(aleaImage===2)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/mechant1.png", src2 : "medias/images/mechant2.png", src3 : "medias/images/mechant3.png"}));
                if(aleaImage===3)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/mixte1.png", src2 : "medias/images/mixte2.png", src3 : "medias/images/mixte3.png"}));
                if(aleaImage===4)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/evil1.png", src2 : "medias/images/evil2.png", src3 : "medias/images/evil3.png"}));
            }

            //mal
            if(game.player.assurance > 60 && game.player.assurance <= 100)
            {
                var alea = Math.floor(Math.random()*7);
                var aleaNature = Math.round(Math.random()*2);
                if(aleaNature===1)
                {    
                    var carac = 'neutral';
                    game.crowd.nb_of_nice++;
                }
                else
                {    
                    var carac = 'bad';
                    game.crowd.nb_of_bad++;
                }
                //image selection
                var aleaImage = Math.round(Math.random()*4);
                if(aleaImage===0)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/nice1.png", src2 : "medias/images/nice2.png", src3 : "medias/images/nice3.png" }));
                if(aleaImage===1)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/gentils1.png", src2 : "medias/images/gentils2.png", src3 : "medias/images/gentils3.png"}));
                if(aleaImage===2)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/mechant1.png", src2 : "medias/images/mechant2.png", src3 : "medias/images/mechant3.png"}));
                if(aleaImage===3)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/mixte1.png", src2 : "medias/images/mixte2.png", src3 : "medias/images/mixte3.png"}));
                if(aleaImage===4)
                    game.crowd.tabPeople.push(new People({ slot : game.crowd.slot[alea], nature : carac, speed : 0.2, src : "medias/images/evil1.png", src2 : "medias/images/evil2.png", src3 : "medias/images/evil3.png"}));
            }     
        }

    }
}