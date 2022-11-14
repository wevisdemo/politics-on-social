import Image from 'next/image'
import React, { useState, UIEvent, useRef, useEffect } from 'react'
import { getLogo, HeadDecorationLeft, HeadDecorationRight } from "../utils"
import ScrollableArrow from '../utils/scrollable-arrow'

type Props = {}

const CHART_GOVERNMENT = [
  {
    party: "พลังประชารัฐ",
    topic: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/topic/palangpracharat.png" alt="/topic/palangpracharat.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    member: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/member/palangpracharat.png" alt="/member/palangpracharat.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    competitor: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/competitor/palangpracharat.png" alt="/competitor/palangpracharat.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
  },
  {
    party: "ภูมิใจไทย",
    topic: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/topic/phumjaithai.png" alt="/topic/phumjaithai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    member: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/member/phumjaithai.png" alt="/member/phumjaithai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    competitor: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/competitor/phumjaithai.png" alt="/competitor/phumjaithai.png" objectPosition='top' objectFit='contain' layout='fill' /></div>,
  },
  {
    party: "ประชาธิปัตย์",
    topic: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/topic/prachatipat.png" alt="/topic/prachatipat.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    member: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/member/prachatipat.png" alt="/member/prachatipat.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    competitor: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/competitor/prachatipat.png" alt="/competitor/prachatipat.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
  },
]
const CHART_OPPOSITION = [
  {
    party: "เพื่อไทย",
    topic: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/topic/puerthai.png" alt="/topic/puerthai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    member: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/member/puerthai.png" alt="/member/puerthai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    competitor: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/competitor/puerthai.png" alt="/competitor/puerthai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
  },
  {
    party: "อนาคตใหม่/ก้าวไกล",
    topic: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/topic/kawklai.png" alt="/topic/kawklai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    member: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/member/kawklai.png" alt="/member/kawklai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    competitor: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/competitor/kawklai.png" alt="/competitor/kawklai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
  },
  {
    party: "เสรีรวมไทย",
    topic: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/topic/seriruamthai.png" alt="/topic/seriruamthai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    member: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/member/seriruamthai.png" alt="/member/seriruamthai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
    competitor: <div className='w-[150px] h-[221.31px] relative' ><Image src="/design_assets/chart/chart06_feedback/competitor/seriruamthai.png" alt="/competitor/seriruamthai.png" objectFit='contain' objectPosition='top' layout='fill' /></div>,
  },
]

