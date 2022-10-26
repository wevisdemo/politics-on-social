const CHART_DATA = [
  {
    "date": "5-1-2019",
    "count": 6,
    "dt": "2019-5-1",
    "pos": 0
  },
  {
    "date": "5-4-2019",
    "count": 4,
    "dt": "2019-5-4",
    "pos": 3
  },
  {
    "date": "5-6-2019",
    "count": 1,
    "dt": "2019-5-6",
    "pos": 5
  },
  {
    "date": "5-31-2019",
    "count": 1,
    "dt": "2019-5-31",
    "pos": 30
  },
  {
    "date": "6-15-2019",
    "count": 1,
    "dt": "2019-6-15",
    "pos": 45
  },
  {
    "date": "8-9-2019",
    "count": 2,
    "dt": "2019-8-9",
    "pos": 100
  },
  {
    "date": "9-13-2019",
    "count": 1,
    "dt": "2019-9-13",
    "pos": 135
  },
  {
    "date": "10-2-2019",
    "count": 1,
    "dt": "2019-10-2",
    "pos": 154
  },
  {
    "date": "10-13-2019",
    "count": 3,
    "dt": "2019-10-13",
    "pos": 165
  },
  {
    "date": "12-5-2019",
    "count": 1,
    "dt": "2019-12-5",
    "pos": 218
  },
  {
    "date": "12-30-2019",
    "count": 1,
    "dt": "2019-12-30",
    "pos": 243
  },
  {
    "date": "1-7-2020",
    "count": 1,
    "dt": "2020-1-7",
    "pos": 251
  },
  {
    "date": "3-23-2020",
    "count": 1,
    "dt": "2020-3-23",
    "pos": 327
  },
  {
    "date": "3-31-2020",
    "count": 1,
    "dt": "2020-3-31",
    "pos": 335
  },
  {
    "date": "5-10-2020",
    "count": 1,
    "dt": "2020-5-10",
    "pos": 375
  },
  {
    "date": "5-4-2021",
    "count": 1,
    "dt": "2021-5-4",
    "pos": 734
  },
  {
    "date": "6-3-2021",
    "count": 1,
    "dt": "2021-6-3",
    "pos": 764
  },
  {
    "date": "7-28-2021",
    "count": 1,
    "dt": "2021-7-28",
    "pos": 819
  },
  {
    "date": "8-12-2021",
    "count": 1,
    "dt": "2021-8-12",
    "pos": 834
  },
  {
    "date": "2-3-2022",
    "count": 4,
    "dt": "2022-2-3",
    "pos": 1009
  },
  {
    "date": "2-23-2022",
    "count": 1,
    "dt": "2022-2-23",
    "pos": 1029
  },
  {
    "date": "4-13-2022",
    "count": 1,
    "dt": "2022-4-13",
    "pos": 1078
  },
  {
    "date": "5-2-2019",
    "count": 1,
    "dt": "2019-5-2",
    "pos": 1
  },
  {
    "date": "5-17-2019",
    "count": 1,
    "dt": "2019-5-17",
    "pos": 16
  },
  {
    "date": "5-24-2019",
    "count": 1,
    "dt": "2019-5-24",
    "pos": 23
  },
  {
    "date": "5-30-2019",
    "count": 1,
    "dt": "2019-5-30",
    "pos": 29
  },
  {
    "date": "7-4-2019",
    "count": 2,
    "dt": "2019-7-4",
    "pos": 64
  },
  {
    "date": "7-10-2019",
    "count": 1,
    "dt": "2019-7-10",
    "pos": 70
  },
  {
    "date": "7-13-2019",
    "count": 2,
    "dt": "2019-7-13",
    "pos": 73
  },
  {
    "date": "7-15-2019",
    "count": 1,
    "dt": "2019-7-15",
    "pos": 75
  },
  {
    "date": "7-18-2019",
    "count": 1,
    "dt": "2019-7-18",
    "pos": 78
  },
  {
    "date": "7-19-2019",
    "count": 1,
    "dt": "2019-7-19",
    "pos": 79
  },
  {
    "date": "7-23-2019",
    "count": 1,
    "dt": "2019-7-23",
    "pos": 83
  },
  {
    "date": "7-24-2019",
    "count": 1,
    "dt": "2019-7-24",
    "pos": 84
  },
  {
    "date": "8-21-2019",
    "count": 1,
    "dt": "2019-8-21",
    "pos": 112
  },
  {
    "date": "8-23-2019",
    "count": 1,
    "dt": "2019-8-23",
    "pos": 114
  },
  {
    "date": "9-2-2019",
    "count": 1,
    "dt": "2019-9-2",
    "pos": 124
  },
  {
    "date": "9-5-2019",
    "count": 1,
    "dt": "2019-9-5",
    "pos": 127
  },
  {
    "date": "9-14-2019",
    "count": 1,
    "dt": "2019-9-14",
    "pos": 136
  },
  {
    "date": "10-1-2019",
    "count": 1,
    "dt": "2019-10-1",
    "pos": 153
  },
  {
    "date": "10-14-2019",
    "count": 1,
    "dt": "2019-10-14",
    "pos": 166
  },
  {
    "date": "11-3-2019",
    "count": 2,
    "dt": "2019-11-3",
    "pos": 186
  },
  {
    "date": "12-2-2019",
    "count": 1,
    "dt": "2019-12-2",
    "pos": 215
  },
  {
    "date": "12-4-2019",
    "count": 2,
    "dt": "2019-12-4",
    "pos": 217
  },
  {
    "date": "12-6-2019",
    "count": 1,
    "dt": "2019-12-6",
    "pos": 219
  },
  {
    "date": "12-7-2019",
    "count": 1,
    "dt": "2019-12-7",
    "pos": 220
  },
  {
    "date": "12-8-2019",
    "count": 1,
    "dt": "2019-12-8",
    "pos": 221
  },
  {
    "date": "12-27-2019",
    "count": 1,
    "dt": "2019-12-27",
    "pos": 240
  },
  {
    "date": "1-8-2020",
    "count": 1,
    "dt": "2020-1-8",
    "pos": 252
  },
  {
    "date": "1-9-2020",
    "count": 1,
    "dt": "2020-1-9",
    "pos": 253
  },
  {
    "date": "1-11-2020",
    "count": 1,
    "dt": "2020-1-11",
    "pos": 255
  },
  {
    "date": "1-16-2020",
    "count": 1,
    "dt": "2020-1-16",
    "pos": 260
  },
  {
    "date": "1-17-2020",
    "count": 1,
    "dt": "2020-1-17",
    "pos": 261
  },
  {
    "date": "2-1-2020",
    "count": 1,
    "dt": "2020-2-1",
    "pos": 276
  },
  {
    "date": "2-2-2020",
    "count": 1,
    "dt": "2020-2-2",
    "pos": 277
  },
  {
    "date": "3-1-2020",
    "count": 1,
    "dt": "2020-3-1",
    "pos": 305
  },
  {
    "date": "3-2-2020",
    "count": 1,
    "dt": "2020-3-2",
    "pos": 306
  },
  {
    "date": "3-24-2020",
    "count": 1,
    "dt": "2020-3-24",
    "pos": 328
  },
  {
    "date": "3-25-2020",
    "count": 1,
    "dt": "2020-3-25",
    "pos": 329
  },
  {
    "date": "4-2-2020",
    "count": 1,
    "dt": "2020-4-2",
    "pos": 337
  },
  {
    "date": "4-3-2020",
    "count": 1,
    "dt": "2020-4-3",
    "pos": 338
  },
  {
    "date": "4-5-2020",
    "count": 1,
    "dt": "2020-4-5",
    "pos": 340
  },
  {
    "date": "4-6-2020",
    "count": 1,
    "dt": "2020-4-6",
    "pos": 341
  },
  {
    "date": "4-7-2020",
    "count": 1,
    "dt": "2020-4-7",
    "pos": 342
  },
  {
    "date": "4-9-2020",
    "count": 1,
    "dt": "2020-4-9",
    "pos": 344
  },
  {
    "date": "6-1-2020",
    "count": 1,
    "dt": "2020-6-1",
    "pos": 397
  },
  {
    "date": "6-2-2020",
    "count": 1,
    "dt": "2020-6-2",
    "pos": 398
  },
  {
    "date": "6-3-2020",
    "count": 2,
    "dt": "2020-6-3",
    "pos": 399
  },
  {
    "date": "6-7-2020",
    "count": 1,
    "dt": "2020-6-7",
    "pos": 403
  },
  {
    "date": "6-28-2020",
    "count": 1,
    "dt": "2020-6-28",
    "pos": 424
  },
  {
    "date": "8-12-2020",
    "count": 1,
    "dt": "2020-8-12",
    "pos": 469
  },
  {
    "date": "8-29-2020",
    "count": 1,
    "dt": "2020-8-29",
    "pos": 486
  },
  {
    "date": "9-8-2020",
    "count": 1,
    "dt": "2020-9-8",
    "pos": 496
  },
  {
    "date": "11-13-2020",
    "count": 1,
    "dt": "2020-11-13",
    "pos": 562
  },
  {
    "date": "2-16-2021",
    "count": 1,
    "dt": "2021-2-16",
    "pos": 657
  },
  {
    "date": "11-1-2021",
    "count": 1,
    "dt": "2021-11-1",
    "pos": 915
  },
  {
    "date": "12-28-2021",
    "count": 1,
    "dt": "2021-12-28",
    "pos": 972
  },
  {
    "date": "6-15-2022",
    "count": 1,
    "dt": "2022-6-15",
    "pos": 1141
  },
  {
    "date": "6-3-2019",
    "count": 2,
    "dt": "2019-6-3",
    "pos": 33
  },
  {
    "date": "7-28-2019",
    "count": 3,
    "dt": "2019-7-28",
    "pos": 88
  },
  {
    "date": "8-11-2019",
    "count": 1,
    "dt": "2019-8-11",
    "pos": 102
  },
  {
    "date": "9-3-2019",
    "count": 1,
    "dt": "2019-9-3",
    "pos": 125
  },
  {
    "date": "10-12-2019",
    "count": 1,
    "dt": "2019-10-12",
    "pos": 164
  },
  {
    "date": "10-31-2019",
    "count": 1,
    "dt": "2019-10-31",
    "pos": 183
  },
  {
    "date": "2-24-2020",
    "count": 2,
    "dt": "2020-2-24",
    "pos": 299
  },
  {
    "date": "4-1-2020",
    "count": 1,
    "dt": "2020-4-1",
    "pos": 336
  },
  {
    "date": "7-4-2020",
    "count": 1,
    "dt": "2020-7-4",
    "pos": 430
  },
  {
    "date": "8-3-2020",
    "count": 1,
    "dt": "2020-8-3",
    "pos": 460
  },
  {
    "date": "9-3-2020",
    "count": 1,
    "dt": "2020-9-3",
    "pos": 491
  },
  {
    "date": "10-6-2020",
    "count": 1,
    "dt": "2020-10-6",
    "pos": 524
  },
  {
    "date": "10-21-2020",
    "count": 1,
    "dt": "2020-10-21",
    "pos": 539
  },
  {
    "date": "10-23-2020",
    "count": 1,
    "dt": "2020-10-23",
    "pos": 541
  },
  {
    "date": "10-25-2020",
    "count": 1,
    "dt": "2020-10-25",
    "pos": 543
  },
  {
    "date": "12-5-2020",
    "count": 1,
    "dt": "2020-12-5",
    "pos": 584
  },
  {
    "date": "2-8-2022",
    "count": 1,
    "dt": "2022-2-8",
    "pos": 1014
  },
  {
    "date": "5-24-2022",
    "count": 1,
    "dt": "2022-5-24",
    "pos": 1119
  },
  {
    "date": "6-8-2022",
    "count": 1,
    "dt": "2022-6-8",
    "pos": 1134
  },
  {
    "date": "7-1-2022",
    "count": 1,
    "dt": "2022-7-1",
    "pos": 1157
  },
  {
    "date": "12-19-2019",
    "count": 1,
    "dt": "2019-12-19",
    "pos": 232
  },
  {
    "date": "1-4-2020",
    "count": 1,
    "dt": "2020-1-4",
    "pos": 248
  },
  {
    "date": "2-4-2020",
    "count": 1,
    "dt": "2020-2-4",
    "pos": 279
  },
  {
    "date": "2-5-2020",
    "count": 1,
    "dt": "2020-2-5",
    "pos": 280
  },
  {
    "date": "2-12-2020",
    "count": 1,
    "dt": "2020-2-12",
    "pos": 287
  },
  {
    "date": "2-13-2020",
    "count": 1,
    "dt": "2020-2-13",
    "pos": 288
  },
  {
    "date": "2-17-2020",
    "count": 1,
    "dt": "2020-2-17",
    "pos": 292
  },
  {
    "date": "3-10-2020",
    "count": 1,
    "dt": "2020-3-10",
    "pos": 314
  },
  {
    "date": "3-13-2020",
    "count": 1,
    "dt": "2020-3-13",
    "pos": 317
  },
  {
    "date": "4-15-2020",
    "count": 1,
    "dt": "2020-4-15",
    "pos": 350
  },
  {
    "date": "10-1-2020",
    "count": 1,
    "dt": "2020-10-1",
    "pos": 519
  },
  {
    "date": "10-27-2020",
    "count": 1,
    "dt": "2020-10-27",
    "pos": 545
  },
  {
    "date": "11-10-2020",
    "count": 1,
    "dt": "2020-11-10",
    "pos": 559
  },
  {
    "date": "11-17-2020",
    "count": 1,
    "dt": "2020-11-17",
    "pos": 566
  },
  {
    "date": "11-28-2020",
    "count": 1,
    "dt": "2020-11-28",
    "pos": 577
  },
  {
    "date": "12-3-2020",
    "count": 1,
    "dt": "2020-12-3",
    "pos": 582
  },
  {
    "date": "12-12-2020",
    "count": 1,
    "dt": "2020-12-12",
    "pos": 591
  },
  {
    "date": "12-13-2020",
    "count": 1,
    "dt": "2020-12-13",
    "pos": 592
  },
  {
    "date": "12-14-2020",
    "count": 1,
    "dt": "2020-12-14",
    "pos": 593
  },
  {
    "date": "12-15-2020",
    "count": 1,
    "dt": "2020-12-15",
    "pos": 594
  },
  {
    "date": "12-16-2020",
    "count": 1,
    "dt": "2020-12-16",
    "pos": 595
  },
  {
    "date": "12-17-2020",
    "count": 1,
    "dt": "2020-12-17",
    "pos": 596
  },
  {
    "date": "12-18-2020",
    "count": 1,
    "dt": "2020-12-18",
    "pos": 597
  },
  {
    "date": "12-19-2020",
    "count": 1,
    "dt": "2020-12-19",
    "pos": 598
  },
  {
    "date": "12-21-2020",
    "count": 1,
    "dt": "2020-12-21",
    "pos": 600
  },
  {
    "date": "1-1-2021",
    "count": 1,
    "dt": "2021-1-1",
    "pos": 611
  },
  {
    "date": "2-1-2021",
    "count": 1,
    "dt": "2021-2-1",
    "pos": 642
  },
  {
    "date": "5-11-2021",
    "count": 1,
    "dt": "2021-5-11",
    "pos": 741
  },
  {
    "date": "5-25-2021",
    "count": 1,
    "dt": "2021-5-25",
    "pos": 755
  },
  {
    "date": "7-14-2021",
    "count": 1,
    "dt": "2021-7-14",
    "pos": 805
  },
  {
    "date": "8-25-2021",
    "count": 1,
    "dt": "2021-8-25",
    "pos": 847
  },
  {
    "date": "9-4-2021",
    "count": 1,
    "dt": "2021-9-4",
    "pos": 857
  },
  {
    "date": "10-16-2021",
    "count": 1,
    "dt": "2021-10-16",
    "pos": 899
  },
  {
    "date": "10-30-2021",
    "count": 1,
    "dt": "2021-10-30",
    "pos": 913
  },
  {
    "date": "11-30-2021",
    "count": 1,
    "dt": "2021-11-30",
    "pos": 944
  },
  {
    "date": "1-7-2022",
    "count": 1,
    "dt": "2022-1-7",
    "pos": 982
  },
  {
    "date": "3-8-2022",
    "count": 1,
    "dt": "2022-3-8",
    "pos": 1042
  },
  {
    "date": "5-16-2022",
    "count": 1,
    "dt": "2022-5-16",
    "pos": 1111
  },
  {
    "date": "5-22-2022",
    "count": 1,
    "dt": "2022-5-22",
    "pos": 1117
  },
  {
    "date": "6-2-2022",
    "count": 1,
    "dt": "2022-6-2",
    "pos": 1128
  },
  {
    "date": "6-3-2022",
    "count": 1,
    "dt": "2022-6-3",
    "pos": 1129
  },
  {
    "date": "6-2-2019",
    "count": 2,
    "dt": "2019-6-2",
    "pos": 32
  },
  {
    "date": "6-4-2019",
    "count": 1,
    "dt": "2019-6-4",
    "pos": 34
  },
  {
    "date": "6-6-2019",
    "count": 1,
    "dt": "2019-6-6",
    "pos": 36
  },
  {
    "date": "7-30-2019",
    "count": 1,
    "dt": "2019-7-30",
    "pos": 90
  },
  {
    "date": "11-13-2019",
    "count": 1,
    "dt": "2019-11-13",
    "pos": 196
  },
  {
    "date": "12-17-2019",
    "count": 1,
    "dt": "2019-12-17",
    "pos": 230
  },
  {
    "date": "3-14-2020",
    "count": 1,
    "dt": "2020-3-14",
    "pos": 318
  },
  {
    "date": "7-30-2020",
    "count": 1,
    "dt": "2020-7-30",
    "pos": 456
  },
  {
    "date": "2-11-2021",
    "count": 1,
    "dt": "2021-2-11",
    "pos": 652
  },
  {
    "date": "6-1-2021",
    "count": 1,
    "dt": "2021-6-1",
    "pos": 762
  },
  {
    "date": "1-17-2022",
    "count": 1,
    "dt": "2022-1-17",
    "pos": 992
  },
  {
    "date": "1-19-2022",
    "count": 1,
    "dt": "2022-1-19",
    "pos": 994
  },
  {
    "date": "5-17-2022",
    "count": 1,
    "dt": "2022-5-17",
    "pos": 1112
  },
  {
    "date": "5-25-2022",
    "count": 1,
    "dt": "2022-5-25",
    "pos": 1120
  },
  {
    "date": "6-7-2022",
    "count": 1,
    "dt": "2022-6-7",
    "pos": 1133
  },
  {
    "date": "7-17-2022",
    "count": 1,
    "dt": "2022-7-17",
    "pos": 1173
  },
  {
    "date": "5-7-2019",
    "count": 1,
    "dt": "2019-5-7",
    "pos": 6
  },
  {
    "date": "7-3-2019",
    "count": 1,
    "dt": "2019-7-3",
    "pos": 63
  },
  {
    "date": "7-27-2019",
    "count": 1,
    "dt": "2019-7-27",
    "pos": 87
  }
]

