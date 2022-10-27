import React from 'react'
import WvContainer from "@wevisdemo/ui/components/container"
import PostSummary from './post-summary'
import ChartPattern from './chart/chart-pattern'
type Props = {}

const Part1 = (props: Props) => {
  return (
    <div id="part-1">
      <div className='text-center my-[26px]'>
        <div className='wv-font-anuphan wv-font-bold
            w-[25px] h-[25px] rounded-full bg-green mb-[10px]
            mx-auto
            text-mobile-bold-b4 leading-[24px] text-black'>
          1
        </div>
        <div className='wv-font-kondolar wv-font-bold mb-[26px]
            text-green leading-[45px] text-mobile-bold-h3'>
          พรรคขยันสื่อสาร<br />ทางออนไลน์<br />แค่ไหน
        </div>
        <PostSummary />
        <ChartPattern />
      </div>
    </div>
  )
}

export default Part1