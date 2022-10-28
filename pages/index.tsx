
import type { NextPage } from 'next';
import Head from 'next/head';

import dynamic from 'next/dynamic';

const Intro = dynamic(() => import('../components/intro'));
const PartNav = dynamic(() => import('../components/part-nav'));
const Part1 = dynamic(() => import('../components/part-1'));
const Part2 = dynamic(() => import('../components/part-2'));
const Part3 = dynamic(() => import('../components/part-3'));
const Outro = dynamic(() => import('../components/outro'));


const Home: NextPage = () => {
  return (
    <div className='bg-black-1 text-white'>
      <Head>
        <title>Wevis | Politics on Social</title>
        <link rel="icon" href="/design_assets/sns/favicon.png" />
        <meta property="og:url" content={`${process.env.SECURE_HOST}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ส่องเพจพรรค" />
        <meta property="og:description" content="ร่วมรู้จักตัวตนของพรรคการเมืองผ่านช่องทางในโลกออนไลน์จากประเด็นน่าสนใจ" />
        <meta property="og:image" content={`${process.env.SECURE_HOST}/sns/og.jpg`} />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${process.env.SECURE_HOST}`} />
        <meta name="twitter:title" content="ส่องเพจพรรค" />
        <meta name="twitter:description" content="ร่วมรู้จักตัวตนของพรรคการเมืองผ่านช่องทางในโลกออนไลน์จากประเด็นน่าสนใจ" />
        <meta name="twitter:image" content={`${process.env.SECURE_HOST}/sns/og.jpg`} />
      </Head>
      <Intro />
      <PartNav />
      <Part1 />
      <Part2 />
      <Part3 />
      <Outro />
    </div >
  )
}

export default Home


// const GOVERNMENT = [
//   {
//     party: "พลังประชารัฐ",
//     content: "",
//   },
//   {
//     party: "ภูมิใจไทย",
//     content: "",
//   },
//   {
//     party: "ประชาธิปัตย์",
//     content: "",
//   },
// ]
// const OPPOSITION = [
//   {
//     party: "เพื่อไทย",
//     content: "",
//   },
//   {
//     party: "อนาคตใหม่/ก้าวไกล",
//     content: "",
//   },
//   {
//     party: "เสรีรวมไทย",
//     content: "",
//   },
// ]