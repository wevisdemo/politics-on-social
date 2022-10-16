import React from 'react'
import { GOVERNMENT, OPPOSITION } from './chart-data'

type Props = {}

const Legend = () => {
  return (
    <div className='flex flex-row items-center text-center divide-x 
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
    <div className='flex flex-row
    divide-x divide-dashed'>
      <div className='pr-[15px]'>
        <div className='flex flex-row items-center justify-between opacity-60'>
          <svg className='w-[28px] h-[6px]' viewBox="0 0 34 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H34V2.5H3V3.5Z" fill="white" />
          </svg>
          <div className='wv-font-anuphan wv-font-bold text-desktop-bold-b6'>ฝ่ายรัฐบาล</div>
          <svg className='w-[28px] h-[6px]' viewBox="0 0 34 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3333 3C28.3333 4.47276 29.5272 5.66667 31 5.66667C32.4728 5.66667 33.6667 4.47276 33.6667 3C33.6667 1.52724 32.4728 0.333333 31 0.333333C29.5272 0.333333 28.3333 1.52724 28.3333 3ZM0 3.5H31V2.5H0V3.5Z" fill="white" />
          </svg>
        </div>
        {GOVERNMENT.map((data) => (
          <div key={`gov-${data.name}`} className='text-mobile-bold-b7 mt-[34px]'>
            <div>
              <div className='flex gap-[5px] justify-start'>
                {data.logo}
                <div className='wv-font-anuphan wv-font-bold'>
                  {data.name}
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-[5px] justify-start'>
                <div>{getAvg(data)}</div>
                <div className='wv-font-anuphan
             opacity-60'>โพสต์/วัน</div>
              </div>
            </div>
            <div className='w-[128px] h-[62px]'>
              {getChart(data)}
            </div>
            <Legend />
          </div>
        ))}
      </div>
      <div className='pl-[15px]'>
        <div className='flex flex-row items-center justify-between opacity-60'>
          <svg width={34} height={6} viewBox="0 0 34 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H34V2.5H3V3.5Z" fill="white" />
          </svg>
          <div className='wv-font-anuphan wv-font-bold text-desktop-bold-b6'>ฝ่ายค้าน</div>
          <svg width={34} height={6} viewBox="0 0 34 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3333 3C28.3333 4.47276 29.5272 5.66667 31 5.66667C32.4728 5.66667 33.6667 4.47276 33.6667 3C33.6667 1.52724 32.4728 0.333333 31 0.333333C29.5272 0.333333 28.3333 1.52724 28.3333 3ZM0 3.5H31V2.5H0V3.5Z" fill="white" />
          </svg>
        </div>
        {OPPOSITION.map((data) => (
          <div key={`opp-${data.name}`} className='text-mobile-bold-b7 mt-[34px]'>
            <div>
              <div className='flex gap-[5px] justify-start'>
                {data.logo}
                <div className='wv-font-anuphan wv-font-bold'>
                  {data.name}
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-[5px] justify-start'>
                <div>{getAvg(data)}</div>
                <div className='wv-font-anuphan
             opacity-60'>โพสต์/วัน</div>
              </div>
            </div>
            <div className='w-[128px] h-[62px]'>
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

