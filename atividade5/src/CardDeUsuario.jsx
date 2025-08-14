import React from 'react'

const CardDeUsuario = ({nome, email, avatarURL}) => {
  return (
    <div>
        <h3>{nome} é seu nome de usuario</h3>
        <p>seu email é {email}</p>
        <img />
    </div>
  )
}

export default CardDeUsuario