import React, { useState, useEffect, useCallback, useRef } from 'react'
import { HeadDecorationLeft, HeadDecorationRight } from '../../utils'
import moment from "moment"

import { scaleLinear } from 'd3-scale'
type Props = {}

const COVER_COLLECTION = [
  {
    party: "พลังประชารัฐ",
    images: [
      { date: "5-1-2019", bg: "bg-พลังประชารัฐ-0-5-1-2019" },
      { date: "5-4-2019", bg: "bg-พลังประชารัฐ-1-5-4-2019" },
      { date: "5-6-2019", bg: "bg-พลังประชารัฐ-2-5-6-2019" },
      { date: "5-31-2019", bg: "bg-พลังประชารัฐ-3-5-31-2019" },
      { date: "6-15-2019", bg: "bg-พลังประชารัฐ-4-6-15-2019" },
      { date: "8-9-2019", bg: "bg-พลังประชารัฐ-5-8-9-2019" },
      { date: "9-13-2019", bg: "bg-พลังประชารัฐ-6-9-13-2019" },
      { date: "10-2-2019", bg: "bg-พลังประชารัฐ-7-10-2-2019" },
      { date: "10-13-2019", bg: "bg-พลังประชารัฐ-8-10-13-2019" },
      { date: "12-5-2019", bg: "bg-พลังประชารัฐ-9-12-5-2019" },
      { date: "12-30-2019", bg: "bg-พลังประชารัฐ-10-12-30-2019" },
      { date: "1-7-2020", bg: "bg-พลังประชารัฐ-11-1-7-2020" },
      { date: "3-23-2020", bg: "bg-พลังประชารัฐ-12-3-23-2020" },
      { date: "3-31-2020", bg: "bg-พลังประชารัฐ-13-3-31-2020" },
      { date: "5-10-2020", bg: "bg-พลังประชารัฐ-14-5-10-2020" },
      { date: "5-4-2021", bg: "bg-พลังประชารัฐ-15-5-4-2021" },
      { date: "6-3-2021", bg: "bg-พลังประชารัฐ-16-6-3-2021" },
      { date: "7-28-2021", bg: "bg-พลังประชารัฐ-17-7-28-2021" },
      { date: "8-12-2021", bg: "bg-พลังประชารัฐ-18-8-12-2021" },
      { date: "2-3-2022", bg: "bg-พลังประชารัฐ-19-2-3-2022" },
      { date: "2-23-2022", bg: "bg-พลังประชารัฐ-20-2-23-2022" },
      { date: "4-13-2022", bg: "bg-พลังประชารัฐ-21-4-13-2022" },
    ],
  },
  {
    party: "ภูมิใจไทย",
    images: [
      { date: "5-1-2019", bg: "bg-ภูมิใจไทย-0-5-1-2019" },
      { date: "5-2-2019", bg: "bg-ภูมิใจไทย-1-5-2-2019" },
      { date: "5-17-2019", bg: "bg-ภูมิใจไทย-2-5-17-2019" },
      { date: "5-24-2019", bg: "bg-ภูมิใจไทย-3-5-24-2019" },
      { date: "5-30-2019", bg: "bg-ภูมิใจไทย-4-5-30-2019" },
      { date: "7-4-2019", bg: "bg-ภูมิใจไทย-5-7-4-2019" },
      { date: "7-10-2019", bg: "bg-ภูมิใจไทย-6-7-10-2019" },
      { date: "7-13-2019", bg: "bg-ภูมิใจไทย-7-7-13-2019" },
      { date: "7-15-2019", bg: "bg-ภูมิใจไทย-8-7-15-2019" },
      { date: "7-18-2019", bg: "bg-ภูมิใจไทย-9-7-18-2019" },
      { date: "7-19-2019", bg: "bg-ภูมิใจไทย-10-7-19-2019" },
      { date: "7-23-2019", bg: "bg-ภูมิใจไทย-11-7-23-2019" },
      { date: "7-24-2019", bg: "bg-ภูมิใจไทย-12-7-24-2019" },
      { date: "8-9-2019", bg: "bg-ภูมิใจไทย-13-8-9-2019" },
      { date: "8-21-2019", bg: "bg-ภูมิใจไทย-14-8-21-2019" },
      { date: "8-23-2019", bg: "bg-ภูมิใจไทย-15-8-23-2019" },
      { date: "9-2-2019", bg: "bg-ภูมิใจไทย-16-9-2-2019" },
      { date: "9-5-2019", bg: "bg-ภูมิใจไทย-17-9-5-2019" },
      { date: "9-14-2019", bg: "bg-ภูมิใจไทย-18-9-14-2019" },
      { date: "10-1-2019", bg: "bg-ภูมิใจไทย-19-10-1-2019" },
      { date: "10-13-2019", bg: "bg-ภูมิใจไทย-20-10-13-2019" },
      { date: "10-14-2019", bg: "bg-ภูมิใจไทย-21-10-14-2019" },
      { date: "11-3-2019", bg: "bg-ภูมิใจไทย-22-11-3-2019" },
      { date: "12-2-2019", bg: "bg-ภูมิใจไทย-23-12-2-2019" },
      { date: "12-4-2019", bg: "bg-ภูมิใจไทย-24-12-4-2019" },
      { date: "12-6-2019", bg: "bg-ภูมิใจไทย-25-12-6-2019" },
      { date: "12-7-2019", bg: "bg-ภูมิใจไทย-26-12-7-2019" },
      { date: "12-8-2019", bg: "bg-ภูมิใจไทย-27-12-8-2019" },
      { date: "12-27-2019", bg: "bg-ภูมิใจไทย-28-12-27-2019" },
      { date: "1-8-2020", bg: "bg-ภูมิใจไทย-29-1-8-2020" },
      { date: "1-9-2020", bg: "bg-ภูมิใจไทย-30-1-9-2020" },
      { date: "1-11-2020", bg: "bg-ภูมิใจไทย-31-1-11-2020" },
      { date: "1-16-2020", bg: "bg-ภูมิใจไทย-32-1-16-2020" },
      { date: "1-17-2020", bg: "bg-ภูมิใจไทย-33-1-17-2020" },
      { date: "2-1-2020", bg: "bg-ภูมิใจไทย-34-2-1-2020" },
      { date: "2-2-2020", bg: "bg-ภูมิใจไทย-35-2-2-2020" },
      { date: "3-1-2020", bg: "bg-ภูมิใจไทย-36-3-1-2020" },
      { date: "3-2-2020", bg: "bg-ภูมิใจไทย-37-3-2-2020" },
      { date: "3-24-2020", bg: "bg-ภูมิใจไทย-38-3-24-2020" },
      { date: "3-25-2020", bg: "bg-ภูมิใจไทย-39-3-25-2020" },
      { date: "4-2-2020", bg: "bg-ภูมิใจไทย-40-4-2-2020" },
      { date: "4-3-2020", bg: "bg-ภูมิใจไทย-41-4-3-2020" },
      { date: "4-5-2020", bg: "bg-ภูมิใจไทย-42-4-5-2020" },
      { date: "4-6-2020", bg: "bg-ภูมิใจไทย-43-4-6-2020" },
      { date: "4-7-2020", bg: "bg-ภูมิใจไทย-44-4-7-2020" },
      { date: "4-9-2020", bg: "bg-ภูมิใจไทย-45-4-9-2020" },
      { date: "6-1-2020", bg: "bg-ภูมิใจไทย-46-6-1-2020" },
      { date: "6-2-2020", bg: "bg-ภูมิใจไทย-47-6-2-2020" },
      { date: "6-3-2020", bg: "bg-ภูมิใจไทย-48-6-3-2020" },
      { date: "6-7-2020", bg: "bg-ภูมิใจไทย-49-6-7-2020" },
      { date: "6-28-2020", bg: "bg-ภูมิใจไทย-50-6-28-2020" },
      { date: "8-12-2020", bg: "bg-ภูมิใจไทย-51-8-12-2020" },
      { date: "8-29-2020", bg: "bg-ภูมิใจไทย-52-8-29-2020" },
      { date: "9-8-2020", bg: "bg-ภูมิใจไทย-53-9-8-2020" },
      { date: "11-13-2020", bg: "bg-ภูมิใจไทย-54-11-13-2020" },
      { date: "2-16-2021", bg: "bg-ภูมิใจไทย-55-2-16-2021" },
      { date: "11-1-2021", bg: "bg-ภูมิใจไทย-56-11-1-2021" },
      { date: "12-28-2021", bg: "bg-ภูมิใจไทย-57-12-28-2021" },
      { date: "2-3-2022", bg: "bg-ภูมิใจไทย-58-2-3-2022" },
      { date: "6-15-2022", bg: "bg-ภูมิใจไทย-59-6-15-2022" },
    ],
  },
  {
    party: "ประชาธิปัตย์",
    images: [
      { date: "5-1-2019", bg: "bg-ประชาธิปัตย์-0-5-1-2019" },
      { date: "5-4-2019", bg: "bg-ประชาธิปัตย์-1-5-4-2019" },
      { date: "6-3-2019", bg: "bg-ประชาธิปัตย์-2-6-3-2019" },
      { date: "7-28-2019", bg: "bg-ประชาธิปัตย์-3-7-28-2019" },
      { date: "8-11-2019", bg: "bg-ประชาธิปัตย์-4-8-11-2019" },
      { date: "9-3-2019", bg: "bg-ประชาธิปัตย์-5-9-3-2019" },
      { date: "10-12-2019", bg: "bg-ประชาธิปัตย์-6-10-12-2019" },
      { date: "10-31-2019", bg: "bg-ประชาธิปัตย์-7-10-31-2019" },
      { date: "12-4-2019", bg: "bg-ประชาธิปัตย์-8-12-4-2019" },
      { date: "2-24-2020", bg: "bg-ประชาธิปัตย์-9-2-24-2020" },
      { date: "4-1-2020", bg: "bg-ประชาธิปัตย์-10-4-1-2020" },
      { date: "6-3-2020", bg: "bg-ประชาธิปัตย์-11-6-3-2020" },
      { date: "7-4-2020", bg: "bg-ประชาธิปัตย์-12-7-4-2020" },
      { date: "8-3-2020", bg: "bg-ประชาธิปัตย์-13-8-3-2020" },
      { date: "9-3-2020", bg: "bg-ประชาธิปัตย์-14-9-3-2020" },
      { date: "10-6-2020", bg: "bg-ประชาธิปัตย์-15-10-6-2020" },
      { date: "10-21-2020", bg: "bg-ประชาธิปัตย์-16-10-21-2020" },
      { date: "10-23-2020", bg: "bg-ประชาธิปัตย์-17-10-23-2020" },
      { date: "10-25-2020", bg: "bg-ประชาธิปัตย์-18-10-25-2020" },
      { date: "12-5-2020", bg: "bg-ประชาธิปัตย์-19-12-5-2020" },
      { date: "2-3-2022", bg: "bg-ประชาธิปัตย์-20-2-3-2022" },
      { date: "2-8-2022", bg: "bg-ประชาธิปัตย์-21-2-8-2022" },
      { date: "5-24-2022", bg: "bg-ประชาธิปัตย์-22-5-24-2022" },
      { date: "6-8-2022", bg: "bg-ประชาธิปัตย์-23-6-8-2022" },
      { date: "7-1-2022", bg: "bg-ประชาธิปัตย์-24-7-1-2022" },
    ],
  },
  {
    party: "เพื่อไทย",
    images: [
      { date: "5-1-2019", bg: "bg-เพื่อไทย-0-5-1-2019" },
      { date: "5-4-2019", bg: "bg-เพื่อไทย-1-5-4-2019" },
      { date: "6-3-2019", bg: "bg-เพื่อไทย-2-6-3-2019" },
      { date: "7-28-2019", bg: "bg-เพื่อไทย-3-7-28-2019" },
      { date: "12-19-2019", bg: "bg-เพื่อไทย-4-12-19-2019" },
      { date: "1-4-2020", bg: "bg-เพื่อไทย-5-1-4-2020" },
      { date: "2-4-2020", bg: "bg-เพื่อไทย-6-2-4-2020" },
      { date: "2-5-2020", bg: "bg-เพื่อไทย-7-2-5-2020" },
      { date: "2-12-2020", bg: "bg-เพื่อไทย-8-2-12-2020" },
      { date: "2-13-2020", bg: "bg-เพื่อไทย-9-2-13-2020" },
      { date: "2-17-2020", bg: "bg-เพื่อไทย-10-2-17-2020" },
      { date: "3-10-2020", bg: "bg-เพื่อไทย-11-3-10-2020" },
      { date: "3-13-2020", bg: "bg-เพื่อไทย-12-3-13-2020" },
      { date: "4-15-2020", bg: "bg-เพื่อไทย-13-4-15-2020" },
      { date: "10-1-2020", bg: "bg-เพื่อไทย-14-10-1-2020" },
      { date: "10-27-2020", bg: "bg-เพื่อไทย-15-10-27-2020" },
      { date: "11-10-2020", bg: "bg-เพื่อไทย-16-11-10-2020" },
      { date: "11-17-2020", bg: "bg-เพื่อไทย-17-11-17-2020" },
      { date: "11-28-2020", bg: "bg-เพื่อไทย-18-11-28-2020" },
      { date: "12-3-2020", bg: "bg-เพื่อไทย-19-12-3-2020" },
      { date: "12-12-2020", bg: "bg-เพื่อไทย-20-12-12-2020" },
      { date: "12-13-2020", bg: "bg-เพื่อไทย-21-12-13-2020" },
      { date: "12-14-2020", bg: "bg-เพื่อไทย-22-12-14-2020" },
      { date: "12-15-2020", bg: "bg-เพื่อไทย-23-12-15-2020" },
      { date: "12-16-2020", bg: "bg-เพื่อไทย-24-12-16-2020" },
      { date: "12-17-2020", bg: "bg-เพื่อไทย-25-12-17-2020" },
      { date: "12-18-2020", bg: "bg-เพื่อไทย-26-12-18-2020" },
      { date: "12-19-2020", bg: "bg-เพื่อไทย-27-12-19-2020" },
      { date: "12-21-2020", bg: "bg-เพื่อไทย-28-12-21-2020" },
      { date: "1-1-2021", bg: "bg-เพื่อไทย-29-1-1-2021" },
      { date: "2-1-2021", bg: "bg-เพื่อไทย-30-2-1-2021" },
      { date: "5-11-2021", bg: "bg-เพื่อไทย-31-5-11-2021" },
      { date: "5-25-2021", bg: "bg-เพื่อไทย-32-5-25-2021" },
      { date: "7-14-2021", bg: "bg-เพื่อไทย-33-7-14-2021" },
      { date: "8-25-2021", bg: "bg-เพื่อไทย-34-8-25-2021" },
      { date: "9-4-2021", bg: "bg-เพื่อไทย-35-9-4-2021" },
      { date: "10-16-2021", bg: "bg-เพื่อไทย-36-10-16-2021" },
      { date: "10-30-2021", bg: "bg-เพื่อไทย-37-10-30-2021" },
      { date: "11-30-2021", bg: "bg-เพื่อไทย-38-11-30-2021" },
      { date: "1-7-2022", bg: "bg-เพื่อไทย-39-1-7-2022" },
      { date: "2-3-2022", bg: "bg-เพื่อไทย-40-2-3-2022" },
      { date: "3-8-2022", bg: "bg-เพื่อไทย-41-3-8-2022" },
      { date: "5-16-2022", bg: "bg-เพื่อไทย-42-5-16-2022" },
      { date: "5-22-2022", bg: "bg-เพื่อไทย-43-5-22-2022" },
      { date: "6-2-2022", bg: "bg-เพื่อไทย-44-6-2-2022" },
      { date: "6-3-2022", bg: "bg-เพื่อไทย-45-6-3-2022" },
    ],
  },
  {
    party: "อนาคตใหม่/ก้าวไกล",
    images: [
      { date: "5-1-2019", bg: "bg-อนาคตใหม่/ก้าวไกล-0-5-1-2019" },
      { date: "6-2-2019", bg: "bg-อนาคตใหม่/ก้าวไกล-1-6-2-2019" },
      { date: "6-4-2019", bg: "bg-อนาคตใหม่/ก้าวไกล-2-6-4-2019" },
      { date: "6-6-2019", bg: "bg-อนาคตใหม่/ก้าวไกล-3-6-6-2019" },
      { date: "7-28-2019", bg: "bg-อนาคตใหม่/ก้าวไกล-4-7-28-2019" },
      { date: "7-30-2019", bg: "bg-อนาคตใหม่/ก้าวไกล-5-7-30-2019" },
      { date: "10-13-2019", bg: "bg-อนาคตใหม่/ก้าวไกล-6-10-13-2019" },
      { date: "11-3-2019", bg: "bg-อนาคตใหม่/ก้าวไกล-7-11-3-2019" },
      { date: "11-13-2019", bg: "bg-อนาคตใหม่/ก้าวไกล-8-11-13-2019" },
      { date: "12-17-2019", bg: "bg-อนาคตใหม่/ก้าวไกล-9-12-17-2019" },
      { date: "2-24-2020", bg: "bg-อนาคตใหม่/ก้าวไกล-10-2-24-2020" },
      { date: "3-14-2020", bg: "bg-อนาคตใหม่/ก้าวไกล-11-3-14-2020" },
      { date: "7-30-2020", bg: "bg-อนาคตใหม่/ก้าวไกล-12-7-30-2020" },
      { date: "2-11-2021", bg: "bg-อนาคตใหม่/ก้าวไกล-13-2-11-2021" },
      { date: "6-1-2021", bg: "bg-อนาคตใหม่/ก้าวไกล-14-6-1-2021" },
      { date: "1-17-2022", bg: "bg-อนาคตใหม่/ก้าวไกล-15-1-17-2022" },
      { date: "1-19-2022", bg: "bg-อนาคตใหม่/ก้าวไกล-16-1-19-2022" },
      { date: "5-17-2022", bg: "bg-อนาคตใหม่/ก้าวไกล-17-5-17-2022" },
      { date: "5-25-2022", bg: "bg-อนาคตใหม่/ก้าวไกล-18-5-25-2022" },
      { date: "6-7-2022", bg: "bg-อนาคตใหม่/ก้าวไกล-19-6-7-2022" },
      { date: "7-17-2022", bg: "bg-อนาคตใหม่/ก้าวไกล-20-7-17-2022" },
    ],
  },
  {
    party: "เสรีรวมไทย",
    images: [
      { date: "5-1-2019", bg: "bg-เสรีรวมไทย-0-5-1-2019" },
      { date: "5-4-2019", bg: "bg-เสรีรวมไทย-1-5-4-2019" },
      { date: "5-7-2019", bg: "bg-เสรีรวมไทย-2-5-7-2019" },
      { date: "6-2-2019", bg: "bg-เสรีรวมไทย-3-6-2-2019" },
      { date: "7-3-2019", bg: "bg-เสรีรวมไทย-4-7-3-2019" },
      { date: "7-4-2019", bg: "bg-เสรีรวมไทย-5-7-4-2019" },
      { date: "7-13-2019", bg: "bg-เสรีรวมไทย-6-7-13-2019" },
      { date: "7-27-2019", bg: "bg-เสรีรวมไทย-7-7-27-2019" },
    ],
  },
]

