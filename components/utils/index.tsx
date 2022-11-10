export const scrollInToView = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export const HeadDecorationLeft = () => {
  return (
    <div className="w-full flex flex-row items-center">
      <div className="w-[4px] h-[4px] rounded-full bg-white" />
      <div className="flex-grow w-auto h-[1px] bg-white" />
    </div>
  )
}

export const HeadDecorationRight = () => {
  return (
    <div className="w-full flex flex-row items-center">
      <div className="flex-grow w-auto h-[1px] bg-white" />
      <div className="w-[4px] h-[4px] rounded-full bg-white" />
    </div>
  )
}

import Image from 'next/image'

export const getLogo = (party: string) => {
  switch (party) {
    case "พลังประชารัฐ": return <div className='w-[30px] h-[30px] relative' ><Image src="/design_assets/party_logo/พลังประชารัฐ.png" alt="พลังประชารัฐ" objectFit='cover' layout='fill' /></div>;
    case "ภูมิใจไทย": return <div className='w-[30px] h-[30px] relative' ><Image src="/design_assets/party_logo/ภูมิใจไทย.png" alt="ภูมิใจไทย" objectFit='cover' layout='fill' /></div>;
    case "ประชาธิปัตย์": return <div className='w-[30px] h-[30px] relative' ><Image src="/design_assets/party_logo/ประชาธิปัตย์.png" alt="ประชาธิปัตย์" objectFit='cover' layout='fill' /></div>;
    case "เพื่อไทย": return <div className='w-[30px] h-[30px] relative' ><Image src="/design_assets/party_logo/เพื่อไทย.png" alt="เพื่อไทย" objectFit='cover' layout='fill' /></div>;
    case "อนาคตใหม่/ก้าวไกล": return <div className='w-[30px] h-[30px] relative' ><Image src="/design_assets/party_logo/ก้าวไกล.png" alt="ก้าวไกล" objectFit='cover' layout='fill' /></div>;
    case "เสรีรวมไทย": return <div className='w-[30px] h-[30px] relative' ><Image src="/design_assets/party_logo/เสรีรวมไทย.png" alt="เสรีรวมไทย" objectFit='cover' layout='fill' /></div>;
    default:
      break;
  }
}

export const getLogoSmall = (party: string) => {
  switch (party) {
    case "พลังประชารัฐ": return <div className='w-[20px] h-[20px] relative' ><Image src="/design_assets/party_logo/พลังประชารัฐ.png" alt="พลังประชารัฐ" objectFit='cover' layout='fill' /></div>;
    case "ภูมิใจไทย": return <div className='w-[20px] h-[20px] relative' ><Image src="/design_assets/party_logo/ภูมิใจไทย.png" alt="ภูมิใจไทย" objectFit='cover' layout='fill' /></div>;
    case "ประชาธิปัตย์": return <div className='w-[20px] h-[20px] relative' ><Image src="/design_assets/party_logo/ประชาธิปัตย์.png" alt="ประชาธิปัตย์" objectFit='cover' layout='fill' /></div>;
    case "เพื่อไทย": return <div className='w-[20px] h-[20px] relative' ><Image src="/design_assets/party_logo/เพื่อไทย.png" alt="เพื่อไทย" objectFit='cover' layout='fill' /></div>;
    case "อนาคตใหม่/ก้าวไกล": return <div className='w-[20px] h-[20px] relative' ><Image src="/design_assets/party_logo/ก้าวไกล.png" alt="ก้าวไกล" objectFit='cover' layout='fill' /></div>;
    case "เสรีรวมไทย": return <div className='w-[20px] h-[20px] relative' ><Image src="/design_assets/party_logo/เสรีรวมไทย.png" alt="เสรีรวมไทย" objectFit='cover' layout='fill' /></div>;
    default:
      break;
  }
}