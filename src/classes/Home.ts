import Estudante from "./Estudante";
import Avaliacao from "./Avaliacao";
import Avaliador from "./Avaliador";
import Estande  from "./Estande";
import Grupo from "./Grupo";
import Prof from "./Prof";

const data = new Date ('Novembro 10, 1989 00:00:00')

const estudante0 = new Estudante("Vitòria Imunda", "casacomigopinkpie@gmail.com", "Dormir", "EOQ2003", false);
const estudante1 = new Estudante("Luis Funfact", "ilovegeorgeharrison@gmail.com", "Beatles", "BEATLES", false);
const estudante2 = new Estudante("Jubis Creudo", "issoehumAbsurdo$gmail.com", "Polemica", "UE2000", true);
const estudante3 = new Estudante("E-Lipe", "eusouumdobradordoarsim@gmail.com", "Emo", "EMO2694", true);

const prof0 = new Prof("SOC1991", "Dr. Eggman", "ouricomautido@gmail.com");
const prof1 = new Prof("POK1995", "Prof Carvalho", "rinhadeanimaissilvestres@gmail.com");
const prof2 = new Prof("AVA2006", "Iroh Hotman", "dragonofthewest@gmail.com");

const grupo0 = new Grupo("ArLindos", 1, 3, data, "E-Lipe");
const grupo1 = new Grupo("Osvaldos", 2, 2, data, "Jubis Creudo");

const estande0 = new Estande(2, grupo1);
const estande1 = new Estande(3, grupo0);

const avaliador0 = new Avaliador("Estudante", "EMO2694");
const avaliador1 = new Avaliador("Prof", "SOC1991")

const avaliacao0 = new Avaliacao(grupo0, 3, avaliador0)
const avaliacao1 = new Avaliacao(grupo1, 7, avaliador1)
