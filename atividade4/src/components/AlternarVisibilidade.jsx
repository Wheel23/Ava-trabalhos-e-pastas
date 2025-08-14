import React from 'react'
import { useState } from 'react'


const AlternarVisibilidade = () => {
    const [visivel,setVisivel] =useState(true)
      return (
    <div>
        <h2>Teste o seguinte</h2>
        <button onClick ={()=>{setVisivel(!visivel)}}>{visivel ? "agora você pode ver o texto" : " -------"}</button>
    </div>
  )
}

export default AlternarVisibilidade