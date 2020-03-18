import { FETCH_ENTRADAS } from './types'
import axios from 'axios'

const apiUrl = 'http://localhost:8000/entradas'

export const fetchEntradas = (entradas) => {
  return {
    type: FETCH_ENTRADAS,
    payload: entradas
  }
}

export const fetchAllEntradas = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchEntradas(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}