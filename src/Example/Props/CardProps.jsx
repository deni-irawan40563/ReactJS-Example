import React from 'react'
export default function CardProps(props) {
  return (
    <div>
      <div className="card text-center m-3">
        <img src={props.img} className="card-img-top card-img" alt={props.name} />
        <div className="card-body">
          <h1 className="card-text">{props.name} </h1>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  )
}

//Jika Props tidak dideklarasikan di component parent maka nilai default yang akan di tampilkan
CardProps.defaultProps = {
  img : 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg',
  name : 'Anonym',
  desc : 'Profile Is Anonymous'
}