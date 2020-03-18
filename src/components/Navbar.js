import React, { PureComponent } from 'react'

class Navbar extends PureComponent {

  render() {
    return (
      <nav className="navbar navbar-dark bg-danger">
        <div className="container">
          <a href="/" className="navbar-brand">Art Financeiro</a>
        </div>
      </nav>
    )
  }
}

export default Navbar