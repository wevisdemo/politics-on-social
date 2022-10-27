import React from 'react'
import IntroItem from './intro-item'

const INTRO_PARTY_DATA = [
  {
    party: "พลังประชารัฐ",
    facebook: 304,
    twitter: 4.4,
    youtube: 1.7,
  },
  {
    party: "ภูมิใจไทย",
    facebook: 119,
    youtube: 12.4,
  },
  {
    party: "ประชาธิปัตย์",
    facebook: 793,
    twitter: 61.6,
  },
  {
    party: "เพื่อไทย",
    facebook: 759,
    twitter: 250.9,
    youtube: 137,
  }, {
    party: "อนาคตใหม่/ก้าวไกล",
    facebook: 558,
    twitter: 396.8,
    youtube: 45.9,
  }
  ,
  {
    party: "เสรีรวมไทย",
    facebook: 211,
    youtube: 20.9,
  }
]

export type INTRO_PARTY_DATA_TYPE = typeof INTRO_PARTY_DATA[number]

const IntroCollection = () => {
  return (
    <div className='flex flex-row justify-center flex-wrap gap-[10px]'>
      {INTRO_PARTY_DATA.map((data, index) => (
        <IntroItem key={data.party} {...data} videoIndex={index + 1} />
      ))}
    </div>
  )
}

export default IntroCollection