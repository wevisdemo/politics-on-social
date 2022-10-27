
import React from 'react'

import WvSharer from '@wevisdemo/ui/components/sharer';
import WvButton from '@wevisdemo/ui/components/button';

type Props = {}

const Summary = (props: Props) => {
  return (
    <div className='px-[20px]'>
      <div className='mt-[46.52px] mb-[30px]'>
        <div className='wv-font-anuphan text-mobile-regular-b4 text-center'>
          การสื่อสารทางการเมืองผ่านช่องทางออนไลน์ของพรรคการเมือง แสดงให้เห็นได้ว่า<br />แต่ละพรรคต้องการสร้างตัวตนแบบใดให้สังคมออนไลน์ได้เห็น<br />รวมถึงต้องการสื่อสารในเรื่องใดให้ประชาชนในโลกออนไลน์ได้รับรู้และจดจำ<br />ซึ่งเชื่อมโยงกับตัวตนและการสื่อสารในโลกแห่งความเป็นจริงของพรรคการเมืองเช่นกัน
        </div>
        <div className='flex justify-center my-[35px]'>
          <WvSharer center="true" url="https://wevis.info" light={true} />
        </div>
      </div>
      <div className='my-[20px]'>
        <div className='wv-font-anuphan wv-font-bold text-moblie-bold-b4 text-center'>ค้นหา insight อื่น ๆ ด้วยตัวเองได้ที่</div>
        <div className='flex flex-row justify-center mt-[18px] mb-[89px]'>
          <a className={`flex flex-row items-center py-[16px] px-[20px] gap-x-[10px]
        text-green hover:text-white 
        border-[1px] border-green hover:border-white `}
            href="https://drive.google.com/drive/folders/1Ytxy7exTpVKEvIsX0MJSBbfgTsKi-spW"
            target="_blank"
            rel='noreferrer'
          >
            {/* https://drive.google.com/drive/folders/1Ytxy7exTpVKEvIsX0MJSBbfgTsKi-spW */}
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_314_173)">
                <path
                  d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <line
                  x1="10.667"
                  y1="0.5"
                  x2="10.667"
                  y2="13"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_314_173">
                  <rect
                    width="20.8333"
                    height="20"
                    fill="white"
                    transform="translate(0.0834961 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div>ดาวน์โหลดข้อมูล</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Summary