import React from 'react'


const GOVERNMENT = [
  {
    party: "พลังประชารัฐ",
    content_desktop: "",
    content_desktop_inactive: "",
    content_mobile: "",
    content_mobile_inactive: "",
  },
  {
    party: "ภูมิใจไทย",
    content_desktop: "",
    content_desktop_inactive: "",
    content_mobile: "",
    content_mobile_inactive: "",
  },
  {
    party: "ประชาธิปัตย์",
    content_desktop: "",
    content_desktop_inactive: "",
    content_mobile: "",
    content_mobile_inactive: "",
  },
]
const OPPOSITION = [
  {
    party: "เพื่อไทย",
    content_desktop: "",
    content_desktop_inactive: "",
    content_mobile: "",
    content_mobile_inactive: "",
  },
  {
    party: "อนาคตใหม่/ก้าวไกล",
    content_desktop: "",
    content_desktop_inactive: "",
    content_mobile: "",
    content_mobile_inactive: "",
  },
  {
    party: "เสรีรวมไทย",
    content_desktop: "",
    content_desktop_inactive: "",
    content_mobile: "",
    content_mobile_inactive: "",
  },
]

type Props = {}

const MentionCommunication = (props: Props) => {
  return (
    <div className='py-[40px]'>
      <div className=' px-[20px]'>
        <div className='wv-font-anuphan wv-font-bold 
        text-mobile-bold-b5 text-black bg-green leading-[21px] rounded-[100px] w-fit mx-auto px-[10px]'>
          ด้านคู่แข่ง
        </div>
        <div className='wv-font-kondolar wv-font-bold text-mobile-bold-h5
      text-center mx-auto my-[10px] leading-[39.2px]'>
          แต่ละพรรคพาดพิงกันอย่างไร
        </div>
        <div className='wv-font-anuphan text-mobile-regular-b4 text-center leading-[24px]'>
          ในการสื่อสารทางการเมือง ย่อมต้องมีการพูดถึงพรรคข้างเคียงที่ทำงานในสภาด้วยกันอยู่เสมอ โดย<span className='text-side-non-gov'>พรรคฝ่ายค้าน</span>มักเป็นฝ่ายพาดพิง<span className='text-side-gov'>พรรคฝ่ายรัฐบาล</span> ขณะที่พรรคฝ่ายรัฐบาลมักพูดถึงกันเอง ด้วยธรรมชาติการทำงานของแต่ละฝ่ายในสภา พรรคพลังประชารัฐเป็นพรรคที่ถูกพาดพิงมากที่สุดจากทุกฝ่าย
          เมื่อพิจารณารายชื่อ 5 สมาชิกคนสำคัญที่ได้พื้นที่ในการสื่อสารจากพรรคมากที่สุด พบว่า <div className='wv-font-bold'>ทุกพรรคให้พื้นที่หัวหน้าพรรคมากเป็นอันดับแรก แต่ให้ในสัดส่วนที่ต่างกัน</div>
        </div>
      </div>
      <div className='wv-font-anuphan leading-[15px]
         my-[10px] mb-[60px] w-[280px] mx-auto text-desktop-regular-b7 text-center opacity-50'>
        <span className='wv-font-bold'>คำนวณ %</span> จากจำนวนโพสต์ที่ในแคปชันมี<span className='underline text-green'>ชื่อพรรค หรือชื่อ-นามสกุลสมาชิกตำแหน่งสำคัญของพรรคอื่นๆ</span> <span className='wv-font-bold'>ต่อจำนวนโพสต์ทั้งหมดของแต่ละพรรค</span>
      </div>
      <div className='wv-font-anuphan leading-[15px]
         my-[10px] mb-[60px] w-[280px] mx-auto text-mobile-regular-b5 text-center opacity-50'>
        พรรคที่โพสต์
      </div>
    </div>
  )
}

export default MentionCommunication