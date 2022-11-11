import React, { useState } from 'react'
import { HeadDecorationLeft, HeadDecorationRight } from '../../../utils'
import TopicPostCollection from './topic-post-collection'
import Image from 'next/image'
import ToolTip from '../../../utils/tooltip'
type Props = {}

const GOVERNMENT = [
  {
    party: "พลังประชารัฐ",
    content: <div className='w-[140px] h-[140px] tablet:w-[251px] tablet:h-[251px] relative'><Image src="/design_assets/chart/chart03_topic/palangpracharat.png" alt="palangpracharat" objectFit='cover' layout='fill' /></div>,
  },
  {
    party: "ภูมิใจไทย",
    content: <div className='w-[140px] h-[140px] tablet:w-[251px] tablet:h-[251px] relative'><Image src="/design_assets/chart/chart03_topic/phumjaithai.png" alt="phumjaithai" objectFit='cover' layout='fill' /></div>,
  },
  {
    party: "ประชาธิปัตย์",
    content: <div className='w-[140px] h-[140px] tablet:w-[251px] tablet:h-[251px] relative'><Image src="/design_assets/chart/chart03_topic/prachatipat.png" alt="prachatipat" objectFit='cover' layout='fill' /></div>,
  },

]

const OPPOSITION = [
  {
    party: "เพื่อไทย",
    content: <div className='w-[140px] h-[140px] tablet:w-[251px] tablet:h-[251px] relative'><Image src="/design_assets/chart/chart03_topic/puerthai.png" alt="puerthai" objectFit='cover' layout='fill' /></div>,
  },
  {
    party: "อนาคตใหม่/ก้าวไกล",
    content: <div className='w-[140px] h-[140px] tablet:w-[251px] tablet:h-[251px] relative'><Image src="/design_assets/chart/chart03_topic/kawklai.png" alt="kawklai" objectFit='cover' layout='fill' /></div>,
  },
  {
    party: "เสรีรวมไทย",
    content: <div className='w-[140px] h-[140px] tablet:w-[251px] tablet:h-[251px] relative'><Image src="/design_assets/chart/chart03_topic/seriruamthai.png" alt="seriruamthai" objectFit='cover' layout='fill' /></div>,
  },
]

const DROPDOWN_COLLECTION = [
  { topic: "โควิด", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] relative'><Image src="/design_assets/topic_icon/covid.png" alt="covid" objectFit='cover' layout='fill' /></div><div>โควิด</div></div> },
  { topic: "เศรษฐกิจ", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] relative'><Image src="/design_assets/topic_icon/economic.pn" alt="economi" objectFit='cover' layout='fill' /></div><div>เศรษฐกิจ</div></div> },
  { topic: "กัญชา", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] relative'><Image src="/design_assets/topic_icon/ganja.png" alt="ganja" objectFit='cover' layout='fill' /></div><div>กัญชา</div></div> },
  { topic: "ความเท่าเทียมทางเพศ", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] relative'><Image src="/design_assets/topic_icon/lgbtq.png" alt="lgbtq" objectFit='cover' layout='fill' /></div><div>ความเท่าเทียมทางเพศ</div></div> },
  { topic: "การชุมนุม", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] relative'><Image src="/design_assets/topic_icon/movement.pn" alt="movemen" objectFit='cover' layout='fill' /></div><div>การชุมนุม</div></div> },
  { topic: "สถาบันพระมหากษัตริย์", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] relative'><Image src="/design_assets/topic_icon/royal.png" alt="royal" objectFit='cover' layout='fill' /></div><div>สถาบันพระมหากษัตริย์</div></div> },
]


const TopicCommunication = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div className='py-[40px]'>
      <div className=' px-[20px] flex flex-col gap-[10px]'>
        <div className='wv-font-anuphan wv-font-bold 
        wv-b5 text-black bg-green leading-[21px] rounded-[100px] w-fit !mx-auto px-[10px] 
        tablet:leading-[24px]'>
          ด้านเนื้อหา
        </div>
        <div className='wv-font-kondolar wv-font-bold wv-h5 leading-[39.2px]
          text-center mx-auto my-[10px]
          wv-h5 tablet:leading-[54px]'>
          ประเด็นที่เป็นกระแสสังคมถูกพูดถึงในสัดส่วนมากน้อยแค่ไหน
        </div>
        <div className='wv-font-anuphan wv-b4 text-center !mx-auto leading-[24px]
          tablet:max-w-[839px] wv-b4 tablet:leading-[27px]'>
          สัดส่วนโพสต์ที่สื่อสารแต่ละประเด็น สะท้อนว่าพรรคให้ความสำคัญกับเรื่องอะไร ซึ่งจาก 6 ประเด็นที่ Wevis คัดเลือกมา<br />ตามหัวข้อที่เคยเห็นว่าถูกพูดถึงในโลกออนไลน์และออฟไลน์ค่อนข้างมาก พบว่า<br /><span className='wv-font-bold'><span className='text-topic-covid'>โควิด</span>และ<span className='text-topic-economic'>เศรษฐกิจ</span>เป็นประเด็นหลักที่ทุกพรรคนำเสนอ</span> ส่วนประเด็นรองนั้นแตกต่างกันไป เช่น<br /> พรรคภูมิใจไทยกับเรื่อง<span className='text-topic-weed'>กัญชา</span> หรือพรรคเพื่อไทยกับเรื่อง<span className='text-topic-movement'>การชุมนุม</span><br />ขณะที่พรรคก้าวไกลสื่อสารเกือบทุกประเด็นในสัดส่วนที่ไม่ต่างกันมาก<br />น่าสนใจว่า<span className='text-topic-lgbt'>ความเท่าเทียมทางเพศ</span>เป็นประเด็นที่ไม่ถูกพูดถึงเลยจากพรรคภูมิใจไทย และเสรีรวมไทย
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-y-[5px] gap-x-[20px] !my-[28px]
        wv-font-anuphan wv-font-bold leading-[21px] wv-b5
        tablet:text-desktopb-bold-b5 tablet:leading-[24px]'>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] tablet:w-[50px] tablet:h-[50px] relative'><Image src="/design_assets/topic_icon/covid.png" alt="covid" objectFit='cover' layout='fill' /></div><div>โควิด</div></div>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] tablet:w-[50px] tablet:h-[50px] relative'><Image src="/design_assets/topic_icon/economic.png" alt="economic" objectFit='cover' layout='fill' /></div><div>เศรษฐกิจ</div></div>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] tablet:w-[50px] tablet:h-[50px] relative'><Image src="/design_assets/topic_icon/ganja.png" alt="ganja" objectFit='cover' layout='fill' /></div><div>กัญชา</div></div>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] tablet:w-[50px] tablet:h-[50px] relative'><Image src="/design_assets/topic_icon/lgbtq.png" alt="lgbtq" objectFit='cover' layout='fill' /></div><div>ความเท่าเทียมทางเพศ</div></div>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] tablet:w-[50px] tablet:h-[50px] relative'><Image src="/design_assets/topic_icon/movement.png" alt="movement" objectFit='cover' layout='fill' /></div><div>การชุมนุม</div></div>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] tablet:w-[50px] tablet:h-[50px] relative'><Image src="/design_assets/topic_icon/royal.png" alt="royal" objectFit='cover' layout='fill' /></div><div>สถาบันพระมหากษัตริย์</div></div>
      </div>
      <div className='wv-font-anuphan leading-[15px]
         !my-[28px] w-[200px] !mx-auto wv-b7 text-center text-gray-2
         tablet:w-[500px] desktop:w-auto wv-b7 tablet:leading-[18px]'>
        <span className='wv-font-bold'>คำนวณ %</span> จากจำนวนโพสต์ที่ในแคปชันมี
        <ToolTip tooltip={
          <div className=' mx-auto wv-font-anuphan'>
            <div className='bg-gray text-black p-[20px] flex flex-col gap-y-[20px] w-[300px] tablet:w-[620px] desktop:w-[840px] break-words whitespace-pre-wrap'>
              <div className=' wv-b7 text-left'>
                คีย์เวิร์ดที่ใช้ในการระบุเนื้อหาแต่ละด้าน :
              </div>
              <div>
                <div className='text-left wv-b5 wv-font-bold'>โควิด</div>
                <div className='text-left wv-b5'>
                  โควิด, COVID, วัคซีน, ไวรัส, ระลอก, Quarantine, กักตัว, หน้ากากอนามัย, โคโรนา, hospitel, ไฟเซอร์, pfizer, ซิโนแวค, sinovac, โมเดอร์นา, moderna, แอสตรา, astrazeneca, เจลแอลกอฮอล์, ภูมิคุ้มกัน, ล็อกดาวน์ม coronavirus, atk, พิราเวียร์, omicron, โอไมครอน, โอมิครอน, หมอพร้อม, ศบค, สยามไบโอไซเอนซ์, siambioscience, mrna, หมอชนะ
                </div>
              </div>
              <div>
                <div className='text-left wv-b5 wv-font-bold'>เศรษฐกิจ</div>
                <div className='text-left wv-b5'>
                  เศรษฐกิจ, ปากท้อง, ผูกขาด, ยากจน, เหลื่อมล้ำ, รวย, เงินกู้, หนี้, คลัง, พาณิชย์, การค้า, จีดีพี, gdp, SMEs, คนจน, คนละครึ่ง, ค่าไฟแพง, ของแพง, น้ำมันแพง, หมูแพง, รถไฟฟ้าแพง, แพงทั้งแผ่นดิน, ขูดรีด, ควบรวมกิจการ, ค่าเทอม, เจ้าสัว, อยู่ดีกินดี
                </div>
              </div>
              <div>
                <div className='text-left wv-b5 wv-font-bold'>กัญชา</div>
                <div className='text-left wv-b5'>
                  กัญชา, กัญชง
                </div>
              </div>
              <div>
                <div className='text-left wv-b5 wv-font-bold'>ความเท่าเทียมทางเพศ</div>
                <div className='text-left wv-b5'>
                  ความเท่าเทียมทางเพศ, สมรสเท่าเทียม, พรบคู่ชีวิต, LGBT, LGBT+, LGBTQ, LGBTQI, LGBTIQ, LGBTQIA, pride, ไพรด์พาเหรด, นฤมิตไพรด์, pridemonth
                </div>
              </div>
              <div>
                <div className='text-left wv-b5 wv-font-bold'>การชุมนุม</div>
                <div className='text-left wv-b5'>
                  ม็อบ, ชุมนุม, ประท้วง, เคลื่อนไหว, สลายการชุมนุม, ประท้วง, ประกันตัว, ปล่อยเพื่อนเรา, หยุดคุกคามประชาชน, ประชาชนปลดแอก, คฝ, เยาวชนปลดแอก, ให้มันจบที่รุ่นเรา, ทะลุฟ้า, ยืนหยุดขัง
                </div>
              </div>
              <div>
                <div className='text-left wv-b5 wv-font-bold'>สถาบันพระมหากษัตริย์</div>
                <div className='text-left wv-b5'>
                  ปฏิรูปสถาบัน, มาตรา112, ม112, ยกเลิก112, กษัตริย์, พระราชดำริ, พรก.โอนกำลังพล, พรกโอนกำลังพล, ขบวนเสด็จ, งบสถาบัน
                  ราชการในพระองค์, พระราชทาน, เทิดพระเกียรติ
                </div>
              </div>
            </div>
          </div>
        }>
          <span className='underline text-green'>คีย์เวิร์ด</span>
        </ToolTip>
        ที่เกี่ยวของกับแต่ละประเด็น <span className='wv-font-bold'>ต่อจำนวนโพสต์ทั้งหมดของแต่ละพรรค</span> โดย 1 โพสต์สามารถมีได้มากกว่า 1 ประเด็น
      </div>
      <div className='flex flex-row justify-center
        divide-x desktop:mb-[40px]'>
        <div className="pr-[10px] desktop:pr-[30px]">
          <div className="flex flex-row gap-x-[5px] opacity-60">
            <HeadDecorationLeft />
            <div className="flex-none wv-font-anuphan wv-font-bold
            wv-b6 tablet:leading-[21px] ">
              ฝ่ายรัฐบาล
            </div>
            <HeadDecorationRight />
          </div>
          <div className='flex flex-col justify-center desktop:flex-row desktop:flex-wrap desktop:max-w-[522px]'>
            {GOVERNMENT.map((data) => (
              <div key={`opp-topic-${data.party}`}
                className='wv-b7 !mt-[34px]
                 tablet:leading-[18px]'>
                <div className='wv-font-anuphan wv-font-bold mb-[5px]'>
                  {data.party}
                </div>
                {data.content}
              </div>
            ))}
          </div>
        </div>
        <div className="pl-[10px] desktop:pl-[30px]">
          <div className="flex flex-row gap-x-[5px] opacity-60">
            <HeadDecorationLeft />
            <div className="flex-none wv-font-anuphan wv-font-bold
            wv-b6 tablet:leading-[21px]">
              ฝ่ายค้าน
            </div>
            <HeadDecorationRight />
          </div>
          <div className='flex flex-col justify-center desktop:flex-row desktop:flex-wrap desktop:max-w-[522px]'>
            {OPPOSITION.map((data) => (
              <div key={`opp-topic-${data.party}`}
                className='wv-b7 !mt-[34px]
                tablet:leading-[18px]'>
                <div className='wv-font-anuphan wv-font-bold mb-[5px]'>
                  {data.party}
                </div>
                {data.content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='my-[27px] flex flex-col items-center justify-center
        tablet:flex-row tablet:gap-x-[10px] '>
        <div className='wv-font-anuphan wv-font-bold leading-[21px] wv-b5
          wv-b5 tablet:leading-[27px]'>โพสต์เกี่ยวกับ</div>
        <div className="relative inline-block text-left border-[1px] border-white w-[200px] p-[10px] my-[3px]
         wv-font-anuphan wv-font-bold text-desktop-bold-b6">
          <div>
            <button type="button"
              className="inline-flex w-full justify-between items-center"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              {DROPDOWN_COLLECTION[selectedItem].item}
              <svg width={12} height={9} viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L0.803847 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className={`absolute right-0 left-0 z-20 w-full h-auto mt-3  text-black bg-white
          flex flex-col justify-start
          ${openDropdown ? 'show' : 'hidden'}`} >
            {DROPDOWN_COLLECTION.map((data, index) => (
              <button key={`dropdown-item-${index}`}
                className='p-[10px]'
                onClick={() => { setSelectedItem(index); setOpenDropdown(false) }}>
                {data.item}
              </button>
            ))}
          </div>
        </div>
        <div className='wv-font-anuphan wv-font-bold leading-[21px] wv-b5
          wv-b5 tablet:leading-[27px]'>ที่ได้รับความสนใจสูงของแต่ละพรรค</div>
      </div>
      <div className='ml-[10px]'>
        <TopicPostCollection topic={DROPDOWN_COLLECTION[selectedItem].topic} />
      </div>
    </div>
  )
}

export default TopicCommunication