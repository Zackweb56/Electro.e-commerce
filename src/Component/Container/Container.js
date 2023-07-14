import React from 'react'
import './Container.css'

function Container(props) {
  return (
    <div>{props.children}</div>
  )
}

export default Container