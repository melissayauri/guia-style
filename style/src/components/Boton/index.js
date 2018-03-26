import React from 'react'
import PropTypes from 'prop-types'

const Boton = ({ label }) => (
  <button style={{ backgroundColor: 'red' }}>
    {label}
  </button>
)

export const Props = {
  label: PropTypes.string.isRequired
}

Boton.propTypes = Props

export default Boton
