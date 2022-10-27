import React from 'react'
import { HeadDecorationLeft, HeadDecorationRight } from '../../utils'
import { GOVERNMENT, OPPOSITION } from './chart-data'

type Props = {}

const Legend = () => {
  return (
    <div className='flex flex-row justify-center items-center text-center divide-x 
    wv-font-anuphan text-mobile-regular-b7 leading-[15px] opacity-60'>
      <div className='px-[8px]'>`62</div>
      <div className='px-[8px]'>`63</div>
      <div className='px-[8px]'>`64</div>
      <div className='px-[8px]'>`65</div>
    </div>
  )
}

const NoAccount = () => {
  return (
    <div className='w-full h-full flex items-center'>
      <div className='m-auto wv-font-anuphan text-mobile-regular-b7 opacity-60'>พรรคไม่มี account <br /> ในช่องทางนี้</div>
    </div>
  )
}


const ChartAll = ({ type }: { type: "all" | "facebook" | "twitter" | "youtube" }) => {

  const getChart = (data) => {
    switch (type) {
      case "all": return data.all || <NoAccount />
      case "facebook": return data.facebook || <NoAccount />
      case "twitter": return data.twitter || <NoAccount />
      case "youtube": return data.youtube || <NoAccount />
      default:
        return data.youtube || <NoAccount />;
    }
  }

  const getAvg = (data) => {
    switch (type) {
      case "all": return data.al || 'XX'
      case "facebook": return data.fb || 'XX'
      case "twitter": return data.tw || 'XX'
      case "youtube": return data.yt || 'XX'
      default:
        return data.youtube || 'XX';
    }
  }

  return (
    <div className='flex flex-row justify-center mx-auto
    w-full'>
      <div className="w-[128px] mr-auto">
        <div className="flex flex-row gap-x-[5px] opacity-60">
          <HeadDecorationLeft />
          <div className="flex-none wv-font-anuphan wv-font-bold text-mobile-bold-b6 ">
            ฝ่ายรัฐบาล
          </div>
          <HeadDecorationRight />
        </div>
        {GOVERNMENT.map((data) => (
          <div key={`gov-${data.name}`} className=' mt-[34px]'>
            <div>
              <div className='flex gap-[5px] justify-start'>
                {data.logo}
                <div className='wv-font-anuphan text-mobile-bold-b7 wv-font-bold'>
                  {data.name}
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-[5px] justify-start'>
                <div className='wv-font-anuphan text-mobile-regular-b7 leading-[15px]
             opacity-60'>เฉลี่ย</div>
                <div className='wv-font-anuphan text-mobile-bold-b7 leading-[15px]'>{getAvg(data)}</div>
                <div className='wv-font-anuphan text-mobile-regular-b7 leading-[15px]
             opacity-60'>โพสต์/วัน</div>
              </div>
            </div>
            <div className='w-full h-[62px]'>
              {getChart(data)}
            </div>
            <Legend />
          </div>
        ))}
      </div>
      <div className='border-[.5px] border-white border-dashed' />
      <div className="w-[128px] ml-auto">
        <div className="flex flex-row gap-x-[5px] opacity-60">
          <HeadDecorationLeft />
          <div className="flex-none wv-font-anuphan wv-font-bold text-mobile-bold-b6 ">
            ฝ่ายค้าน
          </div>
          <HeadDecorationRight />
        </div>
        {OPPOSITION.map((data) => (
          <div key={`opp-${data.name}`} className=' mt-[34px]'>
            <div>
              <div className='flex gap-[5px] justify-start'>
                {data.logo}
                <div className='wv-font-anuphan text-mobile-bold-b7 wv-font-bold'>
                  {data.name}
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-[5px] justify-start'>
                <div className='wv-font-anuphan text-mobile-regular-b7 leading-[15px]
             opacity-60'>เฉลี่ย</div>
                <div className='wv-font-anuphan text-mobile-bold-b7 leading-[15px]'>{getAvg(data)}</div>
                <div className='wv-font-anuphan text-mobile-regular-b7 leading-[15px]
             opacity-60'>โพสต์/วัน</div>
              </div>
            </div>
            <div className='w-full h-[62px]'>
              {getChart(data)}
            </div>
            <Legend />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChartAll

