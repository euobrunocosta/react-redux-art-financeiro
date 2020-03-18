import React, { PureComponent } from 'react'

class Search extends PureComponent {

  render() {
    return (
      <form name="busca" method="post" className="pr-4 mb-4">
        <div className="input-group">
          <input type="search" className="form-control" name="busca" placeholder="Busca" autoComplete="off" />
          <button type="submit" className="input-group-append btn btn-danger">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    )
  }
}

export default Search