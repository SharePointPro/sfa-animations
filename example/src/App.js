import React, { Component } from 'react'

import SfaAnimation from 'sppro-sfa-animations'

export default class App extends Component {
  render () {
    return (
      <div style={{width: '150px'}}>
        <SfaAnimation alertType='error' />
      </div>
    )
  }
}
