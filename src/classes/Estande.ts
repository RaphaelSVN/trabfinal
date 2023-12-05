import Grupo from "./Grupo";

export default class Estande{
    private numEstande:number;
    private grupos:Grupo;

    constructor(numEstande:number, grupos: Grupo){
        this.numEstande = numEstande;
        this.grupos = grupos;
    }

    public getNumEstande(){
        return this.numEstande;
    }
    
    public setNumEstande(grupos:Grupo){
        this.grupos = grupos;
    }
    
    public getGrupos(){
        return this.grupos;
    }
    
    public setGrupos(grupos:Grupo){
        this.grupos = grupos;
    }
    
}
