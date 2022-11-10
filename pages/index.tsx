
import type { NextPage } from 'next';
import Head from 'next/head';

import dynamic from 'next/dynamic';

import WvNavbar from '@wevisdemo/ui/components/navbar';
import WvNavButton from '@wevisdemo/ui/components/nav-button'
import WvFooter from '@wevisdemo/ui/components/footer';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import Spinner from '../components/utils/spinner';

const Intro = dynamic(() => import('../components/intro'), { loading: () => <Spinner /> });
const PartNav = dynamic(() => import('../components/part-nav'), { loading: () => <Spinner /> });
const Part1 = dynamic(() => import('../components/part-1'), { loading: () => <Spinner /> });
const Part2 = dynamic(() => import('../components/part-2'), { loading: () => <Spinner /> });
const Part3 = dynamic(() => import('../components/part-3'), { loading: () => <Spinner /> });
const Outro = dynamic(() => import('../components/outro'), { loading: () => <Spinner /> });


const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div className='bg-black-1 text-white'>
      <Head>
        <title>Wevis | Politics on Social</title>
        <link rel="icon" href="/design_assets/sns/favicon.png" />
        <meta property="og:url" content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ส่องเพจพรรค" />
        <meta property="og:description" content="ร่วมรู้จักตัวตนของพรรคการเมืองผ่านช่องทางในโลกออนไลน์จากประเด็นน่าสนใจ" />
        <meta property="og:image" content={`${process.env.SECURE_HOST}/design_assets/sns/og.jpg`} />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`} />
        <meta name="twitter:title" content="ส่องเพจพรรค" />
        <meta name="twitter:description" content="ร่วมรู้จักตัวตนของพรรคการเมืองผ่านช่องทางในโลกออนไลน์จากประเด็นน่าสนใจ" />
        <meta name="twitter:image" content={`${process.env.SECURE_HOST}/design_assets/sns/og.jpg`} />
      </Head>
      <WvNavbar title="POLITICS ON SOCIAL" dark={true} >
        <WvNavButton dark={true} active={router?.asPath === '/'} onClick={() => router.replace('/')}>Home</WvNavButton>
        <WvNavButton dark={true} active={router?.asPath === '/about'} onClick={() => router.replace('/about')}>About</WvNavButton>
      </WvNavbar>
      <Intro />
      <PartNav />
      <Part1 />
      <Part2 />
      <Part3 />
      <Outro />
      <WvFooter />
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