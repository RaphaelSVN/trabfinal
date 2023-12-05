import Estudante from "./Estudante";
import Avaliacao from "./Avaliacao";
import Avaliador from "./Avaliador";
import Estande  from "./Estande";
import Grupo from "./Grupo";
import Prof from "./Prof";

const data = new Date ('Dezembro 5, 2023 09:00:00')

const estudante0 = new Estudante("RV", "rsvn@gmail.com", "xxx", "yyy", false);
const estudante1 = new Estudante("JL", "jlp7@gmail.com", "lalala", "mimimi", false);
const estudante2 = new Estudante("GCV", "gcv@gmail.com", "okay", "tuts", true);
const estudante3 = new Estudante("LP", "lpmax@gmail.com", "rex", "cbum", true);

const prof0 = new Prof("Don", "D.V.", "dv@gmail.com");
const prof1 = new Prof("Miss", "Mss", "mss@gmail.com");
const prof2 = new Prof("Kroy", "NDM", "ndm@gmail.com");

const grupo0 = new Grupo("Jaja", 1, 3, data, "LP");
const grupo1 = new Grupo("Lol", 2, 2, data, "GCV");

const estande0 = new Estande(2, grupo1);
const estande1 = new Estande(3, grupo0);

const avaliador0 = new Avaliador("Estudante", "cbum");
const avaliador1 = new Avaliador("Prof", "Don")

const avaliacao0 = new Avaliacao(grupo0, 3, avaliador0)
const avaliacao1 = new Avaliacao(grupo1, 7, avaliador1)
