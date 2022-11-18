import React from 'react'

type Props = {}

const Spinner = (props: Props) => {
  return (
    <div className='w-full h-full inline-flex items-center justify-center'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner