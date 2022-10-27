import React from 'react'
import Methodology from './methodology'
import Summary from './summary'

type Props = {}

const Outro = (props: Props) => {
  return (
    <div>
      <Summary />
      <Methodology />
    </div>
  )
}

export default Outro