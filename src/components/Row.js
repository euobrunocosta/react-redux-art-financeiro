import React, { PureComponent } from 'react'
import Data from './Data'
import Value from './Value'
import Menu from './Menu'

class Row extends PureComponent {

  render() {
    // console.log(this.props.row)
    const { id, data, descricao, categoria, valor } = this.props.row
    return (
      <tr>
        <td><Data data={data} /></td>
        <td>{descricao}</td>
        <td>{categoria.titulo}</td>
        <td className="text-right"><Value valor={valor} tipo={categoria.tipo} /></td>
        <td><Menu id={id} /></td>
      </tr>
    )
  }
}

export default Row