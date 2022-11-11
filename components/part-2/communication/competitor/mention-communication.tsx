import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import Spinner from '../../../utils/spinner'
import ToolTip from '../../../utils/tooltip'
const ChartCompetitor = dynamic(() => import('./chart-competitor'), { loading: () => <Spinner /> })



type Props = {}

const MentionCommunication = (props: Props) => {
  return (
    <div>
      <div className='py-[40px] flex flex-col gap-[10px] desktop:mb-[32px]'>
        <div className=' px-[20px]'>
          <div className='wv-font-anuphan wv-font-bold 
        wv-b5 text-black bg-green leading-[21px] rounded-[100px] w-fit !mx-auto px-[10px]
        tablet:leading-[]'>
            ด้านคู่แข่ง
          </div>
          <div className='wv-font-kondolar wv-font-bold wv-h5
            text-center !mx-auto !my-[10px] leading-[39.2px]'>
            แต่ละพรรคพาดพิงกันอย่างไร
          </div>
          <div className='wv-font-anuphan wv-b4 text-center leading-[24px]'>
            ในการสื่อสารทางการเมือง ย่อมต้องมีการพูดถึงพรรคข้างเคียงที่ทำงานในสภาด้วยกันอยู่เสมอ<br /> โดย<span className='text-side-non-gov'>พรรคฝ่ายค้าน</span>มักเป็นฝ่ายพาดพิง<span className='text-side-gov'>พรรคฝ่ายรัฐบาล</span> ขณะที่พรรคฝ่ายรัฐบาลมักพูดถึงกันเอง<br /> ด้วยธรรมชาติการทำงานของแต่ละฝ่ายในสภา พรรคพลังประชารัฐเป็นพรรคที่ถูกพาดพิงมากที่สุดจากทุกฝ่าย
          </div>
        </div>
        <div className='wv-font-anuphan leading-[15px]
         !my-[10px] !mb-[60px] w-[280px] !mx-auto wv-b7 text-center text-gray-2
         tablet:w-auto'>
          <span className='wv-font-bold'>คำนวณ %</span> จากจำนวนโพสต์ที่ในแคปชันมี
          <ToolTip tooltip={
            <div className='w-[200px] tablet:w-[490px] mx-auto whitespace-pre-wrap'>
              <div className='bg-gray  text-black p-[20px]'>
                <div className='!mb-[20px] wv-b7 text-left'>
                  เกณฑ์ในการเลือกสมาชิกพรรคคนสำคัญ
                </div>
                <ul className='list-disc list-inside text-left wv-b5'>
                  <li>เป็นหัวหน้าพรรค ช่วง 1 พ.ค. 62 - 31 ส.ค. 65</li>
                  <li>เป็นแคนดิเดตนายกฯ หรือ ผู้ว่าฯ กทม. ช่วง 1 พ.ค. 62 - 31 ก.ค. 65</li>
                  <li>เป็นสมาชิกพรรคที่มีตำแหน่งบริหารใน ครม. ช่วง 1 พ.ค. 62 - 31 ก.ค. 65</li>
                </ul>
              </div>
            </div>
          }>
            <span className='underline text-green'>ชื่อพรรค หรือชื่อ-นามสกุลสมาชิกตำแหน่งสำคัญของพรรคอื่นๆ</span>
          </ToolTip>
          <span className='wv-font-bold'>ต่อจำนวนโพสต์ทั้งหมดของแต่ละพรรค</span>
        </div>
      </div>
      <ChartCompetitor />
    </div>
  )
}

export default MentionCommunication