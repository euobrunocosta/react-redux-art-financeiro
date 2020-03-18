import React, { PureComponent } from 'react'
import { format } from "date-fns";

class Data extends PureComponent {

  render() {
    const data = new Date(this.props.data)
    const dataFormatada = format(data, 'dd/MM/yyyy')
    return (
      <div>{dataFormatada}</div>
    )
  }
}

export default Data