import React from 'react'
import IntroCollection from './intro-collection'
import WvContainer from '@wevisdemo/ui/components/container';
type Props = {}

const Intro = (props: Props) => {
  return (
    <div>
      <WvContainer >
        <div className='text-center'>
          <div className='wv-font-kondolar wv-font-bold
          text-mobile-black-h2 leading-[60px]'>
            ส่องเพจพรรค
          </div>
          <div className='wv-font-kondolar
          text-mobile-bold-h5 leading-[39.2px]'>
            การเมืองถูกสื่อสารทางออนไลน์อย่างไร ?
          </div>
          <div className='wv-font-anuphan
          text-mobile-regular-b6 opacity-50'>
            เก็บข้อมูลระหว่างวันที่ 1 พ.ค. 62 -31 ส.ค. 65
          </div>
        </div>

        <IntroCollection />
      </WvContainer>
      <div className='flex flex-col gap-y-[10px]
        wv-font-anuphan text-mobile-regular-b4
        tablet:w-[850px] mx-auto'>
        <div className='text-center my-[17px]'>
          Social Media คือหนึ่งช่องทางสำคัญที่พรรคการเมืองใช้สื่อสารเรื่องราวต่าง ๆ ถึงประชาชนได้รวดเร็ว โดยพรรคการเมืองแต่ละพรรคมีช่องทางออนไลน์สำหรับการสื่อสารทางการเมืองที่ต่างกันออกไป
        </div>
        <div>
          ขอชวนร่วมเดินทางผ่านช่องทางออนไลน์ 3 ทางหลักของบรรดาพรรคการเมือง เพื่อทำความรู้จักตัวตนของ 3 พรรคการเมืองฝ่ายรัฐบาล และ 3 พรรคการเมืองฝ่ายค้าน ที่มี ส.ส. ในสภามากที่สุด ซึ่งถูกแสดงผ่านโลกออนไลน์ผ่าน 3 ประเด็นหลักที่น่าสนใจ
        </div>
        <div className='text-mobile-regular-b6 text-center opacity-60'>
          หมายเหตุ :
          <br />
          เนื่องจากพรรคอนาคตใหม่ถูกยุบพรรค และมีการตั้งพรรคใหม่เป็นพรรคก้าวไกล ข้อมูลที่นำมาวิเคราะห์จึงใช้ข้อมูลจาก account ของพรรคอนาคตใหม่ ตั้งแต่วันที่ 1 พ.ค. 62 - 29 ก.พ. 63 ประกอบกับข้อมูลของ account พรรคก้าวไกล ตั้งแต่วันที่ 1 มี.ค. 63 - 31 ส.ค. 65
        </div>
      </div>

    </div>
  )
}

export default Intro