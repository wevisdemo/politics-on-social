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
            การเมืองทางออนไลน์
          </div>
          <div className='wv-font-kondolar
          text-mobile-bold-h5 leading-[39.2px]'>
            พรรคการเมืองสื่อสารกันอย่างไร ?
          </div>
          <div className='wv-font-anuphan
          text-mobile-regular-b6 opacity-50'>
            เก็บข้อมูลระหว่างวันที่ 1 พ.ค. 62 -31 ก.ค. 65
          </div>
        </div>
        <IntroCollection />
        <div className='text-center my-[17px]'>
          (Intro) Consectetur purus dignissim lorem est eu morbi ac amet. Semper quis maecenas sem faucibus nullam. Vitae justo, rhoncus orci vulputate quisque adipiscing maecenas quam. Consectetur purus dignissim lorem est eu morbi ac amet. Semper quis maecenas sem faucibus nullam. Vitae justo, rhoncus orci vulputate quisque adipiscing maecenas quam.
        </div>
      </WvContainer>
    </div>
  )
}

export default Intro