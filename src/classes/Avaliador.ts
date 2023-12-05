import Estudante from './Estudante'
import Prof from './Prof';
import Avaliacao from './Avaliacao'

export default class Avaliador{
    private tipoAvaliador: String;
    private matricula: String;
    private estudante?: Estudante;
    private prof?: Prof;
   

    constructor(tipoAvaliador: String, matricula: String){
        this.tipoAvaliador =tipoAvaliador;
        this.matricula=matricula;


    }

    public getTipoAvaliador(){
        return this.tipoAvaliador
    }
    
    public getMatricula(){
        return this.matricula
    }

    public setTipoAvaliador(tipoAvaliador: String){
        this.tipoAvaliador=tipoAvaliador
    }

    public setMatricula(matricula: String){
        this.matricula=matricula
    }

}
