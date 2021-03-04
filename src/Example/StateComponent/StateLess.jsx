import React from 'react'

export default function StateLess() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Ini Function Component Atau StateLess Component</h1>
      <p className="mt-4"> Stateless adalah komponen yang tidak menggunakan state. <br/> Stateless juga dikenal dengan sebutan Presentation dan Dumb Components.</p>
      <small>* Kalau menggunakan state, maka disebut: Sateful, Container, dan Smart. Sedangkan kalau tidak: Stateless, Presentation, Dumb.</small>
    </div>
  )
}
