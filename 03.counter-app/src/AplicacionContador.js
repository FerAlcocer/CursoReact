import React from 'react'
import PropTypes from 'prop-types'

const AplicacionContador = ({ value }) => {
  return (
    <>
        <h1>AplicacionContador</h1>
        <h2> { value } </h2>
    </>
  )
}

AplicacionContador.propTypes = {
    value: PropTypes.number
}

export default AplicacionContador;