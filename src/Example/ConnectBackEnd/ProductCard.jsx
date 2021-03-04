import React from 'react'

export default function CardProps(props) {
  return (
    <div>
      <div className="card text-center m-3">
        <img src={props.data.image} className="card-img-top card-img" alt={props.data.name} onClick={() => props.goDetail(props.data.id)}/>
        <div className="card-body">
          <h4 className="card-text" onClick={() => props.goDetail(props.data.id)}>{props.data.name} </h4>
          <div className="button-group">
              <button className="btn btn-primary mr-2" onClick={() => props.update(props.data)}>update</button>
              <button className="btn btn-danger" onClick={() => props.delete(props.data.id)}>Hapus</button>
          </div>
        </div>
      </div>
    </div>
  )
}
