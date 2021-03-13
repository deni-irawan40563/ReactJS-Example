import React, {useState, useEffect} from 'react'

export default function ReactHooks() {
  //     state   setState    Hooks
  const [count, setCount] = useState(0)
  useEffect(()=>{
    //Component LifeCycle di Hooks
    document.title = `count = (${count})`
    return () => {
      document.title = `react example`
    }
  })
  return (
    <div className="container p-5 mt-4 text-center">
      <h1>Simple React hook Example</h1>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={()=>setCount(count + 1)}>Tambah</button>
      <hr />
      <small>* React Hook digunakan agar stateless Component dapat menggunakan state</small>
    </div>
  )
}
