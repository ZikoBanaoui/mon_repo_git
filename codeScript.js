var perso={
    nom:"Aurora",
    sante:150,
    force:25,
    //methode decrire
    decrire: function(){
    var description=this.nom+" a "+this.sante+" points de sante et "+this.force+" en force.";
    return description;
    }
};