import React, { PureComponent } from 'react'

class Options extends PureComponent {

  render() {
    return (
      <a href="/" className="float-right mt-1 mr-2 text-danger" id="opcoesLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-ellipsis-v"></i>
      </a>
    )
  }
}

export default Options