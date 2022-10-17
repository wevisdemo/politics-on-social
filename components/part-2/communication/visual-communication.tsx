import React from 'react'

type Props = {}

const VisualCommunication = (props: Props) => {
  return (
    <div className='py-[40px] px-[20px]'>
      <div className='wv-font-anuphan wv-font-bold 
        text-mobile-bold-b5 text-black bg-green leading-[21px] rounded-[100px] w-fit mx-auto px-[10px]'>
        ด้านภาพ
      </div>
      <div className='wv-font-kondolar wv-font-bold text-mobile-bold-h5
      text-center mx-auto my-[10px]'>
        First Impression
      </div>
      <div className='wv-font-anuphan text-mobile-regular-b4 text-center'>
        ภาพปก (ในที่นี้จะขอพิจารณาแค่ Facebook เพราะเป็นช่องทางที่ทุกพรรคมี) เป็นสิ่งแรกที่ทุกคนต้องเห็นเมื่อเข้ามาในเพจของแต่ละพรรค ซึ่งเปรียบเสมือนการแขวนป้ายไวนิลไว้หน้าตึก น่าสนใจว่าแต่ละพรรคส่งข้อความอะไรออกมาบ้างในแต่ละช่วงเวลา ผ่านภาพที่กระแทกตาเหล่านี้
      </div>
    </div>
  )
}

export default VisualCommunication