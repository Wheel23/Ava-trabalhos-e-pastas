import React from 'react'

const DetalhesProduto = (produto) => {
  const produtos = {
    nome: "banana",
    preco: 10.99 + "R$",
    descricao: "É uma banana"
  }
  
    return (
    <div>
        <h2>Nome do produto: {produtos.nome}</h2>
        <p>Preço é {produtos.preco}!</p>
        <p>Descrição: {produtos.descricao}.</p>

        <h2>Nome: {produto.teste.name}</h2>
        <p>Preço é {produto.teste.preco}</p>
        <p>Descrição: {produto.teste.descricao}</p>
    </div>
  )
}

export default DetalhesProduto