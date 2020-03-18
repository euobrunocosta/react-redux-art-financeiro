import React, { PureComponent } from 'react'
import NumberFormat from 'react-number-format';

class Value extends PureComponent {

  render() {

    let { valor, tipo } = this.props
    const signal = tipo === 'debito' ? 'danger' : 'primary'
    valor = Math.abs(valor)
    
    return (
      <h5>
        <span className={"badge badge-pill badge-" + signal}>
          <NumberFormat
            value={valor}
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'$ '} />
        </span>
      </h5>
    )
  }
}

export default Value