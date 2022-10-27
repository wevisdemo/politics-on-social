import React from 'react'

type Props = {
  show: boolean
}

const ScrollableArrow = ({ show }: Props) => {
  return (
    <div className={`absolute top-0 -right-[1px] w-[60px] h-full flex flex-col justify-center items-center
    bg-gradient-to-l from-black transition-all
    ${show ? "visible opacity-100" : "invisible opacity-0"}`}>
      <svg width={24} height={63} viewBox="0 0 24 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 61.5L22 31.5L2 1.5" stroke="white" strokeWidth={3} />
      </svg>
    </div>
  )
}

export default ScrollableArrow