const RenderChart: React.FC<{ title: string }> = ({ title }) => {
  const getTitle = (title) => {
    switch (title) {
      case "topic": return "ด้านเนื้อหา";
      case "member": return "ด้านบุคคล";
      case "competitor": return "ด้านคู่แข่ง";
      default: return "";
    }
  }

  const [showArrow, setShowArrow] = useState<boolean>(true)
  const horizontalScrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (horizontalScrollRef.current) {
      setShowArrow((horizontalScrollRef.current.scrollWidth > horizontalScrollRef.current.clientWidth))
    }
  }, [horizontalScrollRef])
  return (
    <div className="relative mt-[56px] ml-[20px]">
      <div className='wv-font-kondolar wv-font-bold
            text-green leading-[45px] wv-h5'>
        {getTitle(title)}
      </div>
      <div className="flex flex-row tablet:justify-center divide-x overflow-x-scroll scrollbar-hide pr-[20px]"
        ref={horizontalScrollRef}
        onScroll={(e: UIEvent<HTMLDivElement>) => {
          const target: EventTarget = e.target
          const targetDiv = target as HTMLDivElement
          setShowArrow(targetDiv.offsetWidth + targetDiv.scrollLeft < targetDiv.scrollWidth)
        }}>
        <div className="pr-[20px]">
          <div className="flex flex-row gap-x-[5px] opacity-60">
            <HeadDecorationLeft />
            <div className="flex-none wv-font-anuphan wv-font-bold wv-b6 ">
              ฝ่ายรัฐบาล
            </div>
            <HeadDecorationRight />
          </div>
          <div className="flex flex-row gap-x-[10px]">
            {CHART_GOVERNMENT.map((data) => (
              <div key={`feedback-${data.party}`} className="">
                <div className="flex flex-col items-center gap-[5px] my-[10px]">
                  <div>{getLogo(data.party)}</div>
                  <div className="wv-font-anuphan wv-font-bold wv-b6 ">{data.party}</div>
                </div>
                {data[title]}
              </div>
            ))}
          </div>
        </div>
        <div className="pl-[20px]">
          <div className="flex flex-row gap-x-[5px] opacity-60">
            <HeadDecorationLeft />
            <div className="flex-none  wv-font-anuphan wv-font-bold wv-b6 ">
              ฝ่ายค้าน
            </div>
            <HeadDecorationRight />
          </div>
          <div className="flex flex-row gap-x-[10px]">
            {CHART_OPPOSITION.map((data) => (
              <div key={`feedback-${data.party}`} className="">
                <div className="flex flex-col items-center gap-[5px] my-[10px]">
                  <div>{getLogo(data.party)}</div>
                  <div className="wv-font-anuphan wv-font-bold wv-b6 ">{data.party}</div>
                </div>
                {data[title]}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollableArrow show={showArrow} />
    </div>
  )
}

const Part3 = (props: Props) => {


  return (
    <div id="part-3">
      <div className='text-center my-[26px]'>
        <div className=" px-[20px] flex flex-col gap-[10px] desktop:py-[32px]">
          <div className='wv-font-anuphan wv-font-bold
            w-[25px] h-[25px] rounded-full bg-green mb-[10px]
            !mx-auto
            wv-b4 leading-[24px] text-black
            tablet:leading-[30px]
            tablet:w-[30px] tablet:h-[30px]'>
            3
          </div>
          <div className='wv-font-kondolar wv-font-bold
            text-green leading-[45px] wv-h3'>
            กระแสตอบรับที่พรรคได้รับ
          </div>
          <div className="wv-font-kondolar wv-font-bold wv-h5 leading-[39.2px] mt-[62px] mb-[28px]">
            มาดูกันว่าสิ่งที่พรรคให้ความสำคัญนั้น สอดคล้องกับความสนใจของชาวโซเชียลหรือไม่
          </div>
        </div>
        <div className="w-[300px] py-[15px] px-[13.5px] bg-black-2 mx-auto">
          <div className="wv-font-anuphan wv-font-bold wv-b6 mb-[10px] text-center mx-auto">วิธีอ่าน</div>
          <div className="flex flex-row justify-center items-baseline gap-x-[10px]">
            <div className="w-[120px] flex flex-col justify-end items-end text-right">
              <svg className="w-[35px] h-[35px] mb-[10px]" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5 7V33H8.5" stroke="white" />
                <rect x={5} y="3.5" width={24} height={26} stroke="white" />
                <rect x="9.1123" y="7.6123" width="15.6531" height="9.63265" fill="white" />
                <rect x="9.1123" y="20.8564" width="15.6531" height="1.20408" fill="white" />
                <rect x="9.1123" y="24.4697" width="9.63265" height="1.20408" fill="white" />
              </svg>
              <div className="wv-font-anuphan wv-b6 leading-[18px]">จำนวนโพสต์ที่พรรค<br />พูดถึงแต่ละเรื่อง</div>
              <div className="wv-font-anuphan wv-b7 leading-[15px] opacity-60">เรียงจากมากไปน้อย</div>
              <svg className="w-[36px] h-[25px] mt-[5px] mb-[10px] " viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1464 24.3536C18.3417 24.5488 18.6583 24.5488 18.8536 24.3536L22.0355 21.1716C22.2308 20.9763 22.2308 20.6597 22.0355 20.4645C21.8403 20.2692 21.5237 20.2692 21.3284 20.4645L18.5 23.2929L15.6716 20.4645C15.4763 20.2692 15.1597 20.2692 14.9645 20.4645C14.7692 20.6597 14.7692 20.9763 14.9645 21.1716L18.1464 24.3536ZM18 -2.18557e-08L18 24L19 24L19 2.18557e-08L18 -2.18557e-08Z" fill="white" />
              </svg>
            </div>
            <div className="wv-font-anuphan wv-b7 leading-[15px] mb-auto">vs.</div>
            <div className="w-[120px] flex flex-col justify-start items-start text-left">
              <svg className="w-[35px] h-[35px] mb-[10px]" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 17.2578V17.3465C18.4996 17.5924 18.4012 17.8288 18.2251 18.0067C18.049 18.1846 17.8087 18.2906 17.5538 18.3027C17.7697 18.5257 17.8513 18.8402 17.7698 19.1349C17.6883 19.4296 17.4552 19.6632 17.1528 19.753C17.3469 19.9334 17.4565 20.1821 17.4565 20.4419V20.6981C17.4562 21.027 17.2808 21.3329 16.992 21.5081C17.0675 21.6442 17.1076 21.7959 17.1086 21.9501V22.0389C17.1086 22.2938 17.0036 22.5382 16.8166 22.7186C16.6294 22.8988 16.3757 23 16.1112 23H13.4194C12.559 23.0001 11.712 22.7952 10.9537 22.4034C10.7982 22.3231 10.6486 22.2465 10.5217 22.1818C10.41 22.1248 10.3166 22.0396 10.2515 21.9353C10.1864 21.831 10.152 21.7115 10.1522 21.5897V17.3022C10.1522 16.6318 11.5434 15.9615 11.5434 15.011V13.6703C11.5412 13.4995 11.6077 13.3345 11.7288 13.2098C11.8499 13.085 12.0163 13.0101 12.1933 13.0007C12.57 12.9888 12.9356 13.1246 13.2065 13.3772C13.4774 13.6298 13.6303 13.9774 13.6303 14.3406V15.6263C13.6303 15.8042 13.7036 15.9746 13.834 16.1003C13.9645 16.226 14.1415 16.2967 14.3259 16.2967H17.5025C17.7671 16.2967 18.0208 16.3979 18.2078 16.5781C18.3948 16.7584 18.5 17.0029 18.5 17.2578L18.5 17.2578ZM17.8043 18.8548C17.8043 18.8694 17.8015 18.8834 17.8008 18.8979C17.8013 18.91 17.8043 18.9214 17.8043 18.9337V18.8548ZM9.28258 16.7994V22.1619C9.28258 22.2544 9.20474 22.3294 9.10864 22.3294H6.67395C6.57785 22.3294 6.5 22.2544 6.5 22.1619V16.7994C6.5 16.755 6.51837 16.7124 6.55099 16.681C6.58362 16.6495 6.62778 16.6318 6.67395 16.6318H9.10864C9.1548 16.6318 9.19908 16.6495 9.23171 16.681C9.26433 16.7124 9.28258 16.755 9.28258 16.7994ZM8.41307 20.8214C8.41307 20.6881 8.35807 20.5603 8.26021 20.466C8.16234 20.3717 8.02973 20.3187 7.89136 20.3187C7.75299 20.3187 7.62025 20.3717 7.52239 20.466C7.42453 20.5603 7.36964 20.6881 7.36964 20.8214C7.36964 20.9548 7.42452 21.0827 7.52239 21.177C7.62026 21.2713 7.75298 21.3242 7.89136 21.3242C8.02973 21.3242 8.16235 21.2713 8.26021 21.177C8.35807 21.0827 8.41307 20.9548 8.41307 20.8214Z" fill="white" />
                <path d="M24.0122 6H17.0854C16.8085 6 16.5 6.23627 16.5 6.57518V11.5948C16.5 11.9337 16.8085 12.17 17.0854 12.17H18.5V14.5L20.5 12.17H24.0122C24.2471 12.17 24.5 11.99 24.5 11.5948V6.57518C24.5 6.17996 24.2471 6 24.0122 6Z" fill="white" />
                <path d="M29 22L23.5 18L23.5153 20.1964C23.5012 20.2005 23.4885 20.2033 23.4743 20.2088C23.3883 20.2363 23.3035 20.2652 23.2047 20.2954C22.6542 20.4879 22.1192 20.7423 21.6095 21.0559C20.6397 21.6541 19.7687 22.4806 19.101 23.4418C18.4516 24.3714 17.9759 25.4455 17.726 26.5428C17.4805 27.6031 17.4353 28.7294 17.5891 29.7993C17.606 29.9162 17.7063 30.0001 17.8277 30.0001C17.9477 30.0001 18.0493 29.9162 18.0663 29.7993C18.2075 28.8285 18.5279 27.8919 18.9909 27.0914C19.4314 26.3309 20.0172 25.664 20.6891 25.1648C21.323 24.6945 22.0444 24.3685 22.7699 24.2241C23.017 24.1746 23.2725 24.1471 23.5322 24.1375L23.535 26.5L29 22Z" fill="white" />
                <rect x={1} y="0.5" width={34} height={34} rx={17} stroke="white" />
              </svg>
              <div className="wv-font-anuphan wv-b6 leading-[18px]">จำนวนengagement*<br />เฉลี่ยต่อ 1 โพสต์</div>
              <div className="wv-font-anuphan wv-b7 leading-[15px] opacity-60">เรียงจากมากไปน้อย</div>
              <svg className="w-[36px] h-[25px] mt-[5px] mb-[10px] " viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1464 24.3536C18.3417 24.5488 18.6583 24.5488 18.8536 24.3536L22.0355 21.1716C22.2308 20.9763 22.2308 20.6597 22.0355 20.4645C21.8403 20.2692 21.5237 20.2692 21.3284 20.4645L18.5 23.2929L15.6716 20.4645C15.4763 20.2692 15.1597 20.2692 14.9645 20.4645C14.7692 20.6597 14.7692 20.9763 14.9645 21.1716L18.1464 24.3536ZM18 -2.18557e-08L18 24L19 24L19 2.18557e-08L18 -2.18557e-08Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-x-[10px]">
            <div className="w-1/3"></div>
            <svg className='min-w-1/3 w-[90px] h-[116px]' viewBox="0 0 94 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.25" width={20} height={20} rx={2} fill="#88FFCC" />
              <line x1="20.25" y1={9} x2="73.25" y2={9} stroke="#88FFCC" strokeWidth={2} />
              <rect x="73.25" width={20} height={20} rx={10} fill="#88FFCC" />
              <g opacity="0.5">
                <rect x="0.25" y={24} width={20} height={20} rx={2} fill="#88FFCC" />
                <path d="M20.25 34C33.7635 34 59.1689 58 80.25 58" stroke="#88FFCC" strokeWidth={2} />
                <rect x="73.75" y={48} width={20} height={20} rx={10} fill="#88FFCC" />
                <rect x="0.25" y={72} width={20} height={20} rx={2} fill="#88FFCC" />
                <path d="M20.25 60C33.7635 60 59.1689 107 80.25 107" stroke="#88FFCC" strokeWidth={2} />
                <rect x="73.75" y={96} width={20} height={20} rx={10} fill="#88FFCC" />
                <rect x="0.25" y={96} width={20} height={20} rx={2} fill="#88FFCC" />
                <path d="M20.25 110C33.7635 110 59.1689 82 80.25 82" stroke="#88FFCC" strokeWidth={2} />
                <rect x="73.75" y={72} width={20} height={20} rx={10} fill="#88FFCC" />
                <rect x="0.25" y={48} width={20} height={20} rx={2} fill="#88FFCC" />
                <path d="M20.25 84C33.7635 84 59.1689 34 80.25 34" stroke="#88FFCC" strokeWidth={2} />
                <rect x="73.75" y={24} width={20} height={20} rx={10} fill="#88FFCC" />
              </g>
            </svg>
            <div className="w-1/3 wv-font-anuphan wv-b7 leading-[15px] mb-auto text-green">
              ถ้าอยู่ลำดับเดียวกัน แปลว่าสอดคล้องกัน
            </div>
          </div>
          <div className="w-[250px] mx-auto 
          wv-font-anuphan wv-b7 leading-[15px] opacity-60">
            *หมายเหตุ : จำนวน engagement = like + comment + share ซึ่งอาจเป็นไปได้ทั้งแง่บวกและลบ
          </div>
        </div>
        <RenderChart title="topic" />
        <RenderChart title="member" />
        <RenderChart title="competitor" />
      </div>
    </div>
  )
}

export default Part3