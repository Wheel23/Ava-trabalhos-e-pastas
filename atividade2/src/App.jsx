import React from 'react'
import DetalhesProduto from './componets/DetalhesProduto'

const App = () => {
  const produtoA = {
    name: "Agua",
    preco: 5 + "R$",
    descricao: "É agua mineral sem gás (graças a Deus)"
  }
  return (
    <div>
      <DetalhesProduto teste={produtoA}/>
    </div>
  )
}

export default App