import React from 'react'
import MentionCommunication from './communication/competitor/mention-communication'
import PersonCommunication from './communication/member/person-communication'
import TopicCommunication from './communication/topic/topic-communication'
import VisualCommunication from './communication/visual/visual-communication'

type Props = {}

const Part2 = (props: Props) => {
  return (
    <div id="part-2">
      <div className='text-center my-[26px]'>
        <div className='wv-font-anuphan wv-font-bold
            w-[25px] h-[25px] rounded-full bg-green mb-[10px]
            !mx-auto
            wv-b4 leading-[24px] text-black
            wv-b4 tablet:leading-[30px]
            tablet:w-[30px] tablet:h-[30px]'>
          2
        </div>
        <div className='wv-font-kondolar wv-font-bold
            text-green leading-[45px] wv-h3
            wv-h3 tablet:leading-[75px]'>
          พรรคขยันสื่อสาร<br className='tablet:hidden' />เรื่องอะไร
        </div>
        <VisualCommunication />
        <TopicCommunication />
        <PersonCommunication />
        <MentionCommunication />
      </div>
    </div>
  )
}

export default Part2