const getLogo = (party: string) => {
  switch (party) {
    case "พลังประชารัฐ": return <div className='w-[20px] h-[20px] bg-[url("/design_assets/party_logo/พลังประชารัฐ.png")] bg-contain bg-center' />
    case "ภูมิใจไทย": return <div className='w-[20px] h-[20px] bg-[url("/design_assets/party_logo/ภูมิใจไทย.png")] bg-contain bg-center' />
    case "ประชาธิปัตย์": return <div className='w-[20px] h-[20px] bg-[url("/design_assets/party_logo/ประชาธิปัตย์.png")] bg-contain bg-center' />
    case "เพื่อไทย": return <div className='w-[20px] h-[20px] bg-[url("/design_assets/party_logo/เพื่อไทย.png")] bg-contain bg-center' />
    case "อนาคตใหม่/ก้าวไกล": return <div className='w-[20px] h-[20px] bg-[url("/design_assets/party_logo/ก้าวไกล.png")] bg-contain bg-center' />
    case "เสรีรวมไทย": return <div className='w-[20px] h-[20px] bg-[url("/design_assets/party_logo/เสรีรวมไทย.png")] bg-contain bg-center' />
    default:
      break;
  }
}

const PartyCoverCollection = ({ collection, counter }: { collection: typeof COVER_COLLECTION[number], counter: number }) => {
  const [selectIndex, setSelectIndex] = useState(0)
  useEffect(() => {
    if (counter === 0)
      setSelectIndex(0)

    if (selectIndex < collection.images.length - 1) {
      let index = collection.images.findIndex((data => data.date === moment("2019-05-1").add(counter, "day").format('M-D-YYYY')))
      if (index !== -1)
        setSelectIndex(index)
      else
        setSelectIndex(collection.images.length - 1)

    }
  }, [selectIndex, collection, counter])

  return (
    <div >
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center'>
          <div>
            {getLogo(collection.party)}
          </div>
          <div>
            {collection.party}
          </div>
        </div>
        <div>
          {`${selectIndex + 1}/${collection.images.length}`}
        </div>
      </div>
      <div className={`${collection.images[selectIndex].bg} bg-cover bg-center bg-no-repeat 
        w-[128px] h-[48.76px] transition-all
        tablet:w-[288.75px] tablet:h-[110px]`} />
    </div>
  )
}

