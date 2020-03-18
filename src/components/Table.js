import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import Row from './Row'
import Pagination from './Pagination';
import Alert from 'react-bootstrap-alert-component'

class Table extends PureComponent {

  render() {
    const paginacao = {
      ...this.props.entradas,
    }
    delete paginacao.data
    const entradas = this.props.entradas.data
    if (typeof entradas === 'undefined') {
      return (
        <div className="alert alert-info">Carregando entradas ...</div>
      )
    }
    else if (entradas.lenght === 0) {
      return (
        <div className="alert alert-danger">Sem entradas para aqui!</div>
      )
    }
    return (
      <React.Fragment>
        <Alert text="Bruno cretated this plugin" type="warning" />
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Descrição</th>
              <th scope="col">Categoria</th>
              <th scope="col">Valor</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {entradas.map(function (row) {
              return <Row row={row} key={row.id} />
            })}
          </tbody>
        </table>
        <Pagination paginacao={paginacao} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    entradas: state.entradas
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);