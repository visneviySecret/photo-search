import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Loader() {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="2.5"
      animationDuration="0.75"
      width="36"
      visible={true}
    />
  )
}

export default Loader
