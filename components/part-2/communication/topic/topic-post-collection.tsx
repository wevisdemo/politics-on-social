import moment from 'moment'
import 'moment/locale/th'
import React, { useEffect, useState, useRef } from 'react'
import ScrollableArrow from '../../../utils/scrollable-arrow'
import { TOPIC_COMMUNICATION_POST } from './topic-data'

type Props = {}

const TopicPostCollection = ({ topic }: {
  topic: string
}) => {
  const [postItem, setPostItem] = useState<typeof TOPIC_COMMUNICATION_POST>([])
  useEffect(() => {
    setPostItem(TOPIC_COMMUNICATION_POST.filter((data) => data.topic === topic))
  }, [topic])

  const getLogo = (party: string) => {
    switch (party) {
      case "พลังประชารัฐ": return <div className='w-[30px] h-[30px] bg-[url("/design_assets/party_logo/พลังประชารัฐ.png")] bg-contain bg-center' />
      case "ภูมิใจไทย": return <div className='w-[30px] h-[30px] bg-[url("/design_assets/party_logo/ภูมิใจไทย.png")] bg-contain bg-center' />
      case "ประชาธิปัตย์": return <div className='w-[30px] h-[30px] bg-[url("/design_assets/party_logo/ประชาธิปัตย์.png")] bg-contain bg-center' />
      case "เพื่อไทย": return <div className='w-[30px] h-[30px] bg-[url("/design_assets/party_logo/เพื่อไทย.png")] bg-contain bg-center' />
      case "ก้าวไกล": return <div className='w-[30px] h-[30px] bg-[url("/design_assets/party_logo/ก้าวไกล.png")] bg-contain bg-center' />
      case "เสรีรวมไทย": return <div className='w-[30px] h-[30px] bg-[url("/design_assets/party_logo/เสรีรวมไทย.png")] bg-contain bg-center' />
      default:
        break;
    }
  }

  const getPostChanelLogo = (postchannel: string) => {
    switch (postchannel) {
      case "facebook": return <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width={15} height={15} rx="7.5" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.46972 15C11.5954 15 14.9394 11.6424 14.9394 7.5C14.9394 3.35756 11.5954 0 7.46972 0C3.344 0 0 3.35756 0 7.5C0 11.6424 3.344 15 7.46972 15ZM6.3006 9.23724C6.30084 9.41264 6.30109 9.58805 6.30109 9.76345V11.8485C6.30109 11.9754 6.32478 12.0269 6.46691 12.023C6.97621 12.015 7.48946 12.015 7.99875 12.023C8.14089 12.0269 8.17642 11.9913 8.17642 11.8446C8.1705 10.8131 8.17124 9.78377 8.17198 8.75336C8.17222 8.40973 8.17247 8.06597 8.17247 7.72196C8.17247 7.61428 8.16765 7.56751 8.18847 7.54776C8.2098 7.52753 8.25803 7.53565 8.36592 7.53565C8.66203 7.53169 8.96208 7.53169 9.25818 7.53565C9.34504 7.53565 9.39242 7.51583 9.40032 7.41673C9.4398 6.97275 9.47928 6.53274 9.52665 6.09273C9.5385 5.97778 9.50296 5.95399 9.39242 5.95399C9.11099 5.95994 8.82735 5.95919 8.54481 5.95845C8.4508 5.9582 8.35692 5.95795 8.26328 5.95795C8.25902 5.95795 8.25477 5.958 8.25054 5.95804C8.19587 5.95856 8.14512 5.95905 8.14878 5.87075C8.15207 5.76007 8.15193 5.64939 8.1518 5.539C8.15161 5.38449 8.15141 5.23054 8.16063 5.07793C8.18037 4.74892 8.37777 4.57846 8.7094 4.57846C8.95418 4.5745 9.20291 4.5745 9.45164 4.57846C9.5306 4.57846 9.55429 4.55468 9.55429 4.4754C9.55034 4.03539 9.55034 3.59141 9.55429 3.14744C9.55429 3.07608 9.5306 3.0523 9.45954 3.0523C9.30038 3.05352 9.14122 3.05324 8.98218 3.05296C8.6244 3.05232 8.2672 3.05169 7.9119 3.06816C7.4105 3.09194 6.97621 3.28221 6.67221 3.7024C6.43138 4.03142 6.32083 4.41197 6.31293 4.82027C6.30504 5.15325 6.30504 5.48623 6.31293 5.81921C6.31293 5.93813 6.28925 5.9857 6.15896 5.97778C6.02626 5.97064 5.89214 5.97207 5.7583 5.9735C5.66915 5.97445 5.58013 5.9754 5.49174 5.97381C5.40488 5.97381 5.38119 6.00156 5.38119 6.0848C5.38514 6.52085 5.38514 6.96086 5.38119 7.39691C5.37725 7.48808 5.41278 7.51583 5.49964 7.51187C5.59448 7.51017 5.68861 7.51065 5.78231 7.51114C5.90704 7.51179 6.03102 7.51243 6.15501 7.5079C6.27345 7.50394 6.30504 7.53961 6.30504 7.65854C6.29912 8.18477 6.29986 8.711 6.3006 9.23724Z" fill="#2094FF" />
      </svg>
      case "twitter": return <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width={15} height={15} rx="7.5" fill="white" />
        <path d="M12.7976 2.20238C11.4286 0.833336 9.58333 0 7.5 0C5.41666 0 3.57143 0.833336 2.20238 2.20238C0.833332 3.57143 0 5.41667 0 7.5C0 11.369 2.97619 14.5833 6.78571 14.9405C7.02381 14.9405 7.2619 15 7.5 15C8.03571 15 8.5119 14.9405 8.98809 14.8214C10.4762 14.5238 11.7857 13.8095 12.7976 12.7976C14.1667 11.4286 15 9.58333 15 7.5C15 5.41667 14.1667 3.57143 12.7976 2.20238ZM12.7976 4.46428C12.6786 4.64285 12.5 4.82143 12.381 5C12.2024 5.17857 12.0238 5.29762 11.8452 5.47619L11.7857 5.53571C11.7857 5.71428 11.7857 5.83333 11.7857 6.0119C11.7857 6.13095 11.7857 6.25 11.7857 6.36905C11.7857 6.54762 11.7262 6.66666 11.7262 6.84523C11.6667 7.14285 11.6071 7.44048 11.4881 7.67857C11.4286 7.85714 11.369 8.03571 11.25 8.21428C11.1309 8.39286 11.0714 8.63095 10.9524 8.80952C10.8333 9.04762 10.6548 9.22619 10.5357 9.46429C10.4167 9.64286 10.2976 9.76191 10.119 9.94048C9.94048 10.1191 9.7619 10.2976 9.58333 10.4167C9.46428 10.4762 9.40476 10.5952 9.28571 10.6548C9.04761 10.8333 8.80952 10.9524 8.57143 11.0714C8.39285 11.131 8.21429 11.25 8.03572 11.3095C7.79762 11.4286 7.5 11.4881 7.20238 11.5476C7.0238 11.6071 6.84524 11.6071 6.66667 11.6071C6.54762 11.6071 6.42857 11.6071 6.25 11.6071C6.13095 11.6071 6.0119 11.6071 5.89285 11.6071C5.83333 11.6071 5.83333 11.6071 5.77381 11.6071C5.65476 11.6071 5.53571 11.6071 5.41666 11.5476C5.23809 11.5476 5 11.4881 4.82142 11.4286C4.58333 11.3691 4.40476 11.3095 4.16667 11.25C3.92857 11.1905 3.75 11.0714 3.57143 11.0119C3.39286 10.8929 3.21428 10.8333 3.03571 10.7143C3.03571 10.7143 3.03571 10.7143 3.09524 10.7143C3.15476 10.7143 3.15476 10.7143 3.21428 10.7143C3.27381 10.7143 3.39286 10.7143 3.45238 10.7143C3.51191 10.7143 3.57142 10.7143 3.63095 10.7143C3.69047 10.7143 3.75 10.7143 3.80952 10.7143C3.92857 10.7143 4.04762 10.7143 4.10714 10.6548C4.46428 10.5952 4.76191 10.5357 5.05952 10.3571C5.29762 10.2381 5.53571 10.1191 5.77381 9.94048C5.83333 9.88096 5.89286 9.88095 5.95238 9.82142C5.71429 9.82142 5.53571 9.7619 5.35714 9.70238C5.17857 9.64286 5 9.52381 4.82142 9.40476C4.64285 9.28571 4.52381 9.10714 4.40476 8.9881C4.28571 8.80952 4.10714 8.51191 4.10714 8.45238C4.28571 8.45238 4.40476 8.5119 4.58333 8.5119C4.7619 8.5119 5 8.45238 5.05952 8.45238C4.88095 8.39286 4.7619 8.33333 4.58333 8.27381C4.40476 8.15476 4.22619 8.03571 4.04762 7.91666C3.86905 7.73809 3.75 7.55953 3.69047 7.38095C3.63095 7.20238 3.57143 7.08333 3.5119 6.90476C3.45238 6.78571 3.45238 6.60714 3.45238 6.4881C3.45238 6.4881 3.45238 6.48809 3.45238 6.42857C3.63095 6.54762 3.86904 6.60715 4.10714 6.66667C4.16666 6.66667 4.28572 6.66667 4.34524 6.66667C4.28572 6.60715 4.22619 6.54762 4.10714 6.4881C3.92857 6.30953 3.74999 6.13095 3.63095 5.89286C3.5119 5.65476 3.45238 5.35714 3.39286 5.05952C3.39286 5 3.39286 4.88095 3.39286 4.82143C3.39286 4.64286 3.45238 4.52381 3.5119 4.34524C3.57143 4.22619 3.63095 4.10715 3.69047 3.9881C3.80952 4.10715 3.86905 4.22619 3.98809 4.28572C4.10714 4.40477 4.22619 4.52381 4.34524 4.64285C4.52381 4.82143 4.70238 4.94047 4.88095 5.05952C5.11905 5.23809 5.41666 5.41666 5.71428 5.53571C5.89285 5.59524 6.07143 5.71429 6.25 5.77381C6.54762 5.89286 6.84524 5.95238 7.14286 6.0119C7.32143 6.0119 7.44048 6.07143 7.61905 6.07143C7.67857 6.07143 7.73809 6.07143 7.85714 6.07143C7.91667 6.07143 7.91667 6.07143 7.91667 6.0119C7.91667 5.89286 7.85714 5.77381 7.85714 5.65476C7.85714 5.53571 7.85714 5.41666 7.85714 5.35714C7.91667 5.11904 7.97619 4.88095 8.09523 4.64285C8.21428 4.46428 8.33334 4.28572 8.51191 4.10714C8.63095 3.9881 8.80952 3.86905 8.98809 3.80953C9.22619 3.69048 9.52381 3.63095 9.82143 3.63095C9.88095 3.63095 9.88095 3.63095 9.94048 3.63095C10.0595 3.63095 10.119 3.63095 10.2381 3.63095C10.5357 3.69048 10.7738 3.80952 11.0119 3.92857C11.131 3.98809 11.25 4.10714 11.3095 4.16666H11.369C11.4286 4.16666 11.4881 4.10714 11.6071 4.10714C11.7857 4.04762 11.9048 3.98809 12.0833 3.92857C12.2619 3.86905 12.4405 3.75 12.619 3.63095C12.5595 3.75 12.5 3.92857 12.4405 4.04762C12.3809 4.16666 12.2619 4.28572 12.2024 4.40476C12.1429 4.46429 12.0238 4.58333 11.9643 4.64285C11.9048 4.70238 11.8452 4.70238 11.7857 4.7619C11.8452 4.7619 11.8452 4.7619 11.9048 4.7619C12.1429 4.70238 12.3214 4.70238 12.5595 4.58334C12.5595 4.52381 12.6786 4.52381 12.7976 4.46428Z" fill="#00D1FF" />
      </svg>
      case "youtube": return <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width={15} height={15} rx="7.5" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5ZM10.9323 4.62466C11.4036 4.67734 11.7951 5.03046 11.9053 5.5091C12.0608 6.18517 12.0608 6.92266 12.0608 7.6194V7.63658C12.0608 8.33828 12.0602 9.08225 11.9033 9.76388C11.7931 10.2425 11.4015 10.5956 10.9305 10.6483C9.81467 10.773 8.68525 10.7736 7.56047 10.773C6.43587 10.7736 5.30617 10.773 4.19022 10.6483C3.71892 10.5955 3.32761 10.2424 3.21761 9.76388C3.06079 9.08234 3.06079 8.33837 3.06079 7.63658C3.06079 6.93479 3.06256 6.19073 3.21938 5.5091C3.32956 5.03046 3.72078 4.67734 4.19179 4.62466C5.30784 4.50008 6.43764 4.49943 7.56223 4.50008C8.68664 4.49943 9.81625 4.50008 10.9323 4.62466ZM6.39936 6.05713V9.03347C6.80142 8.82499 7.202 8.6173 7.60239 8.40972C8.15437 8.12354 8.70598 7.83755 9.2606 7.5499L6.39936 6.05713Z" fill="#FF4747" />
      </svg>
      default:
        break;
    }
  }

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