import { PrismaClient } from "@prisma/client";
import Grupo from "../classes/Grupo";
import Avaliacao from "../classes/Avaliacao";

const prisma = new PrismaClient();

export async function createAvalicao(avaliacao: Avaliacao, grupo: Grupo) {
    const avaliacaoData = await prisma.avaliacao.create({
        data: {
            nota: avaliacao.getNota(),
            nome: grupo.getNome(),
            avaliador: avaliacao.getAvaliador()
        }
    })
}