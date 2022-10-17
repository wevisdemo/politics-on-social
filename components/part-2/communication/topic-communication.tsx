import React, { useState } from 'react'
import TopicPostCollection from './topic-post-collection'
type Props = {}

const GOVERNMENT = [
  {
    party: "พลังประชารัฐ",
    content: <div className='w-[140px] h-[140px] bg-[url("/design_assets/chart/chart03_topic/palangpracharat.png")] bg-contain bg-center' />,
  },
  {
    party: "ภูมิใจไทย",
    content: <div className='w-[140px] h-[140px] bg-[url("/design_assets/chart/chart03_topic/phumjaithai.png")] bg-contain bg-center' />,
  },
  {
    party: "ประชาธิปัตย์",
    content: <div className='w-[140px] h-[140px] bg-[url("/design_assets/chart/chart03_topic/prachatipat.png")] bg-contain bg-center' />,
  },

]

const OPPOSITION = [
  {
    party: "เพื่อไทย",
    content: <div className='w-[140px] h-[140px] bg-[url("/design_assets/chart/chart03_topic/puerthai.png")] bg-contain bg-center' />,
  },
  {
    party: "อนาคตใหม่/ก้าวไกล",
    content: <div className='w-[140px] h-[140px] bg-[url("/design_assets/chart/chart03_topic/kawklai.png")] bg-contain bg-center' />,
  },
  {
    party: "เสรีรวมไทย",
    content: <div className='w-[140px] h-[140px] bg-[url("/design_assets/chart/chart03_topic/seriruamthai.png")] bg-contain bg-center' />,
  },
]

const DROPDOWN_COLLECTION = [
  { topic: "โควิด", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] bg-[url("/design_assets/topic_icon/covid.png")] bg-contain bg-center' /><div>โควิด</div></div> },
  { topic: "เศรษฐกิจ", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] bg-[url("/design_assets/topic_icon/economic.png")] bg-contain bg-center' /><div>เศรษฐกิจ</div></div> },
  { topic: "กัญชา", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] bg-[url("/design_assets/topic_icon/ganja.png")] bg-contain bg-center' /><div>กัญชา</div></div> },
  { topic: "ความเท่าเทียมทางเพศ", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] bg-[url("/design_assets/topic_icon/lgbtq.png")] bg-contain bg-center' /><div>ความเท่าเทียมทางเพศ</div></div> },
  { topic: "การชุมนุม", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] bg-[url("/design_assets/topic_icon/movement.png")] bg-contain bg-center' /><div>การชุมนุม</div></div> },
  { topic: "สถาบันพระมหากษัตริย์", item: <div className='flex flex-row items-center gap-[5px]'><div className='w-[15px] h-[15px] bg-[url("/design_assets/topic_icon/royal.png")] bg-contain bg-center' /><div>สถาบันพระมหากษัตริย์</div></div> },
]


