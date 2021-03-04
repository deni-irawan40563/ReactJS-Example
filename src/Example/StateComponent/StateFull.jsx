import React, { Component } from 'react'
export default class StateFull extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center">Ini Class Component Atau StateFull Component</h1>
        <p className="mt-4">Stateful components adalah komponen yang menggunakan state. <br /> Stateful components juga dikenal dengan sebutan Container dan Smart components.</p>
        <small>* State dan props adalah objek khusus yang menyimpan data untuk komponen.
                Kedua objek ini memiliki cara kerja yang berbeda. State adalah objek yang digunakan untuk menyimpan data di dalam komponen, sedangkan props adalah objek yang digunakan untuk menyimpan data yang diterima dari luar komponen.
        </small>
      </div>
    )
  }
}
