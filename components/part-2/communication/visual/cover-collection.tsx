import React, { useState, useEffect, useCallback, useRef } from 'react'
import { HeadDecorationLeft, HeadDecorationRight } from '../../../utils'
import moment from "moment"

import { scaleLinear } from 'd3-scale'
import CoverChart from './cover-chart'
type Props = {}

const COVER_COLLECTION = [
  {
    "party": "พลังประชารัฐ",
    "images": [
      {
        "date": "5-1-2019",
        "bg": "bg-พลังประชารัฐ-0-5-1-2019",
        "dt": "2019-5-1",
        "pos": 0
      },
      {
        "date": "5-4-2019",
        "bg": "bg-พลังประชารัฐ-1-5-4-2019",
        "dt": "2019-5-4",
        "pos": 3
      },
      {
        "date": "5-6-2019",
        "bg": "bg-พลังประชารัฐ-2-5-6-2019",
        "dt": "2019-5-6",
        "pos": 5
      },
      {
        "date": "5-31-2019",
        "bg": "bg-พลังประชารัฐ-3-5-31-2019",
        "dt": "2019-5-31",
        "pos": 30
      },
      {
        "date": "6-15-2019",
        "bg": "bg-พลังประชารัฐ-4-6-15-2019",
        "dt": "2019-6-15",
        "pos": 45
      },
      {
        "date": "8-9-2019",
        "bg": "bg-พลังประชารัฐ-5-8-9-2019",
        "dt": "2019-8-9",
        "pos": 100
      },
      {
        "date": "9-13-2019",
        "bg": "bg-พลังประชารัฐ-6-9-13-2019",
        "dt": "2019-9-13",
        "pos": 135
      },
      {
        "date": "10-2-2019",
        "bg": "bg-พลังประชารัฐ-7-10-2-2019",
        "dt": "2019-10-2",
        "pos": 154
      },
      {
        "date": "10-13-2019",
        "bg": "bg-พลังประชารัฐ-8-10-13-2019",
        "dt": "2019-10-13",
        "pos": 165
      },
      {
        "date": "12-5-2019",
        "bg": "bg-พลังประชารัฐ-9-12-5-2019",
        "dt": "2019-12-5",
        "pos": 218
      },
      {
        "date": "12-30-2019",
        "bg": "bg-พลังประชารัฐ-10-12-30-2019",
        "dt": "2019-12-30",
        "pos": 243
      },
      {
        "date": "1-7-2020",
        "bg": "bg-พลังประชารัฐ-11-1-7-2020",
        "dt": "2020-1-7",
        "pos": 251
      },
      {
        "date": "3-23-2020",
        "bg": "bg-พลังประชารัฐ-12-3-23-2020",
        "dt": "2020-3-23",
        "pos": 327
      },
      {
        "date": "3-31-2020",
        "bg": "bg-พลังประชารัฐ-13-3-31-2020",
        "dt": "2020-3-31",
        "pos": 335
      },
      {
        "date": "5-10-2020",
        "bg": "bg-พลังประชารัฐ-14-5-10-2020",
        "dt": "2020-5-10",
        "pos": 375
      },
      {
        "date": "5-4-2021",
        "bg": "bg-พลังประชารัฐ-15-5-4-2021",
        "dt": "2021-5-4",
        "pos": 734
      },
      {
        "date": "6-3-2021",
        "bg": "bg-พลังประชารัฐ-16-6-3-2021",
        "dt": "2021-6-3",
        "pos": 764
      },
      {
        "date": "7-28-2021",
        "bg": "bg-พลังประชารัฐ-17-7-28-2021",
        "dt": "2021-7-28",
        "pos": 819
      },
      {
        "date": "8-12-2021",
        "bg": "bg-พลังประชารัฐ-18-8-12-2021",
        "dt": "2021-8-12",
        "pos": 834
      },
      {
        "date": "2-3-2022",
        "bg": "bg-พลังประชารัฐ-19-2-3-2022",
        "dt": "2022-2-3",
        "pos": 1009
      },
      {
        "date": "2-23-2022",
        "bg": "bg-พลังประชารัฐ-20-2-23-2022",
        "dt": "2022-2-23",
        "pos": 1029
      },
      {
        "date": "4-13-2022",
        "bg": "bg-พลังประชารัฐ-21-4-13-2022",
        "dt": "2022-4-13",
        "pos": 1078
      }
    ]
  },
  {
    "party": "ภูมิใจไทย",
    "images": [
      {
        "date": "5-1-2019",
        "bg": "bg-ภูมิใจไทย-0-5-1-2019",
        "dt": "2019-5-1",
        "pos": 0
      },
      {
        "date": "5-2-2019",
        "bg": "bg-ภูมิใจไทย-1-5-2-2019",
        "dt": "2019-5-2",
        "pos": 1
      },
      {
        "date": "5-17-2019",
        "bg": "bg-ภูมิใจไทย-2-5-17-2019",
        "dt": "2019-5-17",
        "pos": 16
      },
      {
        "date": "5-24-2019",
        "bg": "bg-ภูมิใจไทย-3-5-24-2019",
        "dt": "2019-5-24",
        "pos": 23
      },
      {
        "date": "5-30-2019",
        "bg": "bg-ภูมิใจไทย-4-5-30-2019",
        "dt": "2019-5-30",
        "pos": 29
      },
      {
        "date": "7-4-2019",
        "bg": "bg-ภูมิใจไทย-5-7-4-2019",
        "dt": "2019-7-4",
        "pos": 64
      },
      {
        "date": "7-10-2019",
        "bg": "bg-ภูมิใจไทย-6-7-10-2019",
        "dt": "2019-7-10",
        "pos": 70
      },
      {
        "date": "7-13-2019",
        "bg": "bg-ภูมิใจไทย-7-7-13-2019",
        "dt": "2019-7-13",
        "pos": 73
      },
      {
        "date": "7-15-2019",
        "bg": "bg-ภูมิใจไทย-8-7-15-2019",
        "dt": "2019-7-15",
        "pos": 75
      },
      {
        "date": "7-18-2019",
        "bg": "bg-ภูมิใจไทย-9-7-18-2019",
        "dt": "2019-7-18",
        "pos": 78
      },
      {
        "date": "7-19-2019",
        "bg": "bg-ภูมิใจไทย-10-7-19-2019",
        "dt": "2019-7-19",
        "pos": 79
      },
      {
        "date": "7-23-2019",
        "bg": "bg-ภูมิใจไทย-11-7-23-2019",
        "dt": "2019-7-23",
        "pos": 83
      },
      {
        "date": "7-24-2019",
        "bg": "bg-ภูมิใจไทย-12-7-24-2019",
        "dt": "2019-7-24",
        "pos": 84
      },
      {
        "date": "8-9-2019",
        "bg": "bg-ภูมิใจไทย-13-8-9-2019",
        "dt": "2019-8-9",
        "pos": 100
      },
      {
        "date": "8-21-2019",
        "bg": "bg-ภูมิใจไทย-14-8-21-2019",
        "dt": "2019-8-21",
        "pos": 112
      },
      {
        "date": "8-23-2019",
        "bg": "bg-ภูมิใจไทย-15-8-23-2019",
        "dt": "2019-8-23",
        "pos": 114
      },
      {
        "date": "9-2-2019",
        "bg": "bg-ภูมิใจไทย-16-9-2-2019",
        "dt": "2019-9-2",
        "pos": 124
      },
      {
        "date": "9-5-2019",
        "bg": "bg-ภูมิใจไทย-17-9-5-2019",
        "dt": "2019-9-5",
        "pos": 127
      },
      {
        "date": "9-14-2019",
        "bg": "bg-ภูมิใจไทย-18-9-14-2019",
        "dt": "2019-9-14",
        "pos": 136
      },
      {
        "date": "10-1-2019",
        "bg": "bg-ภูมิใจไทย-19-10-1-2019",
        "dt": "2019-10-1",
        "pos": 153
      },
      {
        "date": "10-13-2019",
        "bg": "bg-ภูมิใจไทย-20-10-13-2019",
        "dt": "2019-10-13",
        "pos": 165
      },
      {
        "date": "10-14-2019",
        "bg": "bg-ภูมิใจไทย-21-10-14-2019",
        "dt": "2019-10-14",
        "pos": 166
      },
      {
        "date": "11-3-2019",
        "bg": "bg-ภูมิใจไทย-22-11-3-2019",
        "dt": "2019-11-3",
        "pos": 186
      },
      {
        "date": "12-2-2019",
        "bg": "bg-ภูมิใจไทย-23-12-2-2019",
        "dt": "2019-12-2",
        "pos": 215
      },
      {
        "date": "12-4-2019",
        "bg": "bg-ภูมิใจไทย-24-12-4-2019",
        "dt": "2019-12-4",
        "pos": 217
      },
      {
        "date": "12-6-2019",
        "bg": "bg-ภูมิใจไทย-25-12-6-2019",
        "dt": "2019-12-6",
        "pos": 219
      },
      {
        "date": "12-7-2019",
        "bg": "bg-ภูมิใจไทย-26-12-7-2019",
        "dt": "2019-12-7",
        "pos": 220
      },
      {
        "date": "12-8-2019",
        "bg": "bg-ภูมิใจไทย-27-12-8-2019",
        "dt": "2019-12-8",
        "pos": 221
      },
      {
        "date": "12-27-2019",
        "bg": "bg-ภูมิใจไทย-28-12-27-2019",
        "dt": "2019-12-27",
        "pos": 240
      },
      {
        "date": "1-8-2020",
        "bg": "bg-ภูมิใจไทย-29-1-8-2020",
        "dt": "2020-1-8",
        "pos": 252
      },
      {
        "date": "1-9-2020",
        "bg": "bg-ภูมิใจไทย-30-1-9-2020",
        "dt": "2020-1-9",
        "pos": 253
      },
      {
        "date": "1-11-2020",
        "bg": "bg-ภูมิใจไทย-31-1-11-2020",
        "dt": "2020-1-11",
        "pos": 255
      },
      {
        "date": "1-16-2020",
        "bg": "bg-ภูมิใจไทย-32-1-16-2020",
        "dt": "2020-1-16",
        "pos": 260
      },
      {
        "date": "1-17-2020",
        "bg": "bg-ภูมิใจไทย-33-1-17-2020",
        "dt": "2020-1-17",
        "pos": 261
      },
      {
        "date": "2-1-2020",
        "bg": "bg-ภูมิใจไทย-34-2-1-2020",
        "dt": "2020-2-1",
        "pos": 276
      },
      {
        "date": "2-2-2020",
        "bg": "bg-ภูมิใจไทย-35-2-2-2020",
        "dt": "2020-2-2",
        "pos": 277
      },
      {
        "date": "3-1-2020",
        "bg": "bg-ภูมิใจไทย-36-3-1-2020",
        "dt": "2020-3-1",
        "pos": 305
      },
      {
        "date": "3-2-2020",
        "bg": "bg-ภูมิใจไทย-37-3-2-2020",
        "dt": "2020-3-2",
        "pos": 306
      },
      {
        "date": "3-24-2020",
        "bg": "bg-ภูมิใจไทย-38-3-24-2020",
        "dt": "2020-3-24",
        "pos": 328
      },
      {
        "date": "3-25-2020",
        "bg": "bg-ภูมิใจไทย-39-3-25-2020",
        "dt": "2020-3-25",
        "pos": 329
      },
      {
        "date": "4-2-2020",
        "bg": "bg-ภูมิใจไทย-40-4-2-2020",
        "dt": "2020-4-2",
        "pos": 337
      },
      {
        "date": "4-3-2020",
        "bg": "bg-ภูมิใจไทย-41-4-3-2020",
        "dt": "2020-4-3",
        "pos": 338
      },
      {
        "date": "4-5-2020",
        "bg": "bg-ภูมิใจไทย-42-4-5-2020",
        "dt": "2020-4-5",
        "pos": 340
      },
      {
        "date": "4-6-2020",
        "bg": "bg-ภูมิใจไทย-43-4-6-2020",
        "dt": "2020-4-6",
        "pos": 341
      },
      {
        "date": "4-7-2020",
        "bg": "bg-ภูมิใจไทย-44-4-7-2020",
        "dt": "2020-4-7",
        "pos": 342
      },
      {
        "date": "4-9-2020",
        "bg": "bg-ภูมิใจไทย-45-4-9-2020",
        "dt": "2020-4-9",
        "pos": 344
      },
      {
        "date": "6-1-2020",
        "bg": "bg-ภูมิใจไทย-46-6-1-2020",
        "dt": "2020-6-1",
        "pos": 397
      },
      {
        "date": "6-2-2020",
        "bg": "bg-ภูมิใจไทย-47-6-2-2020",
        "dt": "2020-6-2",
        "pos": 398
      },
      {
        "date": "6-3-2020",
        "bg": "bg-ภูมิใจไทย-48-6-3-2020",
        "dt": "2020-6-3",
        "pos": 399
      },
      {
        "date": "6-7-2020",
        "bg": "bg-ภูมิใจไทย-49-6-7-2020",
        "dt": "2020-6-7",
        "pos": 403
      },
      {
        "date": "6-28-2020",
        "bg": "bg-ภูมิใจไทย-50-6-28-2020",
        "dt": "2020-6-28",
        "pos": 424
      },
      {
        "date": "8-12-2020",
        "bg": "bg-ภูมิใจไทย-51-8-12-2020",
        "dt": "2020-8-12",
        "pos": 469
      },
      {
        "date": "8-29-2020",
        "bg": "bg-ภูมิใจไทย-52-8-29-2020",
        "dt": "2020-8-29",
        "pos": 486
      },
      {
        "date": "9-8-2020",
        "bg": "bg-ภูมิใจไทย-53-9-8-2020",
        "dt": "2020-9-8",
        "pos": 496
      },
      {
        "date": "11-13-2020",
        "bg": "bg-ภูมิใจไทย-54-11-13-2020",
        "dt": "2020-11-13",
        "pos": 562
      },
      {
        "date": "2-16-2021",
        "bg": "bg-ภูมิใจไทย-55-2-16-2021",
        "dt": "2021-2-16",
        "pos": 657
      },
      {
        "date": "11-1-2021",
        "bg": "bg-ภูมิใจไทย-56-11-1-2021",
        "dt": "2021-11-1",
        "pos": 915
      },
      {
        "date": "12-28-2021",
        "bg": "bg-ภูมิใจไทย-57-12-28-2021",
        "dt": "2021-12-28",
        "pos": 972
      },
      {
        "date": "2-3-2022",
        "bg": "bg-ภูมิใจไทย-58-2-3-2022",
        "dt": "2022-2-3",
        "pos": 1009
      },
      {
        "date": "6-15-2022",
        "bg": "bg-ภูมิใจไทย-59-6-15-2022",
        "dt": "2022-6-15",
        "pos": 1141
      }
    ]
  },
  {
    "party": "ประชาธิปัตย์",
    "images": [
      {
        "date": "5-1-2019",
        "bg": "bg-ประชาธิปัตย์-0-5-1-2019",
        "dt": "2019-5-1",
        "pos": 0
      },
      {
        "date": "5-4-2019",
        "bg": "bg-ประชาธิปัตย์-1-5-4-2019",
        "dt": "2019-5-4",
        "pos": 3
      },
      {
        "date": "6-3-2019",
        "bg": "bg-ประชาธิปัตย์-2-6-3-2019",
        "dt": "2019-6-3",
        "pos": 33
      },
      {
        "date": "7-28-2019",
        "bg": "bg-ประชาธิปัตย์-3-7-28-2019",
        "dt": "2019-7-28",
        "pos": 88
      },
      {
        "date": "8-11-2019",
        "bg": "bg-ประชาธิปัตย์-4-8-11-2019",
        "dt": "2019-8-11",
        "pos": 102
      },
      {
        "date": "9-3-2019",
        "bg": "bg-ประชาธิปัตย์-5-9-3-2019",
        "dt": "2019-9-3",
        "pos": 125
      },
      {
        "date": "10-12-2019",
        "bg": "bg-ประชาธิปัตย์-6-10-12-2019",
        "dt": "2019-10-12",
        "pos": 164
      },
      {
        "date": "10-31-2019",
        "bg": "bg-ประชาธิปัตย์-7-10-31-2019",
        "dt": "2019-10-31",
        "pos": 183
      },
      {
        "date": "12-4-2019",
        "bg": "bg-ประชาธิปัตย์-8-12-4-2019",
        "dt": "2019-12-4",
        "pos": 217
      },
      {
        "date": "2-24-2020",
        "bg": "bg-ประชาธิปัตย์-9-2-24-2020",
        "dt": "2020-2-24",
        "pos": 299
      },
      {
        "date": "4-1-2020",
        "bg": "bg-ประชาธิปัตย์-10-4-1-2020",
        "dt": "2020-4-1",
        "pos": 336
      },
      {
        "date": "6-3-2020",
        "bg": "bg-ประชาธิปัตย์-11-6-3-2020",
        "dt": "2020-6-3",
        "pos": 399
      },
      {
        "date": "7-4-2020",
        "bg": "bg-ประชาธิปัตย์-12-7-4-2020",
        "dt": "2020-7-4",
        "pos": 430
      },
      {
        "date": "8-3-2020",
        "bg": "bg-ประชาธิปัตย์-13-8-3-2020",
        "dt": "2020-8-3",
        "pos": 460
      },
      {
        "date": "9-3-2020",
        "bg": "bg-ประชาธิปัตย์-14-9-3-2020",
        "dt": "2020-9-3",
        "pos": 491
      },
      {
        "date": "10-6-2020",
        "bg": "bg-ประชาธิปัตย์-15-10-6-2020",
        "dt": "2020-10-6",
        "pos": 524
      },
      {
        "date": "10-21-2020",
        "bg": "bg-ประชาธิปัตย์-16-10-21-2020",
        "dt": "2020-10-21",
        "pos": 539
      },
      {
        "date": "10-23-2020",
        "bg": "bg-ประชาธิปัตย์-17-10-23-2020",
        "dt": "2020-10-23",
        "pos": 541
      },
      {
        "date": "10-25-2020",
        "bg": "bg-ประชาธิปัตย์-18-10-25-2020",
        "dt": "2020-10-25",
        "pos": 543
      },
      {
        "date": "12-5-2020",
        "bg": "bg-ประชาธิปัตย์-19-12-5-2020",
        "dt": "2020-12-5",
        "pos": 584
      },
      {
        "date": "2-3-2022",
        "bg": "bg-ประชาธิปัตย์-20-2-3-2022",
        "dt": "2022-2-3",
        "pos": 1009
      },
      {
        "date": "2-8-2022",
        "bg": "bg-ประชาธิปัตย์-21-2-8-2022",
        "dt": "2022-2-8",
        "pos": 1014
      },
      {
        "date": "5-24-2022",
        "bg": "bg-ประชาธิปัตย์-22-5-24-2022",
        "dt": "2022-5-24",
        "pos": 1119
      },
      {
        "date": "6-8-2022",
        "bg": "bg-ประชาธิปัตย์-23-6-8-2022",
        "dt": "2022-6-8",
        "pos": 1134
      },
      {
        "date": "7-1-2022",
        "bg": "bg-ประชาธิปัตย์-24-7-1-2022",
        "dt": "2022-7-1",
        "pos": 1157
      }
    ]
  },
  {
    "party": "เพื่อไทย",
    "images": [
      {
        "date": "5-1-2019",
        "bg": "bg-เพื่อไทย-0-5-1-2019",
        "dt": "2019-5-1",
        "pos": 0
      },
      {
        "date": "5-4-2019",
        "bg": "bg-เพื่อไทย-1-5-4-2019",
        "dt": "2019-5-4",
        "pos": 3
      },
      {
        "date": "6-3-2019",
        "bg": "bg-เพื่อไทย-2-6-3-2019",
        "dt": "2019-6-3",
        "pos": 33
      },
      {
        "date": "7-28-2019",
        "bg": "bg-เพื่อไทย-3-7-28-2019",
        "dt": "2019-7-28",
        "pos": 88
      },
      {
        "date": "12-19-2019",
        "bg": "bg-เพื่อไทย-4-12-19-2019",
        "dt": "2019-12-19",
        "pos": 232
      },
      {
        "date": "1-4-2020",
        "bg": "bg-เพื่อไทย-5-1-4-2020",
        "dt": "2020-1-4",
        "pos": 248
      },
      {
        "date": "2-4-2020",
        "bg": "bg-เพื่อไทย-6-2-4-2020",
        "dt": "2020-2-4",
        "pos": 279
      },
      {
        "date": "2-5-2020",
        "bg": "bg-เพื่อไทย-7-2-5-2020",
        "dt": "2020-2-5",
        "pos": 280
      },
      {
        "date": "2-12-2020",
        "bg": "bg-เพื่อไทย-8-2-12-2020",
        "dt": "2020-2-12",
        "pos": 287
      },
      {
        "date": "2-13-2020",
        "bg": "bg-เพื่อไทย-9-2-13-2020",
        "dt": "2020-2-13",
        "pos": 288
      },
      {
        "date": "2-17-2020",
        "bg": "bg-เพื่อไทย-10-2-17-2020",
        "dt": "2020-2-17",
        "pos": 292
      },
      {
        "date": "3-10-2020",
        "bg": "bg-เพื่อไทย-11-3-10-2020",
        "dt": "2020-3-10",
        "pos": 314
      },
      {
        "date": "3-13-2020",
        "bg": "bg-เพื่อไทย-12-3-13-2020",
        "dt": "2020-3-13",
        "pos": 317
      },
      {
        "date": "4-15-2020",
        "bg": "bg-เพื่อไทย-13-4-15-2020",
        "dt": "2020-4-15",
        "pos": 350
      },
      {
        "date": "10-1-2020",
        "bg": "bg-เพื่อไทย-14-10-1-2020",
        "dt": "2020-10-1",
        "pos": 519
      },
      {
        "date": "10-27-2020",
        "bg": "bg-เพื่อไทย-15-10-27-2020",
        "dt": "2020-10-27",
        "pos": 545
      },
      {
        "date": "11-10-2020",
        "bg": "bg-เพื่อไทย-16-11-10-2020",
        "dt": "2020-11-10",
        "pos": 559
      },
      {
        "date": "11-17-2020",
        "bg": "bg-เพื่อไทย-17-11-17-2020",
        "dt": "2020-11-17",
        "pos": 566
      },
      {
        "date": "11-28-2020",
        "bg": "bg-เพื่อไทย-18-11-28-2020",
        "dt": "2020-11-28",
        "pos": 577
      },
      {
        "date": "12-3-2020",
        "bg": "bg-เพื่อไทย-19-12-3-2020",
        "dt": "2020-12-3",
        "pos": 582
      },
      {
        "date": "12-12-2020",
        "bg": "bg-เพื่อไทย-20-12-12-2020",
        "dt": "2020-12-12",
        "pos": 591
      },
      {
        "date": "12-13-2020",
        "bg": "bg-เพื่อไทย-21-12-13-2020",
        "dt": "2020-12-13",
        "pos": 592
      },
      {
        "date": "12-14-2020",
        "bg": "bg-เพื่อไทย-22-12-14-2020",
        "dt": "2020-12-14",
        "pos": 593
      },
      {
        "date": "12-15-2020",
        "bg": "bg-เพื่อไทย-23-12-15-2020",
        "dt": "2020-12-15",
        "pos": 594
      },
      {
        "date": "12-16-2020",
        "bg": "bg-เพื่อไทย-24-12-16-2020",
        "dt": "2020-12-16",
        "pos": 595
      },
      {
        "date": "12-17-2020",
        "bg": "bg-เพื่อไทย-25-12-17-2020",
        "dt": "2020-12-17",
        "pos": 596
      },
      {
        "date": "12-18-2020",
        "bg": "bg-เพื่อไทย-26-12-18-2020",
        "dt": "2020-12-18",
        "pos": 597
      },
      {
        "date": "12-19-2020",
        "bg": "bg-เพื่อไทย-27-12-19-2020",
        "dt": "2020-12-19",
        "pos": 598
      },
      {
        "date": "12-21-2020",
        "bg": "bg-เพื่อไทย-28-12-21-2020",
        "dt": "2020-12-21",
        "pos": 600
      },
      {
        "date": "1-1-2021",
        "bg": "bg-เพื่อไทย-29-1-1-2021",
        "dt": "2021-1-1",
        "pos": 611
      },
      {
        "date": "2-1-2021",
        "bg": "bg-เพื่อไทย-30-2-1-2021",
        "dt": "2021-2-1",
        "pos": 642
      },
      {
        "date": "5-11-2021",
        "bg": "bg-เพื่อไทย-31-5-11-2021",
        "dt": "2021-5-11",
        "pos": 741
      },
      {
        "date": "5-25-2021",
        "bg": "bg-เพื่อไทย-32-5-25-2021",
        "dt": "2021-5-25",
        "pos": 755
      },
      {
        "date": "7-14-2021",
        "bg": "bg-เพื่อไทย-33-7-14-2021",
        "dt": "2021-7-14",
        "pos": 805
      },
      {
        "date": "8-25-2021",
        "bg": "bg-เพื่อไทย-34-8-25-2021",
        "dt": "2021-8-25",
        "pos": 847
      },
      {
        "date": "9-4-2021",
        "bg": "bg-เพื่อไทย-35-9-4-2021",
        "dt": "2021-9-4",
        "pos": 857
      },
      {
        "date": "10-16-2021",
        "bg": "bg-เพื่อไทย-36-10-16-2021",
        "dt": "2021-10-16",
        "pos": 899
      },
      {
        "date": "10-30-2021",
        "bg": "bg-เพื่อไทย-37-10-30-2021",
        "dt": "2021-10-30",
        "pos": 913
      },
      {
        "date": "11-30-2021",
        "bg": "bg-เพื่อไทย-38-11-30-2021",
        "dt": "2021-11-30",
        "pos": 944
      },
      {
        "date": "1-7-2022",
        "bg": "bg-เพื่อไทย-39-1-7-2022",
        "dt": "2022-1-7",
        "pos": 982
      },
      {
        "date": "2-3-2022",
        "bg": "bg-เพื่อไทย-40-2-3-2022",
        "dt": "2022-2-3",
        "pos": 1009
      },
      {
        "date": "3-8-2022",
        "bg": "bg-เพื่อไทย-41-3-8-2022",
        "dt": "2022-3-8",
        "pos": 1042
      },
      {
        "date": "5-16-2022",
        "bg": "bg-เพื่อไทย-42-5-16-2022",
        "dt": "2022-5-16",
        "pos": 1111
      },
      {
        "date": "5-22-2022",
        "bg": "bg-เพื่อไทย-43-5-22-2022",
        "dt": "2022-5-22",
        "pos": 1117
      },
      {
        "date": "6-2-2022",
        "bg": "bg-เพื่อไทย-44-6-2-2022",
        "dt": "2022-6-2",
        "pos": 1128
      },
      {
        "date": "6-3-2022",
        "bg": "bg-เพื่อไทย-45-6-3-2022",
        "dt": "2022-6-3",
        "pos": 1129
      }
    ]
  },
  {
    "party": "อนาคตใหม่/ก้าวไกล",
    "images": [
      {
        "date": "5-1-2019",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-0-5-1-2019",
        "dt": "2019-5-1",
        "pos": 0
      },
      {
        "date": "6-2-2019",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-1-6-2-2019",
        "dt": "2019-6-2",
        "pos": 32
      },
      {
        "date": "6-4-2019",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-2-6-4-2019",
        "dt": "2019-6-4",
        "pos": 34
      },
      {
        "date": "6-6-2019",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-3-6-6-2019",
        "dt": "2019-6-6",
        "pos": 36
      },
      {
        "date": "7-28-2019",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-4-7-28-2019",
        "dt": "2019-7-28",
        "pos": 88
      },
      {
        "date": "7-30-2019",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-5-7-30-2019",
        "dt": "2019-7-30",
        "pos": 90
      },
      {
        "date": "10-13-2019",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-6-10-13-2019",
        "dt": "2019-10-13",
        "pos": 165
      },
      {
        "date": "11-3-2019",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-7-11-3-2019",
        "dt": "2019-11-3",
        "pos": 186
      },
      {
        "date": "11-13-2019",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-8-11-13-2019",
        "dt": "2019-11-13",
        "pos": 196
      },
      {
        "date": "12-17-2019",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-9-12-17-2019",
        "dt": "2019-12-17",
        "pos": 230
      },
      {
        "date": "2-24-2020",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-10-2-24-2020",
        "dt": "2020-2-24",
        "pos": 299
      },
      {
        "date": "3-14-2020",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-11-3-14-2020",
        "dt": "2020-3-14",
        "pos": 318
      },
      {
        "date": "7-30-2020",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-12-7-30-2020",
        "dt": "2020-7-30",
        "pos": 456
      },
      {
        "date": "2-11-2021",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-13-2-11-2021",
        "dt": "2021-2-11",
        "pos": 652
      },
      {
        "date": "6-1-2021",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-14-6-1-2021",
        "dt": "2021-6-1",
        "pos": 762
      },
      {
        "date": "1-17-2022",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-15-1-17-2022",
        "dt": "2022-1-17",
        "pos": 992
      },
      {
        "date": "1-19-2022",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-16-1-19-2022",
        "dt": "2022-1-19",
        "pos": 994
      },
      {
        "date": "5-17-2022",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-17-5-17-2022",
        "dt": "2022-5-17",
        "pos": 1112
      },
      {
        "date": "5-25-2022",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-18-5-25-2022",
        "dt": "2022-5-25",
        "pos": 1120
      },
      {
        "date": "6-7-2022",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-19-6-7-2022",
        "dt": "2022-6-7",
        "pos": 1133
      },
      {
        "date": "7-17-2022",
        "bg": "bg-อนาคตใหม่/ก้าวไกล-20-7-17-2022",
        "dt": "2022-7-17",
        "pos": 1173
      }
    ]
  },
  {
    "party": "เสรีรวมไทย",
    "images": [
      {
        "date": "5-1-2019",
        "bg": "bg-เสรีรวมไทย-0-5-1-2019",
        "dt": "2019-5-1",
        "pos": 0
      },
      {
        "date": "5-4-2019",
        "bg": "bg-เสรีรวมไทย-1-5-4-2019",
        "dt": "2019-5-4",
        "pos": 3
      },
      {
        "date": "5-7-2019",
        "bg": "bg-เสรีรวมไทย-2-5-7-2019",
        "dt": "2019-5-7",
        "pos": 6
      },
      {
        "date": "6-2-2019",
        "bg": "bg-เสรีรวมไทย-3-6-2-2019",
        "dt": "2019-6-2",
        "pos": 32
      },
      {
        "date": "7-3-2019",
        "bg": "bg-เสรีรวมไทย-4-7-3-2019",
        "dt": "2019-7-3",
        "pos": 63
      },
      {
        "date": "7-4-2019",
        "bg": "bg-เสรีรวมไทย-5-7-4-2019",
        "dt": "2019-7-4",
        "pos": 64
      },
      {
        "date": "7-13-2019",
        "bg": "bg-เสรีรวมไทย-6-7-13-2019",
        "dt": "2019-7-13",
        "pos": 73
      },
      {
        "date": "7-27-2019",
        "bg": "bg-เสรีรวมไทย-7-7-27-2019",
        "dt": "2019-7-27",
        "pos": 87
      }
    ]
  }
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
    if (counter === 0) {
      setSelectIndex(0)
      return;
    }
    let index = collection.images.findIndex((data) => counter <= data.pos)
    if (index !== -1)
      setSelectIndex(index)
    else
      setSelectIndex(collection.images.length - 1)


  }, [selectIndex, collection, counter])


  // console.log(COVER_COLLECTION.map((row) => {
  //   return {
  //     ...row, images: row.images.map((data) => {
  //       let date = data.date.split("-")
  //       let dt = `${date[2]}-${date[0]}-${date[1]}`
  //       return { ...data, dt, pos: moment(dt).diff(moment("2019-05-1"), "day") }
  //     })
  //   }
  // }))

  return (
    <div className=' mb-[10px]'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-x-[5px] leading-[15px] mb-[5px]'>
          <div>
            {getLogo(collection.party)}
          </div>
          <div className='wv-font-anuphan wv-b7
          wv-b7 tablet:leading-[18px]'>
            {collection.party}
          </div>
        </div>
        <div className='wv-font-anuphan wv-b7 text-green
        wv-b7 tablet:leading-[18px]'>
          <span className='wv-font-bold'>{selectIndex + 1}</span><span className='wv-font-regular opacity-50'>{`/${collection.images.length}`}</span>
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


  // timer
  const [counter, setCounter] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timer, setTimer] = useState<ReturnType<typeof setInterval>>()

  const minDate = moment("2019-05-01", "YYYY-MM-DD")
  const maxDate = moment("2022-07-31", "YYYY-MM-DD")
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
    if (party !== "เปรียบเทียบทุกพรรค") {
      setCounter(0);
      stopTimer();
      let COVER = COVER_COLLECTION.find((data) => data.party === party)
      if (COVER)
        setSelectedContent(COVER.images)
    }
  }, [party, stopTimer])
  // player
  const [barWidth, setBarWidth] = useState(0)
  const playerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (playerRef.current)
      setBarWidth(playerRef.current.clientWidth)
  }, [playerRef])

  const xScale = scaleLinear()
    .domain([0, maxDayCount])
    .range([0, barWidth])


  const handleClick = (e) => {
    if (playerRef.current) {
      var rect = playerRef.current.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.
      // var y = e.clientY - rect.top;  //y position within the element.
      // console.log("Left? : " + x + " ; Top? : " + y + ".");

      setCounter(Math.floor(xScale.invert(x)))
    }
  }
  return (
    <div>
      <div className={`relative flex flex-row justify-between items-baseline w-[287px] 
      tablet:w-[630px] mx-auto mb-[12px]
        ${party !== "เปรียบเทียบทุกพรรค" ? "opacity-50 pointer-events-none" : "pointer-events-auto"}
      `} >
        {!isPlaying ?
          <svg className='cursor-pointer'
            onClick={() => startTimer()} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="2" fill="white" />
            <path d="M19 12L8.5 18.0622L8.5 5.93782L19 12Z" fill="#161616" />
          </svg>
          :
          <svg className='cursor-pointer'
            onClick={() => stopTimer()} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="2" fill="white" />
            <rect x="7.5" y="6" width="3" height="12" fill="black" />
            <rect x="13.5" y="6" width="3" height="12" fill="black" />
          </svg>
        }
        <div ref={playerRef}>
          <CoverChart minDate={minDate} maxDate={maxDate} maxDayCount={maxDayCount} counter={counter} handleClick={handleClick} />
        </div>
      </div>
      {party !== "เปรียบเทียบทุกพรรค" ?
        <div>
          <div className='wv-font-anuphan wv-b5 text-green !mb-[30px] !mt-[6px]'>เปลี่ยน <span className='wv-font-bold'>{`${selectedContent.length}`}</span> ครั้ง</div>
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
          {/* {!isPlaying ? "start" : "stop"} {counter} */}

          <div className='wv-font-anuphan wv-font-bold wv-b4 text-center mb-[20px]
          wv-b4 tablet:leading-[27px] '>
            {minDate.add(counter, "day").locale('th').format('ll')}
          </div>

          <div className='flex flex-row justify-around px-[12px] mx-auto
            w-full
            tablet:justify-center'>
            <div className="w-[128px] tablet:w-auto tablet:max-w-[350px] tablet:mr-[20px]">
              <div className="flex flex-row gap-x-[5px] opacity-60 mb-[10px]">
                <HeadDecorationLeft />
                <div className="flex-none wv-font-anuphan wv-font-bold wv-b6 leading-[18px]
                wv-b6 tablet:leading-[21px]">
                  ฝ่ายรัฐบาล
                </div>
                <HeadDecorationRight />
              </div>
              <PartyCoverCollection collection={COVER_COLLECTION[0]} counter={counter} />
              <PartyCoverCollection collection={COVER_COLLECTION[1]} counter={counter} />
              <PartyCoverCollection collection={COVER_COLLECTION[2]} counter={counter} />
            </div>
            <div className='border-[.5px] border-white border-dashed' />
            <div className="w-[128px] tablet:w-auto tablet:max-w-[350px] tablet:ml-[20px]">
              <div className="flex flex-row gap-x-[5px] opacity-60 mb-[10px]">
                <HeadDecorationLeft />
                <div className="flex-none wv-font-anuphan wv-font-bold wv-b6 leading-[18px]
                wv-b6 tablet:leading-[21px]">
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

