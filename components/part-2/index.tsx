import React from 'react'
import TopicCommunication from './communication/topic-communication'
import VisualCommunication from './communication/visual-communication'

type Props = {}

const Part2 = (props: Props) => {
  return (
    <div id="part-2">
      <div className='text-center my-[26px]'>
        <div className='wv-font-anuphan wv-font-bold
            w-[25px] h-[25px] rounded-full bg-green mb-[10px]
            mx-auto
            text-mobile-bold-b4 leading-[24px] text-black'>
          2
        </div>
        <div className='wv-font-kondolar wv-font-bold
            text-green leading-[45px] text-mobile-bold-h3'>
          พรรคขยันสื่อสาร<br />เรื่องอะไร
        </div>
        <VisualCommunication />
        <TopicCommunication />
      </div>
    </div>
  )
}

export default Part2