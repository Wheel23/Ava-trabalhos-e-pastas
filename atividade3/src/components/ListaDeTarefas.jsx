import React from 'react'
import { useState } from 'react'

const ListaDeTarefas = () => {
    const [tarefas]= useState([
        {id:1, descricao:"Levar o lixo", concluida: true},
        {id:2, descricao: "Banho no cachorro",concluida: false },
        {id:3, descricao: "Levar agua", concluida: true }])
    return (
    <div>
        <ul>
        <h2>Meus itens secundários</h2>
            {tarefas.map((tarefa)=>(<li key={tarefa.id}>{tarefa.descricao} olhe os status: {tarefa.concluida ? "concluida" : "incompleta"} </li> 
            ))}
        </ul>
        
    </div>
  )
}

export default ListaDeTarefas