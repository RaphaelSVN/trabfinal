import { PrismaClient } from "@prisma/client";
import Estudante from "../classes/Estudante";

const prisma = new PrismaClient();

export async function createEstudante(estudante: Estudante){
    
    const estudanteData = await prisma.estudante.create({
        data : {
            nome: estudante.getNome(),
            email: estudante.getEmail(),
            curso: estudante.getCurso(),
            matricula: estudante.getMatricula(),
            lider: estudante.getLider(),
        }
    })
}
export async function readEstudante(estudante: Estudante) {
    const estudanteData = await prisma.estudante.findUnique({
        where: {
            matricula: estudante.getMatricula()
        }
    })
}

export async function deleteEstudante(estudante: Estudante) {
    const estudanteData = await prisma.estudante.delete({
        where: {
            matricula: estudante.getMatricula(),
        }
    })
}
