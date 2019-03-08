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