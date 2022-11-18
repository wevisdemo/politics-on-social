import React, { useState } from 'react'
import { Members } from './member-data'

const Info = ({ members, handleClick }: {
  members: Members
  handleClick: Function
}) => {
  const [selectIndex, setSelectIndex] = useState(-1)

  return (
    <div className='w-full h-full absolute top-0 left-0 right-0 bottom-0'
      onClick={() => { setSelectIndex(-1) }}
      onMouseOver={() => setSelectIndex(-1)}>
      <div className='relative' >
        {members.map((member, index) =>
          <div key={`info-${member.name}`} className={`absolute rounded-full 
          z-20 transition-all cursor-pointer
          ${index === selectIndex ? 'opacity-100' : 'opacity-0'}
          ${member.pos} border-green border-[2px]
          `}
            onClick={(e) => {
              handleClick(member)
              setSelectIndex(index)
              e.stopPropagation()
            }}
            onMouseOver={(e) => {
              if (selectIndex !== index)
                setSelectIndex(index)
              else
                setSelectIndex(-1)
              e.stopPropagation()
            }} >
            <div className={`relative flex justify-center
            ${index === selectIndex ? 'visible' : 'invisible'}`}>
              <div className='absolute -bottom-0'>
                <div className={`relative flex flex-col justify-center items-center`}>
                  <div className='bg-green py-[5px] px-[10px] text-black
                    wv-font-anuphan flex-none w-[140px]'>
                    <div className='wv-font-bold text-desktop-bold-b7 leading-[21px]'>{member.name}</div>
                    <div className='text-desktop-regular-b7 font-normal leading-[18px]'>{member.position}</div>
                    <div className='wv-font-bold text-desktop-bold-b7 leading-[18px]'>{`${member.percent.toFixed(2)}%`}</div>
                  </div>
                  <svg className='w-[16px] h-[14px] z-10 -mt-[1px]' viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99996 13.5L0.205734 -1.36279e-06L15.7942 0L7.99996 13.5Z" fill="#88FFCC" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Info