import React, { useRef, useEffect, useState } from 'react'
import { scaleLinear } from 'd3-scale'
import moment, { Moment } from "moment"

type Props = {
  minDate: Moment
  maxDate: Moment
  maxDayCount: number
  counter: number
  handleClick: Function
}

const CoverChart = ({ minDate, maxDate, maxDayCount, counter, handleClick }: Props) => {
  const playerRef = useRef<HTMLDivElement>(null)
  let x = useRef()
  const [barDimension, setBarDimension] = useState({ width: 0, height: 0, barWidth: 1 })
  useEffect(() => {
    if (playerRef.current)
      setBarDimension({ width: playerRef.current.clientWidth, height: playerRef.current.clientHeight, barWidth: playerRef.current.clientWidth / maxDayCount })
  }, [playerRef, maxDayCount])

  const xScale = scaleLinear()
    .domain([0, maxDayCount])
    .range([0, barDimension.width])
  const yScale = scaleLinear()
    .domain([0, 6])
    .range([0, barDimension.height])

  // console.log(CHART_DATA.map((data) => {
  //   let date = data.date.split("-")
  //   let dt = `${date[2]}-${date[0]}-${date[1]}`
  //   return { ...data, dt, pos: moment(dt).diff(moment("2019-05-1"), "day") }
  // }))


  return (
    <div>
      <div className='relative w-[242.28px] h-[44px] tablet:w-[598px]' ref={playerRef}>
        <div className='w-full h-full'>
          {CHART_DATA.map((data, index) => (
            <div key={`bar-${index}`} className='absolute bottom-0 bg-green'
              style={{
                width: `${barDimension.barWidth}px`,
                height: `${yScale(data.count)}px`,
                left: `${xScale(moment(data.pos))}px`
              }} />
          ))}
          <div className='absolute z-10 -bottom-[2px] w-full h-[2px] bg-gray cursor-pointer' onClick={(e) => { handleClick(e) }} />
          <div className='absolute -bottom-[6px] w-[12px] h-[12px] rounded-full bg-gray'
            style={{ left: `${xScale(counter)}px` }} />
        </div>
        <div className='flex flex-row justify-between
          wv-font-anuphan text-mobile-regular-b7 mt-[6px] opacity-60'>
          <div>{minDate.locale('th').format('ll')}
          </div>
          <div>
            {maxDate.locale('th').format('ll')}
          </div>
        </div>
      </div>

    </div>
  )
}

export default CoverChart