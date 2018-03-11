// @flow

import React from 'react'
import './index.css'

const Intro = () => (
  <section id="intro" className="col-md col-xs-12">
    <h1 className="title">Cryp</h1>
    <p className="subtitle">
      <a href="https://github.com/adrielcafe/CrypAndroidApp">Open source</a> cryptocurrency
      portfolio tracker
    </p>
    <p className="info">
      Supporting over 1900 altcoins, including Ƀ (Bitcoin), Ł (Litecoin) and Ξ (Ethereum), Cryp
      let&#39;s you manage all your digital assets easily. Always knows your total portfolio
      balance, in real time!
    </p>
    <a className="btn" href="https://play.google.com/store/apps/details?id=cafe.adriel.cryp">
      <i className="material-icons">android</i>
      Google Play
    </a>
    <a className="btn" href="https://github.com/adrielcafe/CrypAndroidApp#donate">
      <i className="material-icons">free_breakfast</i>
      Donate
    </a>
    <p className="credits">
      Made with <i className="material-icons">favorite</i> by{' '}
      <a href="http://adriel.cafe">Adriel Café</a>
      <br />
      App source code available <a href="https://github.com/adrielcafe/CrypAndroidApp">here</a> |
      Website source code available <a href="https://github.com/adrielcafe/cryp">here</a>
    </p>
  </section>
)

export default Intro
