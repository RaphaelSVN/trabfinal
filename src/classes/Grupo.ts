export default class Grupo{
    private nome: string;
    private numGrupo: number;
    private numEstande: number;
    private dataHora: Date;
    private lider: string;


    constructor (nome: string, numGrupo: number, numEstande: number, dataHora: Date, lider: string){
        this.nome= nome;
        this.numEstande = numEstande;
        this.numGrupo = numGrupo;
        this.dataHora = dataHora;
        this.lider = lider;
    }

    public getNome(){
        return this.nome;
    }
    
    public getNumGrupo(){
        return this.numGrupo;
    }
    
    public getNumEstande(){
        return this.numEstande;
    }
    
    public getDataHora(){
        return this.dataHora;
    }
    
    public getLider(){
        return this.lider;
    }

    public setNome(nome:string){
        this.nome = nome;
    }
    
    public setNumGrupo(numGrupo:number){
        this.numGrupo = numGrupo;
    }
    
    public setNumEstande(numEstande:number){
        this.numEstande = numEstande;
    }
    
    public setDataHora(dataHora:Date){
        this.dataHora = dataHora;
    }
    
    public setLider(lider:string){
        this.lider = lider;
    }
}
