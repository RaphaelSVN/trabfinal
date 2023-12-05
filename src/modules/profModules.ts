import { PrismaClient } from "@prisma/client";
import Prof from "../classes/Prof";

const prisma = new PrismaClient();

export async function createProf(prof: Prof) {

    const profData = await prisma.prof.create({
        data : {
            email: prof.getEmail(),
            matricula: prof.getMatricula(),
            nome: prof.getNome()
        }
    })
}

export async function readProf(prof: Prof) {
    const profData = await prisma.prof.findUnique({
        where : {
            matricula : prof.getMatricula()
        }
    })
}

export async function deleteProf(prof: Prof) {
    const profData = await prisma.prof.delete({
        where: {
            matricula: prof.getMatricula()
        }
    })
}
