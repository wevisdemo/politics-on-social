
import type { NextPage } from 'next';
import Head from 'next/head';

import WvSharer from '@wevisdemo/ui/components/sharer';

import Intro from '../components/intro';
import PartNav from '../components/part-nav';
import Part1 from '../components/part-1';
import Part2 from '../components/part-2';
import Part3 from '../components/part-3';

const Home: NextPage = () => {
  return (
    <div className='bg-black-1 text-white'>
      <Head>
        <title>Wevis | Politics on Social</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <PartNav />
      <Part1 />
      <Part2 />
      <Part3 />
      <div className='flex justify-center my-[35px]'>
        <WvSharer center="true" url="https://wevis.info" light={true} />
      </div>
    </div>
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