const CoverCollection = ({ party }: { party: string }) => {
  const [selectedContent, setSelectedContent] = useState<{
    date: string;
    bg?: string;
  }[]>([])

  useEffect(() => {
    if (party !== "เปรียบเทียบทุกพรรค") {
      let COVER = COVER_COLLECTION.find((data) => data.party === party)
      if (COVER)
        setSelectedContent(COVER.images)
    }
  }, [party])

  // timer
  const [counter, setCounter] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timer, setTimer] = useState<ReturnType<typeof setInterval>>()

  const minDate = moment("2019-05-1")
  const maxDate = moment("2022-07-31")
  const maxDayCount = maxDate.diff(minDate, "days") // 457 days


  const startTimer = () => {
    setIsPlaying(true)
    if (counter === maxDayCount) setCounter(0)
    let id = setInterval(() => {
      setCounter((prev) => (prev += 1))
    }, 100);
    setTimer(id)
  }

  const stopTimer = useCallback(
    () => {
      setIsPlaying(false)
      clearInterval(timer)
    }
    , [timer])

  useEffect(() => {
    if (counter >= maxDayCount)
      stopTimer()
  }, [counter, maxDayCount, stopTimer])

  useEffect(() => {
    if (party !== "เปรียบเทียบทุกพรรค")
      stopTimer()
  }, [party, stopTimer])

  // player
  const [barWidth, setBarWidth] = useState(0)
  const playerRef = useRef<HTMLDivElement>(null)
  let x = useRef()
  useEffect(() => {
    if (playerRef.current)
      setBarWidth(playerRef.current.clientWidth)
  }, [playerRef])

  const xScale = scaleLinear()
    .domain([0, maxDayCount])
    .range([0, barWidth])
  console.log(xScale(30));


  const handleClick = (e) => {
    if (playerRef.current) {
      console.log(e.pageX - playerRef.current.offsetLeft);
      setCounter(Math.floor(xScale.invert(e.pageX - playerRef.current.offsetLeft)))

    }
  }
  return (
    <div>
      {party !== "เปรียบเทียบทุกพรรค" ?
        <div>
          <div className='text-green'>{`เปลี่ยน ${selectedContent.length} ครั้ง`}</div>
          <div className="flex flex-row flex-wrap justify-center gap-x-[5px] gap-y-[10px] ">
            {selectedContent.map((item) => (
              <div key={`content-${party}-${item.date}`} className={`${item.bg} bg-cover bg-center bg-no-repeat 
              w-[128px] h-[48.76px]
              tablet:w-[288.75px] tablet:h-[110px]`} />
            ))}
          </div>
        </div>
        :
        <div>
          <button onClick={() => { !isPlaying ? startTimer() : stopTimer() }}>
            {!isPlaying ? "start" : "stop"} {counter}
          </button>
          <div>
            {minDate.add(counter, "day").locale('th').format('ll')}
            <br />
            {minDate.add(counter, "day").format('D-M-YYYY')}
          </div>
          <div>

          </div>
          <div className='relative w-[622px] mx-auto' ref={playerRef} >
            <div className='absolute z-10 top-[6px] w-full h-[4px] bg-gray cursor-pointer' onClick={(e) => { handleClick(e) }} />
            <div className='absolute top-0 w-[12px] h-[12px] rounded-full bg-gray'
              style={{ left: `${xScale(counter)}px` }} />
          </div>
          <div className='flex flex-col items-center justify-center w-[250px] mx-auto
          tablet:divide-x tablet:divide-dashed tablet:flex-row tablet:w-[560px]'>
            <div className="pr-[20px]">
              <div className="flex flex-row gap-x-[5px] opacity-60">
                <HeadDecorationLeft />
                <div className="flex-none wv-font-anuphan wv-font-bold text-mobile-bold-b6 ">
                  ฝ่ายรัฐบาล
                </div>
                <HeadDecorationRight />
              </div>
              <PartyCoverCollection collection={COVER_COLLECTION[0]} counter={counter} />
              <PartyCoverCollection collection={COVER_COLLECTION[1]} counter={counter} />
              <PartyCoverCollection collection={COVER_COLLECTION[2]} counter={counter} />
            </div>
            <div className="pl-[20px]">
              <div className="flex flex-row gap-x-[5px] opacity-60">
                <HeadDecorationLeft />
                <div className="flex-none wv-font-anuphan wv-font-bold text-mobile-bold-b6 ">
                  ฝ่ายค้าน
                </div>
                <HeadDecorationRight />
              </div>
              <PartyCoverCollection collection={COVER_COLLECTION[3]} counter={counter} />
              <PartyCoverCollection collection={COVER_COLLECTION[4]} counter={counter} />
              <PartyCoverCollection collection={COVER_COLLECTION[5]} counter={counter} />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default CoverCollection

