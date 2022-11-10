import Image from 'next/image';
import React, { useState } from 'react'
import CoverCollection from './cover-collection';

type Props = {}

const DROPDOWN_COLLECTION = [
  { party: "เปรียบเทียบทุกพรรค", item: <div className='w-[15px] h-[15px] relative'><Image src="/design_assets/party_logo/เปรียบเทียบทุกพรรค.png" alt="เปรียบเทียบทุกพรรค" objectFit='cover' layout='fill' /></div> },
  { party: "พลังประชารัฐ", item: <div className='w-[15px] h-[15px] relative'><Image src="/design_assets/party_logo/พลังประชารัฐ.png" alt="พลังประชารัฐ" objectFit='cover' layout='fill' /></div> },
  { party: "ภูมิใจไทย", item: <div className='w-[15px] h-[15px] relative'><Image src="/design_assets/party_logo/ภูมิใจไทย.png" alt="ภูมิใจไทย" objectFit='cover' layout='fill' /></div> },
  { party: "ประชาธิปัตย์", item: <div className='w-[15px] h-[15px] relative'><Image src="/design_assets/party_logo/ประชาธิปัตย์.png" alt="ประชาธิปัตย์" objectFit='cover' layout='fill' /></div> },
  { party: "เพื่อไทย", item: <div className='w-[15px] h-[15px] relative'><Image src="/design_assets/party_logo/เพื่อไทย.png" alt="เพื่อไทย" objectFit='cover' layout='fill' /></div> },
  { party: "อนาคตใหม่/ก้าวไกล", item: <div className='w-[15px] h-[15px] relative'><Image src="/design_assets/party_logo/ก้าวไกล.png" alt="ก้าวไกล" objectFit='cover' layout='fill' /></div> },
  { party: "เสรีรวมไทย", item: <div className='w-[15px] h-[15px] relative'><Image src="/design_assets/party_logo/เสรีรวมไทย.png" alt="เสรีรวมไทย" objectFit='cover' layout='fill' /></div> },
]

const VisualCommunication = (props: Props) => {
  const [selectParty, setSelectParty] = useState("เปรียบเทียบทุกพรรค");
  const [selectedItem, setSelectedItem] = useState(0)
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <div className='py-[40px]
      tablet:my-[35px]'>
      <div className=' px-[20px] flex flex-col gap-[10px]'>
        <div className='wv-font-anuphan wv-font-bold 
        wv-b5 text-black bg-green leading-[21px] rounded-[100px] w-fit !mx-auto px-[10px]
        wv-b5 tablet:leading-[24px]'>
          ด้านภาพ
        </div>
        <div className='wv-font-kondolar wv-font-bold wv-h5
      text-center mx-auto my-[10px]
      wv-h5 tablet:leading-[54px]'>
          First Impression
        </div>
        <div className='wv-font-anuphan wv-b4 text-center !mx-auto
        tablet:max-w-[850px] wv-b4 tablet:leading-[27px]'>
          ภาพปก (พิจารณาเฉพาะทาง Facebook เพราะเป็นช่องทางที่ทุกพรรคมี) เป็นสิ่งแรกที่ทุกคนต้องเห็นเมื่อเข้ามาดูเพจของแต่ละพรรคการเมือง สิ่งนี้อาจเปรียบเสมือนป้ายไวนิลที่ถูกแขวนไว้หน้าอาคารที่ทำการพรรค ซึ่งสะท้อนว่า ในแต่ละช่วงเวลา พรรคส่งข้อความอะไรออกมาบ้าง ผ่านภาพที่แสดงให้เห็นเหล่านี้
        </div>
        <div className='my-[27px] flex flex-col tablet:flex-row justify-center items-center gap-x-[10px]'>
          <div className='wv-font-anuphan wv-font-bold leading-[21px] wv-b5
          wv-b5 tablet:leading-[24px]'>ภาพปก Facebook</div>
          <div className="relative inline-block text-left border-[1px] border-white w-[200px] mx-auto p-[10px] my-[3px]
        tablet:mx-0
         wv-font-anuphan wv-font-bold text-desktop-bold-b6
         wv-b6 tablet:leading-[21px]">
            <div>
              <button type="button"
                className="inline-flex w-full justify-between items-center"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                {DROPDOWN_COLLECTION[selectedItem].item} {DROPDOWN_COLLECTION[selectedItem].party}
                <svg width={12} height={9} viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L0.803847 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="white" />
                </svg>
              </button>
            </div>
            <div className={`absolute right-0 left-0 z-20 w-full h-auto mt-3  bg-white text-black
          flex flex-col justify-start
          ${openDropdown ? 'show' : 'hidden'}`} >
              {DROPDOWN_COLLECTION.map((data, index) => (
                <button key={`dropdown-item-${index}`}
                  className='p-[10px] inline-flex w-full justify-start items-center gap-x-[10px]'
                  onClick={() => { setSelectParty(data.party); setSelectedItem(index); setOpenDropdown(false) }}>
                  {data.item} {data.party}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <CoverCollection party={selectParty} />
      </div>
    </div>
  )
}

export default VisualCommunication