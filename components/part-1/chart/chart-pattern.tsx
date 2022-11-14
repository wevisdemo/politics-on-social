import React, { useState } from 'react'
import { CHART_PATTERN_COLLECTION } from './chart-pattern-data'
type Props = {}

const PatternItem = ({ data }: { data: typeof CHART_PATTERN_COLLECTION[number] }) => {
  const [expand, setExpand] = useState(false)
  return (
    <div className='p-[10px] bg-black-2 mb-[15px] cursor-pointer
      max-w-[1124px] mx-auto
      tablet:px-[50px] tablet:py-[15px]'
      onClick={() => setExpand(!expand)}>
      <div className='flex flex-row justify-between items-center mb-[11px]'>
        <div className='wv-font-anuphan wv-font-bold wv-b3 leading-[27px]
          wv-b3 tablet:leading-[31.5px]'>{data.party}</div>
        <div className='mx-[3px] wv-font-anuphan
            flex flex-row gap-x-[10px] items-center gap-1 opacity-60
            wv-b7 leading-[15px]
            wv-b7 tablet:leading-[18px]'>
          <div className='flex flex-row justify-between items-center gap-x-[3px]'>
            <div className='w-[8px] h-[8px] bg-black border-[0.5px] border-gray' />
            <div>
              min: 0
            </div>
          </div>
          <div className='flex flex-row justify-between items-center gap-x-[3px]'>
            <div className='w-[8px] h-[8px] bg-green border-[0.5px] border-gray' />
            <div>
              max: {data.max}
            </div>
          </div>
        </div>
      </div>
      <div className='desktop:hidden'>
        {data.pattern_mobile}
      </div>
      <div className='hidden desktop:block'>
        {data.pattern_desktop}
      </div>
      <div className={`wv-font-anuphan wv-b7 
        wv-b5 tablet:leading-[24px]
      ${expand ? 'block' : 'hidden'}`}>
        {data.keyEvent.map((event, index) => (
          <div key={`event-${data.party}-${index}`}
            className='text-left mb-2'>
            <span className='wv-font-regular'>{index + 1}.</span><span className=' wv-font-bold'> {event.event}</span> <span className='text-gray-2'>({event.date})</span> : {event.description}&nbsp;<a href={event.link} target="_blank" rel="noreferrer" className='text-green  hover:underline'>(คลิกดูตัวอย่างโพสต์)</a>
          </div>
        ))}
      </div>
      <div className='wv-font-anuphan wv-b7 text-green cursor-pointer hover:underline text-left
      wv-b7 tablet:leading-[18px]'>
        {!expand ? "+ อ่านรายละเอียด" : "- ปิดรายละเอียด"}
      </div>
    </div>
  )
}


const ChartPattern = (props: Props) => {
  return (
    <div className='px-[10px] py-[30px] flex flex-col gap-[10px]'>
      <div className='wv-font-anuphan wv-font-bold
            !mt-[30px]
            leading-[31.5px]
            wv-b2 tablet:leading-[36px]'>
        5 วันที่แต่ละพรรคขยันโพสต์ที่สุด
      </div>
      <div className='wv-font-anuphan
            wv-b4 leading-[27px] 
            tablet:leading-[27px]'>
        สะท้อนตัวอย่างวาระที่พรรคสื่อสารมากบนโลกออนไลน์
      </div>
      <div className='flex flex-col wv-font-anuphan justify-center 
            items-center gap-1 opacity-60'>
        <div className='text-green wv-font-bold
        wv-b7 leading-[15px]
        tablet:leading-[18px]'>
          ความเข้มสีเขียว แสดงจำนวนโพสต์/วัน
        </div>
        <div className='flex flex-col tablet:flex-row gap-x-[10px]
        wv-font-regular
        wv-b7 leading-[15px]
        tablet:leading-[18px]'>
          <div className='flex flex-row justify-between items-center gap-x-[3px]'>
            <div className='w-[8px] h-[8px] bg-black border-[0.5px] border-gray' />
            <div>
              = จำนวนโพสต์/วัน ที่น้อยที่สุดของพรรค
            </div>
          </div>
          <div className='flex flex-row justify-between items-center gap-x-[3px]'>
            <div className='w-[8px] h-[8px] bg-green border-[0.5px] border-gray' />
            <div>
              = จำนวนโพสต์/วัน ที่มากที่สุดของพรรค
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[32px]'>
        {CHART_PATTERN_COLLECTION.map((data) => (
          <PatternItem key={`pattern-${data.party}`} data={data} />
        ))}
      </div>
    </div>
  )
}

export default ChartPattern

