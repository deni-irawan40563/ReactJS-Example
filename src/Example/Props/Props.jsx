import React, { Component } from 'react'
import CardProps from './CardProps'
export class Props extends Component {
  render() {
    return (
      <div className="container card-group">
        <CardProps 
        name='Naruto'
        desc='Aku adalah hokage ke 6 dari desa konoha'
        img='https://static.wikia.nocookie.net/naruto/images/d/dd/Naruto_Uzumaki%21%21.png/revision/latest?cb=20161013233552'
        />
        <CardProps 
        name='Sasuke'
        desc='Aku akan menghancurkan desa konoha'
        img='https://static.wikia.nocookie.net/naruto/images/1/13/Sasuke_Part_2.png/revision/latest?cb=20170621055122&path-prefix=id'
        />
        {/* Contoh Props yang tidak diisi maka akan memanggil nilai props default */}
        <CardProps />
      </div>
    )
  }
}

export default Props
