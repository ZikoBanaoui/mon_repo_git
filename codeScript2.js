var Film={
    init: function(titre,annee){
        this.titre=titre;
        this.annee=annee;
    },
    decrire: function(){
        var description=this.titre+"( "+this.annee+") .";
        return description;
    }
};
var film1=Object.create(Film);
film1.init("Malcom X",1992);

var film2=Object.create(Film);
film2.init("Batman",2008);

var film3=Object.create(Film);
film3.init("spiderman",2018);

var films=[];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function(film){
    console.log(film.decrire());
    
});
