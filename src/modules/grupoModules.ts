import { PrismaClient } from "@prisma/client";
import Grupo from "../classes/Grupo";

const prisma = new PrismaClient();

export async function createGrupo(grupo:Grupo){
    const grupoData = await prisma.grupo.create({
        data: {
            nome: grupo.getNome(),
            numEstande: grupo.getNumEstande(),
            numGrupo: grupo.getNumGrupo(),
            lider: grupo.getLider(),
            dataHora: grupo.getDataHora(),

        }
    })}

    export async function readGrupo(grupo:Grupo){
        const grupoData = await prisma.grupo.findUnique({
            where:{
                numGrupo: grupo.getNumGrupo()
            }
        })
    }

    export async function deletGrupo(grupo:Grupo) {
        const grupoData = await prisma.grupo.delete({
            where:{
                numGrupo: grupo.getNumGrupo()
            }
        })
        
    }
