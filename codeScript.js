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
console.log(perso.decrire());

//Aurora est blessé par une flèche
perso.sante-=20;
//Aurora trouve un bracelet de force
perso.force+=10;

console.log(perso.decrire());
