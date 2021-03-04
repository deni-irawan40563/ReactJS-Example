import React, { Component } from 'react'

export default class Redux extends Component {
  render() {
    return (
      <div className="container p-5 mt-5 text-center">
        <h1>Redux Example</h1>
        <img src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif" alt="ads" className="redux-img"/>
        <ul className="text-left">
          <li>Store <br /> Tempat Penampung Semua Perintah Global</li>
          <li>Reducer <br /> Tempat mengupdate store disimpan</li>
          <li>Dispatching Action <br /> Proses pemanggilan sebuat intruksi pada reducer</li>
          <li>Subscription <br /> Proses pemanggilan store yang kita perlukan</li>
        </ul>
      </div>
    )
  }
}
