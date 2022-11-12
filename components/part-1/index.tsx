import React from 'react'
import WvContainer from "@wevisdemo/ui/react/container"
import PostSummary from './post-summary'
import ChartPattern from './chart/chart-pattern'
type Props = {}

const Part1 = (props: Props) => {
  return (
    <div id="part-1">
      <div className='text-center my-[26px]
        tablet:my-[78px]'>
        <div className='wv-font-anuphan wv-font-bold
            w-[25px] h-[25px] rounded-full bg-green !mb-[10px]
            !mx-auto
            wv-b4 leading-[24px] text-black
            tablet:leading-[30px]
            tablet:w-[30px] tablet:h-[30px]'>
          1
        </div>
        <div className='wv-font-kondolar wv-font-bold !mb-[26px]
            text-green leading-[45px]
            wv-h3 tablet:leading-[75px]
            mx-auto'>
          พรรคขยันสื่อสาร<br className='desktop:hidden' />ทางออนไลน์<br />แค่ไหน
        </div>
        <PostSummary />
        <ChartPattern />
      </div>
    </div>
  )
}

export default Part1