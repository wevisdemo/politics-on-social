import moment from 'moment'
import 'moment/locale/th'
import React, { useEffect, useState, useRef } from 'react'
import ScrollableArrow from '../../../utils/scrollable-arrow'
import { TOPIC_COMMUNICATION_POST } from './topic-data'
import Image from 'next/image'
import { getLogo, getPostChanelLogo } from '../../../utils'
type Props = {}

const TopicPostCollection = ({ topic }: {
  topic: string
}) => {
  const [postItem, setPostItem] = useState<typeof TOPIC_COMMUNICATION_POST>([])
  useEffect(() => {
    setPostItem(TOPIC_COMMUNICATION_POST.filter((data) => data.topic === topic))
  }, [topic])


  const [showArrow, setShowArrow] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (postItem.length && scrollAreaRef.current) {
      const targetDiv: HTMLDivElement = scrollAreaRef.current as HTMLDivElement
      if (targetDiv.offsetWidth + targetDiv.scrollLeft < targetDiv.scrollWidth) {
        setShowArrow(true)
        targetDiv.classList.remove("justify-center")
      } else {
        setShowArrow(false)
        targetDiv.classList.add("justify-center")
      }
    }
  }, [postItem, scrollAreaRef])

  return (
    <div className='mx-auto'>
      <div className='relative overflow-hidden desktop:ml-[50px]'>
        <div className='flex flex-row flex-nowrap gap-x-[10px] overflow-x-scroll items-baseline pr-[10px] scrollbar-hide
        desktop:pr-[50px]
        xxl-desktop:justify-center' ref={scrollAreaRef}
          onScroll={(e: React.UIEvent<HTMLDivElement>) => {
            const target: EventTarget = e.target;
            const targetDiv: HTMLDivElement = target as HTMLDivElement
            setShowArrow(targetDiv.offsetWidth + targetDiv.scrollLeft < targetDiv.scrollWidth)
          }}>
          {postItem.map(({ topic,
            party,
            postchannel,
            postdate,
            postmessage,
            postengagement,
            postreaction,
            postcomment,
            postshare,
            posturl, }) => (
            <a key={`${party}-${topic}`}
              className='flex-none w-[260px] bg-white rounded-[5px] p-[15px] h-auto'
              href={posturl} target="_blank" rel='noreferrer'>
              <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center'>
                  <div>{getLogo(party)}</div>
                  <div className='-ml-[5px]'>{getPostChanelLogo(postchannel)}</div>
                </div>
                <div className='wv-font-anuphan 
             wv-b7 text-black opacity-60'>
                  {moment(postdate, "YYYY-MM-DD").locale('th').format('ll')}
                </div>
              </div >
              <div className='wv-font-anuphan text-left break-words 
             wv-b5 text-black scrollbar-hide line-clamp-6
             border-b-[1px] border-gray !mt-[5px] pb-[2px] '>
                {postmessage}
              </div>
              <div className=' mt-[5px]'>
                <div className='flex items-start text-black gap-x-[5px]'>
                  <div className='wv-font-anuphan wv-font-bold wv-b6'>{postengagement}</div>
                  <div className='wv-font-anuphan wv-b6'>Engagement</div>
                </div>
                <div className='wv-font-anuphan wv-b7 text-black opacity-70 text-left'>
                  {`${postreaction} reactions + ${postcomment} comments + ${postshare} shares`}
                </div>
              </div>
            </a >
          ))}
        </div>
        <ScrollableArrow show={showArrow} />
      </div >
    </div>
  )
}

export default TopicPostCollection