const TopicCommunication = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div className='py-[40px]'>
      <div className=' px-[20px]'>
        <div className='wv-font-anuphan wv-font-bold 
        text-mobile-bold-b5 text-black bg-green leading-[21px] rounded-[100px] w-fit mx-auto px-[10px]'>
          ด้านเนื้อหา
        </div>
        <div className='wv-font-kondolar wv-font-bold text-mobile-bold-h5
      text-center mx-auto my-[10px]'>
          ประเด็นที่เป็นกระแสสังคมถูกพูดถึงในสัดส่วนมากน้อยแค่ไหน
        </div>
        <div className='wv-font-anuphan text-mobile-regular-b4 text-center'>
          Consectetur purus dignissim lorem est eu morbi ac amet. Semper quis maecenas sem faucibus nullam. Vitae justo, rhoncus orci vulputate quisque adipiscing maecenas quam.
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-y-[5px] gap-x-[20px]
        mt-[33px]
        wv-font-anuphan wv-font-bold leading-[21px] text-mobile-bold-b5'>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] bg-[url("/design_assets/topic_icon/covid.png")] bg-contain bg-center' /><div>โควิด</div></div>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] bg-[url("/design_assets/topic_icon/economic.png")] bg-contain bg-center' /><div>เศรษฐกิจ</div></div>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] bg-[url("/design_assets/topic_icon/ganja.png")] bg-contain bg-center' /><div>กัญชา</div></div>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] bg-[url("/design_assets/topic_icon/lgbtq.png")] bg-contain bg-center' /><div>ความเท่าเทียมทางเพศ</div></div>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] bg-[url("/design_assets/topic_icon/movement.png")] bg-contain bg-center' /><div>การชุมนุม</div></div>
        <div className='flex flex-row items-center gap-[5px]'><div className='w-[30px] h-[30px] bg-[url("/design_assets/topic_icon/royal.png")] bg-contain bg-center' /><div>สถาบันพระมหากษัตริย์</div></div>
      </div>
      <div className='wv-font-anuphan leading-[15px]
         my-[28px] w-[200px] mx-auto text-mobile-regular-b7 text-center opacity-50'>
        คำนวณ % จากจำนวนโพสต์ที่ในแคปชันมีคีย์เวิร์ดที่เกี่ยวของกับแต่ละประเด็น ต่อจำนวนโพสต์ทั้งหมดของแต่ละพรรค
      </div>
      <div className='flex flex-row justify-center
    divide-x'>
        <div className='pr-[10px]'>
          <div className='flex flex-row items-center justify-between opacity-60 gap-x-[5px]'>
            <svg className='w-[28px] h-[6px]' viewBox="0 0 34 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H34V2.5H3V3.5Z" fill="white" />
            </svg>
            <div className='wv-font-anuphan wv-font-bold text-desktop-bold-b6'>ฝ่ายรัฐบาล</div>
            <svg className='w-[28px] h-[6px]' viewBox="0 0 34 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.3333 3C28.3333 4.47276 29.5272 5.66667 31 5.66667C32.4728 5.66667 33.6667 4.47276 33.6667 3C33.6667 1.52724 32.4728 0.333333 31 0.333333C29.5272 0.333333 28.3333 1.52724 28.3333 3ZM0 3.5H31V2.5H0V3.5Z" fill="white" />
            </svg>
          </div>
          {GOVERNMENT.map((data) => (
            <div key={`opp-topic-${data.party}`} className='text-mobile-bold-b7 mt-[34px]'>
              <div className='wv-font-anuphan wv-font-bold mb-[5px]'>
                {data.party}
              </div>
              {data.content}
            </div>
          ))}
        </div>
        <div className='pl-[10px]'>
          <div className='flex flex-row items-center justify-between opacity-60 gap-x-[5px]'>
            <svg width={34} height={6} viewBox="0 0 34 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H34V2.5H3V3.5Z" fill="white" />
            </svg>
            <div className='wv-font-anuphan wv-font-bold text-desktop-bold-b6'>ฝ่ายค้าน</div>
            <svg width={34} height={6} viewBox="0 0 34 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.3333 3C28.3333 4.47276 29.5272 5.66667 31 5.66667C32.4728 5.66667 33.6667 4.47276 33.6667 3C33.6667 1.52724 32.4728 0.333333 31 0.333333C29.5272 0.333333 28.3333 1.52724 28.3333 3ZM0 3.5H31V2.5H0V3.5Z" fill="white" />
            </svg>
          </div>
          {OPPOSITION.map((data) => (
            <div key={`opp-topic-${data.party}`} className='text-mobile-bold-b7 mt-[34px]'>
              <div className='wv-font-anuphan wv-font-bold mb-[5px]'>
                {data.party}
              </div>
              {data.content}
            </div>
          ))}
        </div>
      </div>
      <div className='my-[27px]'>
        <div className='wv-font-anuphan wv-font-bold leading-[21px] text-mobile-bold-b5'>โพสต์เกี่ยวกับ</div>
        <div className="relative inline-block text-left border-[1px] border-white w-[200px] mx-auto p-[10px] my-[3px]
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
          <div className={`absolute right-0 left-0 z-10 w-full h-auto mt-3  bg-black
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
        <div className='wv-font-anuphan wv-font-bold leading-[21px] text-mobile-bold-b5'>ที่ได้รับความสนใจสูงที่สุดของแต่ละพรรค</div>
      </div>
      <TopicPostCollection topic={DROPDOWN_COLLECTION[selectedItem].topic} />
    </div>
  )
}

export default TopicCommunication