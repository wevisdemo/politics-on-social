
import React from 'react'
import { scrollInToView } from './utils'
import WVContainer from '@wevisdemo/ui/components/container'
type Props = {}

const NAV_COLLECTION = [
  {
    name: <div>พรรคขยันสื่อสาร<br />ทางออนไลน์แค่ไหน</div>,
    view: "part-1",
  },
  {
    name: <div>พรรคขยันสื่อสาร<br />เรื่องอะไร</div>,
    view: "part-2",
  },
  {
    name: <div>กระแสตอบรับที่<br />พรรคได้รับ</div>,
    view: "part-3",
  }
]

const PartNav = (props: Props) => {
  return (
    <div className='px-[20px] flex flex-col divide-y 
      tablet:max-w-[70%] mx-auto
      desktop:flex-row desktop:divide-x-[0.5px] desktop:divide-y-0'>
      {
        NAV_COLLECTION.map((data, index) => (
          <button key={`nav-${data.view}`}
            className='w-full p-[10px] mb-[10px] desktop:w-1/3'
            onClick={() => scrollInToView(data.view)}>
            <div className='flex flex-row gap-x-[10px] w-full
              desktop:w-auto desktop:flex-col desktop:items-center desktop:justify-center desktop:gap-y-[10px]'>
              <div className='wv-font-anuphan wv-font-bold
                w-[25px] h-[25px] rounded-full border-green border-[1px]
                mr-[10px] wv-b4 leading-[24px] text-green
                mx-auto'>
                {index + 1}
              </div>
              <div className='wv-font-anuphan wv-font-bold mr-auto
                wv-b2 leading-[31.5px] text-left
                desktop:!mx-auto desktop:leading-[36px]
                desktop:text-center desktop:mr-0'>
                {data.name}
              </div>
              <svg className='ml-auto desktop:mx-auto' width={16} height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928933 12.9289C0.538408 13.3195 0.538408 13.9526 0.928933 14.3431L7.29289 20.7071ZM7 4.37114e-08L7 20L9 20L9 -4.37114e-08L7 4.37114e-08Z" fill="#88FFCC" />
              </svg>
            </div>
          </button>
        ))
      }
    </div>
  )
}

export default PartNav