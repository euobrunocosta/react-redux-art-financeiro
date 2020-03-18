import { FETCH_ENTRADAS } from '../actions/types'

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_ENTRADAS:
      return action.payload
    default:
      return state;
  }
}