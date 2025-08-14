import React from 'react'
import CardDeUsuario from './components/CardDeUsuario'


const App = () => {
  return (
    <div class='container-cards'>
      <CardDeUsuario nome = 'Luiz' email ='luizmaneirao@gmail.com'/>

      <CardDeUsuario nome = 'Julia' email ='Julia123estudar@gmail.com'/>
    </div>
  )
}

export default App