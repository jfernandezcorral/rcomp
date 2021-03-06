import React from "react"
import PropTypes from 'prop-types'

const Button = (props)=><button {...props}></button>

Button.propTypes = {
    children: PropTypes.node.isRequired
}
export default Button