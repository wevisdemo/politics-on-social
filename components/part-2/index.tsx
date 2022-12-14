import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import Spinner from '../utils/spinner'
const MentionCommunication = dynamic(() => import('./communication/competitor/mention-communication'), { loading: () => <Spinner /> })
const PersonCommunication = dynamic(() => import('./communication/member/person-communication'), { loading: () => <Spinner /> })
const TopicCommunication = dynamic(() => import('./communication/topic/topic-communication'), { loading: () => <Spinner /> })
const VisualCommunication = dynamic(() => import('./communication/visual/visual-communication'), { loading: () => <Spinner /> })

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