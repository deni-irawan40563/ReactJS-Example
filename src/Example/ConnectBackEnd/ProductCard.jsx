import React from 'react'
import '../Container.css'

export default function CardProps(props) {
  return (
    <div>
      <div className="card text-center m-3">
        <img src={props.data.image} class="card-img-top" alt={props.data.name} />
        <div className="card-body">
          <h4 className="card-text">{props.data.name} </h4>
          <div className="button-group">
              <button className="btn btn-primary mr-2" onClick={() => props.update(props.data)}>update</button>
              <button className="btn btn-danger" onClick={() => props.delete(props.data.id)}>Hapus</button>
          </div>
        </div>
      </div>
    </div>
  )
}
