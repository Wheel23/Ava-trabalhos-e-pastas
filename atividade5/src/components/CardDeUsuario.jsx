import React from 'react'
import './CardDeUsuario.css' 

const CardDeUsuario = ({nome, email, avatarURL = 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='}) => {
  return (
    <div>
        <img src= {avatarURL} />
        <h3>Nome de usuário: {nome}</h3>
        <p>Email do usuário: <span>{email}</span></p>
        
    </div>
  )
}

export default CardDeUsuario