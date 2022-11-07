import React, { useState } from 'react'
import { HeadDecorationLeft, HeadDecorationRight } from '../../../utils'
import { GOVERNMENT, OPPOSITION } from './member-data'
type Props = {}


const Info = ({ members }: {
  members: {
    name: string;
    position: string;
    percent: number;
    pos?: string;
  }[]
}) => {
  const [selectIndex, setSelectIndex] = useState(-1)
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0'
      onClick={() => setSelectIndex(-1)}
      onMouseOver={() => setSelectIndex(-1)}>
      <div className='relative' >
        {members.map((member, index) =>
          <div key={`info-${member.name}`} className={`absolute rounded-full 
          z-20 transition-all cursor-pointer
          ${index === selectIndex ? 'opacity-100' : 'opacity-0'}
          ${member.pos} border-green border-[2px]
          `}
            onClick={(e) => {
              if (selectIndex !== index)
                setSelectIndex(index)
              else
                setSelectIndex(-1)
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
    </div >

  );
}


const PersonCommunication = (props: Props) => {
  return (
    <div className='py-[40px]'>
      <div className=' px-[20px] flex flex-col gap-[10px]'>
        <div className='wv-font-anuphan wv-font-bold 
        wv-b5 text-black bg-green leading-[21px] rounded-[100px] w-fit !mx-auto px-[10px]
        wv-b5 tablet:leading-[24px]'>
          ด้านบุคคล
        </div>
        <div className='wv-font-kondolar wv-font-bold wv-h5
      text-center !mx-auto my-[10px] leading-[39.2px]
      wv-h5 tablet:leading-[54px]'>
          สมาชิกได้พื้นที่สื่อในพรรคมากน้อยเพียงใด
        </div>
        <div className='wv-font-anuphan wv-b4 text-center leading-[24px]
        wv-b4 tablet:leading-[27px]'>
          เมื่อพิจารณารายชื่อ 5 สมาชิกคนสำคัญที่ได้พื้นที่ในการสื่อสารจากพรรคมากที่สุด พบว่า <br />
          <div className='wv-font-bold'>ทุกพรรคให้พื้นที่หัวหน้าพรรคมากเป็นอันดับแรก แต่ให้ในสัดส่วนที่ต่างกัน</div>
        </div>
        <div className='wv-font-anuphan wv-b4 text-center leading-[24px] mt-[10px]
        wv-b4 tablet:leading-[27px]'>
          พรรคเสรีรวมไทย พรรคภูมิใจไทย และพรรคประชาธิปัตย์ หัวหน้าพรรคผูกขาดพื้นที่สื่อของพรรคอย่างเห็นได้ชัด<br /> ขณะที่พรรคพลังประชารัฐ พรรคเพื่อไทย และพรรคก้าวไกล พื้นที่สื่อถูกระจายไปให้สมาชิกคนอื่นๆ<br /> ในสัดส่วนที่ไม่ต่างกันมาก
        </div>
      </div>
      <div className='wv-font-anuphan leading-[15px]
         !my-[10px] !mb-[60px] w-[280px] !mx-auto text-desktop-regular-b7 text-center opacity-50
         tablet:w-[500px] desktop:w-auto wv-b7 tablet:leading-[18px]'>
        <span className='wv-font-bold'>คำนวณ %</span> จากจำนวนโพสต์ที่ในแคปชันมี<br className='tablet:hidden' /><span className='underline text-green'>ชื่อ-นามสกุลสมาชิกพรรคตำแหน่งสำคัญ</span> <span className='wv-font-bold'>ต่อจำนวนโพสต์ทั้งหมดของแต่ละพรรค</span> โดย 1 โพสต์สามารถมีได้มากกว่า 1 ชื่อ
      </div>
      <div className='flex flex-col items-center tablet:flex-row !my-[30px] 
        wv-font-anuphan text-desktop-regular-b6
        w-[200px] !mx-auto
        tablet:w-[305px] wv-b6 tablet:leading-[21px]'>
        <svg className='flex-none w-[31px] h-[31px]' viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_357_96990)">
            <rect x="1.8103" width={23} height={23} rx="11.5" fill="#C5C5C5" />
            <circle cx="13.7363" cy="8.94452" r="3.40741" fill="black" />
            <rect x="6.92139" y="13.6294" width="13.6296" height="13.6296" rx={2} fill="black" />
          </g>
          <rect x="2.3103" y="0.5" width={22} height={22} rx={11} stroke="#C5C5C5" />
          <path d="M17.8439 15.4878C17.8349 14.6573 18.7836 14.1785 19.4464 14.679L26.3906 19.9227C26.9814 20.3688 26.8995 21.2799 26.2386 21.6135L25.1224 22.1768C24.6294 22.4257 24.4314 23.0271 24.6803 23.5202L26.1436 26.4194C26.3925 26.9124 26.1945 27.5139 25.7015 27.7627L25.0297 28.1018C24.5366 28.3506 23.9352 28.1527 23.6864 27.6596L22.223 24.7604C21.9742 24.2673 21.3727 24.0694 20.8797 24.3182L19.3885 25.0709C18.7276 25.4045 17.946 24.9292 17.9379 24.189L17.8439 15.4878Z" fill="white" stroke="black" />
          <defs>
            <clipPath id="clip0_357_96990">
              <rect x="1.8103" width={23} height={23} rx="11.5" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div>คลิกที่รูป เพื่อดูตัวอย่างโพสต์ที่ได้รับความสนใจสูง</div>
      </div>
      <div className='flex flex-col justify-center items-center w-[250px] !mx-auto
    tablet:divide-x  tablet:flex-row tablet:w-[560px] desktop:w-auto'>
        <div className="tablet:pr-[20px] desktop:pr-[48px]">
          <div className="flex flex-row gap-x-[5px] opacity-60">
            <HeadDecorationLeft />
            <div className="flex-none wv-font-anuphan wv-font-bold wv-b6 
            wv-b6 tablet:leading-[21px]">
              ฝ่ายรัฐบาล
            </div>
            <HeadDecorationRight />
          </div>
          <div className='flex flex-col justify-center desktop:flex-row desktop:flex-wrap desktop:max-w-[522px] gap-x-[10px]'>
            {GOVERNMENT.map((data) => (
              <div key={`opp-topic-${data.party}`}
                className='text-desktop-bold-b7 !mt-[34px]
              wv-b7 tablet:leading-[18px]'>
                <div className='wv-font-anuphan wv-font-bold mb-[5px]'>
                  {data.party}
                </div>
                <div className='w-[250px] h-[250px] relative'>
                  <div className='absolute top-0 left-0'>
                    {data.content}
                  </div>
                  <Info members={data.members} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[20px] tablet:mt-0 tablet:pl-[20px] desktop:pl-[48px]">
          <div className="flex flex-row gap-x-[5px] opacity-60">
            <HeadDecorationLeft />
            <div className="flex-none wv-font-anuphan wv-font-bold wv-b6 
            wv-b6 tablet:leading-[21px]">
              ฝ่ายค้าน
            </div>
            <HeadDecorationRight />
          </div>
          <div className='flex flex-col justify-center desktop:flex-row desktop:flex-wrap desktop:max-w-[522px] gap-x-[10px]'>
            {OPPOSITION.map((data) => (
              <div key={`opp-topic-${data.party}`}
                className='text-desktop-bold-b7 !mt-[34px]
              wv-b7 tablet:leading-[18px]'>
                <div className='wv-font-anuphan wv-font-bold mb-[5px]'>
                  {data.party}
                </div>
                <div className='w-[250px] h-[250px] relative'>
                  {data.content}
                  <Info members={data.members} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonCommunication