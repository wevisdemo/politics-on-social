import dynamic from 'next/dynamic';
import { useState } from 'react';
import Spinner from '../utils/spinner';
const ChartAll = dynamic(() => import('./chart/chart-all'), { loading: () => <Spinner /> });
type Props = {}


const DROPDOWN_COLLECTION = [
  {
    item: < div className='flex gap-[5px] items-center justify-start' >
      <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={9} y={4} width={6} height={6} rx={3} fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM13.3729 5.84986C13.5614 5.87093 13.718 6.01218 13.7621 6.20364C13.8243 6.47407 13.8243 6.76906 13.8243 7.04776V7.05463C13.8243 7.33531 13.8241 7.6329 13.7613 7.90555C13.7173 8.09701 13.5606 8.23826 13.3722 8.25933C12.9259 8.3092 12.4741 8.30946 12.0242 8.3092C11.5743 8.30946 11.1225 8.3092 10.6761 8.25933C10.4876 8.23822 10.331 8.09697 10.287 7.90555C10.2243 7.63294 10.2243 7.33535 10.2243 7.05463C10.2243 6.77392 10.225 6.47629 10.2878 6.20364C10.3318 6.01218 10.4883 5.87093 10.6767 5.84986C11.1231 5.80003 11.5751 5.79977 12.0249 5.80003C12.4747 5.79977 12.9265 5.80003 13.3729 5.84986ZM11.5597 6.42285V7.61339L12.7042 7.01996L11.5597 6.42285Z" fill="#FF4747" />
        <rect x={5} y={4} width={6} height={6} rx={3} fill="white" />
        <path d="M10.119 4.88095C9.57143 4.33333 8.83333 4 8 4C7.16666 4 6.42857 4.33333 5.88095 4.88095C5.33333 5.42857 5 6.16667 5 7C5 8.54762 6.19047 9.83333 7.71428 9.97619C7.80952 9.97619 7.90476 10 8 10C8.21428 10 8.40476 9.97619 8.59524 9.92857C9.19047 9.80953 9.71429 9.52381 10.119 9.11905C10.6667 8.57143 11 7.83333 11 7C11 6.16667 10.6667 5.42857 10.119 4.88095ZM10.119 5.78571C10.0714 5.85714 10 5.92857 9.95238 6C9.88095 6.07143 9.80952 6.11905 9.73809 6.19048L9.71429 6.21428C9.71429 6.28571 9.71429 6.33333 9.71429 6.40476C9.71429 6.45238 9.71429 6.5 9.71429 6.54762C9.71429 6.61905 9.69048 6.66667 9.69048 6.73809C9.66667 6.85714 9.64286 6.97619 9.59524 7.07143C9.57143 7.14286 9.54762 7.21429 9.5 7.28571C9.45238 7.35714 9.42857 7.45238 9.38095 7.52381C9.33333 7.61905 9.2619 7.69048 9.21429 7.78572C9.16667 7.85714 9.11905 7.90476 9.04762 7.97619C8.97619 8.04762 8.90476 8.11905 8.83333 8.16667C8.78571 8.19047 8.7619 8.2381 8.71428 8.26191C8.61905 8.33333 8.52381 8.38095 8.42857 8.42857C8.35714 8.45238 8.28571 8.5 8.21429 8.52381C8.11905 8.57143 8 8.59524 7.88095 8.61905C7.80952 8.64286 7.73809 8.64286 7.66667 8.64286C7.61905 8.64286 7.57143 8.64286 7.5 8.64286C7.45238 8.64286 7.40476 8.64286 7.35714 8.64286C7.33333 8.64286 7.33333 8.64286 7.30952 8.64286C7.2619 8.64286 7.21428 8.64286 7.16666 8.61905C7.09524 8.61905 7 8.59524 6.92857 8.57143C6.83333 8.54762 6.7619 8.52381 6.66667 8.5C6.57143 8.47619 6.5 8.42857 6.42857 8.40476C6.35714 8.35714 6.28571 8.33333 6.21428 8.28571C6.21428 8.28571 6.21429 8.28571 6.23809 8.28571C6.2619 8.28571 6.2619 8.28571 6.28571 8.28571C6.30952 8.28571 6.35714 8.28571 6.38095 8.28571C6.40476 8.28571 6.42857 8.28571 6.45238 8.28571C6.47619 8.28571 6.5 8.28571 6.52381 8.28571C6.57143 8.28571 6.61905 8.28572 6.64286 8.26191C6.78571 8.2381 6.90476 8.21429 7.02381 8.14286C7.11905 8.09524 7.21429 8.04762 7.30952 7.97619C7.33333 7.95238 7.35714 7.95238 7.38095 7.92857C7.28571 7.92857 7.21429 7.90476 7.14286 7.88095C7.07143 7.85714 7 7.80952 6.92857 7.7619C6.85714 7.71429 6.80952 7.64286 6.7619 7.59524C6.71428 7.52381 6.64286 7.40476 6.64286 7.38095C6.71428 7.38095 6.7619 7.40476 6.83333 7.40476C6.90476 7.40476 7 7.38095 7.02381 7.38095C6.95238 7.35714 6.90476 7.33333 6.83333 7.30952C6.7619 7.26191 6.69048 7.21429 6.61905 7.16667C6.54762 7.09524 6.5 7.02381 6.47619 6.95238C6.45238 6.88095 6.42857 6.83333 6.40476 6.7619C6.38095 6.71429 6.38095 6.64286 6.38095 6.59524C6.38095 6.59524 6.38095 6.59524 6.38095 6.57143C6.45238 6.61905 6.54762 6.64286 6.64286 6.66667C6.66667 6.66667 6.71429 6.66667 6.7381 6.66667C6.71429 6.64286 6.69047 6.61905 6.64286 6.59524C6.57143 6.52381 6.5 6.45238 6.45238 6.35714C6.40476 6.26191 6.38095 6.14286 6.35714 6.02381C6.35714 6 6.35714 5.95238 6.35714 5.92857C6.35714 5.85714 6.38095 5.80952 6.40476 5.73809C6.42857 5.69048 6.45238 5.64286 6.47619 5.59524C6.52381 5.64286 6.54762 5.69048 6.59524 5.71429C6.64286 5.76191 6.69048 5.80952 6.7381 5.85714C6.80952 5.92857 6.88095 5.97619 6.95238 6.02381C7.04762 6.09524 7.16666 6.16667 7.28571 6.21428C7.35714 6.23809 7.42857 6.28572 7.5 6.30953C7.61905 6.35714 7.7381 6.38095 7.85714 6.40476C7.92857 6.40476 7.97619 6.42857 8.04762 6.42857C8.07143 6.42857 8.09524 6.42857 8.14286 6.42857C8.16667 6.42857 8.16667 6.42857 8.16667 6.40476C8.16667 6.35714 8.14286 6.30952 8.14286 6.2619C8.14286 6.21428 8.14286 6.16667 8.14286 6.14286C8.16667 6.04762 8.19047 5.95238 8.23809 5.85714C8.28571 5.78571 8.33333 5.71429 8.40476 5.64286C8.45238 5.59524 8.52381 5.54762 8.59524 5.52381C8.69047 5.47619 8.80952 5.45238 8.92857 5.45238C8.95238 5.45238 8.95238 5.45238 8.97619 5.45238C9.02381 5.45238 9.04762 5.45238 9.09524 5.45238C9.21429 5.47619 9.30952 5.52381 9.40476 5.57143C9.45238 5.59524 9.5 5.64286 9.52381 5.66667H9.54762C9.57143 5.66667 9.59524 5.64286 9.64286 5.64286C9.71429 5.61905 9.76191 5.59524 9.83333 5.57143C9.90476 5.54762 9.97619 5.5 10.0476 5.45238C10.0238 5.5 10 5.57143 9.97619 5.61905C9.95238 5.66667 9.90476 5.71429 9.88095 5.76191C9.85714 5.78571 9.80952 5.83333 9.78571 5.85714C9.7619 5.88095 9.7381 5.88095 9.71429 5.90476C9.7381 5.90476 9.7381 5.90476 9.76191 5.90476C9.85714 5.88095 9.92857 5.88095 10.0238 5.83333C10.0238 5.80953 10.0714 5.80952 10.119 5.78571Z" fill="#00D1FF" />
        <rect y={4} width={6} height={6} rx={3} fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M2.98789 10C4.63818 10 5.97578 8.65698 5.97578 7C5.97578 5.34302 4.63818 4 2.98789 4C1.3376 4 0 5.34302 0 7C0 8.65698 1.3376 10 2.98789 10ZM2.52024 7.6949C2.52034 7.76506 2.52044 7.83522 2.52044 7.90538V8.73942C2.52044 8.79016 2.52991 8.81077 2.58676 8.80919C2.79048 8.80602 2.99578 8.80602 3.1995 8.80919C3.25635 8.81077 3.27057 8.7965 3.27057 8.73783C3.2682 8.32522 3.26849 7.9135 3.26879 7.50133C3.26889 7.36388 3.26899 7.22638 3.26899 7.08878C3.26899 7.04571 3.26706 7.02701 3.27539 7.01911C3.28392 7.01101 3.30321 7.01426 3.34637 7.01426C3.46481 7.01267 3.58483 7.01267 3.70327 7.01426C3.73802 7.01426 3.75697 7.00633 3.76013 6.96669C3.77592 6.7891 3.79171 6.6131 3.81066 6.43709C3.8154 6.39111 3.80119 6.3816 3.75697 6.3816C3.6444 6.38398 3.53094 6.38368 3.41792 6.38338C3.38032 6.38328 3.34277 6.38318 3.30531 6.38318C3.30361 6.38318 3.30191 6.3832 3.30022 6.38321C3.27835 6.38342 3.25805 6.38362 3.25951 6.3483C3.26083 6.30403 3.26077 6.25976 3.26072 6.2156C3.26064 6.1538 3.26057 6.09221 3.26425 6.03117C3.27215 5.89957 3.35111 5.83138 3.48376 5.83138C3.58167 5.8298 3.68117 5.8298 3.78066 5.83138C3.81224 5.83138 3.82172 5.82187 3.82172 5.79016C3.82014 5.61415 3.82014 5.43656 3.82172 5.25897C3.82172 5.23043 3.81224 5.22092 3.78381 5.22092C3.72015 5.22141 3.65649 5.2213 3.59287 5.22118C3.44976 5.22093 3.30688 5.22068 3.16476 5.22726C2.9642 5.23678 2.79048 5.31289 2.66888 5.48096C2.57255 5.61257 2.52833 5.76479 2.52517 5.92811C2.52202 6.0613 2.52202 6.19449 2.52517 6.32769C2.52517 6.37525 2.5157 6.39428 2.46358 6.39111C2.4105 6.38825 2.35685 6.38883 2.30332 6.3894C2.26766 6.38978 2.23205 6.39016 2.1967 6.38952C2.16195 6.38952 2.15248 6.40062 2.15248 6.43392C2.15406 6.60834 2.15406 6.78434 2.15248 6.95876C2.1509 6.99523 2.16511 7.00633 2.19985 7.00475C2.23779 7.00407 2.27544 7.00426 2.31292 7.00446C2.36281 7.00471 2.41241 7.00497 2.46201 7.00316C2.50938 7.00157 2.52202 7.01585 2.52202 7.06341C2.51965 7.27391 2.51994 7.4844 2.52024 7.6949Z" fill="#2094FF" />
      </svg>
      <div>ทุกช่องทาง</div>
    </div >
  },
  {
    item: <div className='flex gap-[5px] items-center justify-start'>
      <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width={15} height={15} rx="7.5" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.46972 15C11.5954 15 14.9394 11.6424 14.9394 7.5C14.9394 3.35756 11.5954 0 7.46972 0C3.344 0 0 3.35756 0 7.5C0 11.6424 3.344 15 7.46972 15ZM6.3006 9.23724C6.30084 9.41264 6.30109 9.58805 6.30109 9.76345V11.8485C6.30109 11.9754 6.32478 12.0269 6.46691 12.023C6.97621 12.015 7.48946 12.015 7.99875 12.023C8.14089 12.0269 8.17642 11.9913 8.17642 11.8446C8.1705 10.8131 8.17124 9.78377 8.17198 8.75336C8.17222 8.40973 8.17247 8.06597 8.17247 7.72196C8.17247 7.61428 8.16765 7.56751 8.18847 7.54776C8.2098 7.52753 8.25803 7.53565 8.36592 7.53565C8.66203 7.53169 8.96208 7.53169 9.25818 7.53565C9.34504 7.53565 9.39242 7.51583 9.40032 7.41673C9.4398 6.97275 9.47928 6.53274 9.52665 6.09273C9.5385 5.97778 9.50296 5.95399 9.39242 5.95399C9.11099 5.95994 8.82735 5.95919 8.54481 5.95845C8.4508 5.9582 8.35692 5.95795 8.26328 5.95795C8.25902 5.95795 8.25477 5.958 8.25054 5.95804C8.19587 5.95856 8.14512 5.95905 8.14878 5.87075C8.15207 5.76007 8.15193 5.64939 8.1518 5.539C8.15161 5.38449 8.15141 5.23054 8.16063 5.07793C8.18037 4.74892 8.37777 4.57846 8.7094 4.57846C8.95418 4.5745 9.20291 4.5745 9.45164 4.57846C9.5306 4.57846 9.55429 4.55468 9.55429 4.4754C9.55034 4.03539 9.55034 3.59141 9.55429 3.14744C9.55429 3.07608 9.5306 3.0523 9.45954 3.0523C9.30038 3.05352 9.14122 3.05324 8.98218 3.05296C8.6244 3.05232 8.2672 3.05169 7.9119 3.06816C7.4105 3.09194 6.97621 3.28221 6.67221 3.7024C6.43138 4.03142 6.32083 4.41197 6.31293 4.82027C6.30504 5.15325 6.30504 5.48623 6.31293 5.81921C6.31293 5.93813 6.28925 5.9857 6.15896 5.97778C6.02626 5.97064 5.89214 5.97207 5.7583 5.9735C5.66915 5.97445 5.58013 5.9754 5.49174 5.97381C5.40488 5.97381 5.38119 6.00156 5.38119 6.0848C5.38514 6.52085 5.38514 6.96086 5.38119 7.39691C5.37725 7.48808 5.41278 7.51583 5.49964 7.51187C5.59448 7.51017 5.68861 7.51065 5.78231 7.51114C5.90704 7.51179 6.03102 7.51243 6.15501 7.5079C6.27345 7.50394 6.30504 7.53961 6.30504 7.65854C6.29912 8.18477 6.29986 8.711 6.3006 9.23724Z" fill="#2094FF" />
      </svg>
      <div>Facebook</div>
    </div>
  },
  {
    item: <div className='flex gap-[5px] items-center justify-start'>
      <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width={15} height={15} rx="7.5" fill="white" />
        <path d="M12.7976 2.20238C11.4286 0.833336 9.58333 0 7.5 0C5.41666 0 3.57143 0.833336 2.20238 2.20238C0.833332 3.57143 0 5.41667 0 7.5C0 11.369 2.97619 14.5833 6.78571 14.9405C7.02381 14.9405 7.2619 15 7.5 15C8.03571 15 8.5119 14.9405 8.98809 14.8214C10.4762 14.5238 11.7857 13.8095 12.7976 12.7976C14.1667 11.4286 15 9.58333 15 7.5C15 5.41667 14.1667 3.57143 12.7976 2.20238ZM12.7976 4.46428C12.6786 4.64285 12.5 4.82143 12.381 5C12.2024 5.17857 12.0238 5.29762 11.8452 5.47619L11.7857 5.53571C11.7857 5.71428 11.7857 5.83333 11.7857 6.0119C11.7857 6.13095 11.7857 6.25 11.7857 6.36905C11.7857 6.54762 11.7262 6.66666 11.7262 6.84523C11.6667 7.14285 11.6071 7.44048 11.4881 7.67857C11.4286 7.85714 11.369 8.03571 11.25 8.21428C11.1309 8.39286 11.0714 8.63095 10.9524 8.80952C10.8333 9.04762 10.6548 9.22619 10.5357 9.46429C10.4167 9.64286 10.2976 9.76191 10.119 9.94048C9.94048 10.1191 9.7619 10.2976 9.58333 10.4167C9.46428 10.4762 9.40476 10.5952 9.28571 10.6548C9.04761 10.8333 8.80952 10.9524 8.57143 11.0714C8.39285 11.131 8.21429 11.25 8.03572 11.3095C7.79762 11.4286 7.5 11.4881 7.20238 11.5476C7.0238 11.6071 6.84524 11.6071 6.66667 11.6071C6.54762 11.6071 6.42857 11.6071 6.25 11.6071C6.13095 11.6071 6.0119 11.6071 5.89285 11.6071C5.83333 11.6071 5.83333 11.6071 5.77381 11.6071C5.65476 11.6071 5.53571 11.6071 5.41666 11.5476C5.23809 11.5476 5 11.4881 4.82142 11.4286C4.58333 11.3691 4.40476 11.3095 4.16667 11.25C3.92857 11.1905 3.75 11.0714 3.57143 11.0119C3.39286 10.8929 3.21428 10.8333 3.03571 10.7143C3.03571 10.7143 3.03571 10.7143 3.09524 10.7143C3.15476 10.7143 3.15476 10.7143 3.21428 10.7143C3.27381 10.7143 3.39286 10.7143 3.45238 10.7143C3.51191 10.7143 3.57142 10.7143 3.63095 10.7143C3.69047 10.7143 3.75 10.7143 3.80952 10.7143C3.92857 10.7143 4.04762 10.7143 4.10714 10.6548C4.46428 10.5952 4.76191 10.5357 5.05952 10.3571C5.29762 10.2381 5.53571 10.1191 5.77381 9.94048C5.83333 9.88096 5.89286 9.88095 5.95238 9.82142C5.71429 9.82142 5.53571 9.7619 5.35714 9.70238C5.17857 9.64286 5 9.52381 4.82142 9.40476C4.64285 9.28571 4.52381 9.10714 4.40476 8.9881C4.28571 8.80952 4.10714 8.51191 4.10714 8.45238C4.28571 8.45238 4.40476 8.5119 4.58333 8.5119C4.7619 8.5119 5 8.45238 5.05952 8.45238C4.88095 8.39286 4.7619 8.33333 4.58333 8.27381C4.40476 8.15476 4.22619 8.03571 4.04762 7.91666C3.86905 7.73809 3.75 7.55953 3.69047 7.38095C3.63095 7.20238 3.57143 7.08333 3.5119 6.90476C3.45238 6.78571 3.45238 6.60714 3.45238 6.4881C3.45238 6.4881 3.45238 6.48809 3.45238 6.42857C3.63095 6.54762 3.86904 6.60715 4.10714 6.66667C4.16666 6.66667 4.28572 6.66667 4.34524 6.66667C4.28572 6.60715 4.22619 6.54762 4.10714 6.4881C3.92857 6.30953 3.74999 6.13095 3.63095 5.89286C3.5119 5.65476 3.45238 5.35714 3.39286 5.05952C3.39286 5 3.39286 4.88095 3.39286 4.82143C3.39286 4.64286 3.45238 4.52381 3.5119 4.34524C3.57143 4.22619 3.63095 4.10715 3.69047 3.9881C3.80952 4.10715 3.86905 4.22619 3.98809 4.28572C4.10714 4.40477 4.22619 4.52381 4.34524 4.64285C4.52381 4.82143 4.70238 4.94047 4.88095 5.05952C5.11905 5.23809 5.41666 5.41666 5.71428 5.53571C5.89285 5.59524 6.07143 5.71429 6.25 5.77381C6.54762 5.89286 6.84524 5.95238 7.14286 6.0119C7.32143 6.0119 7.44048 6.07143 7.61905 6.07143C7.67857 6.07143 7.73809 6.07143 7.85714 6.07143C7.91667 6.07143 7.91667 6.07143 7.91667 6.0119C7.91667 5.89286 7.85714 5.77381 7.85714 5.65476C7.85714 5.53571 7.85714 5.41666 7.85714 5.35714C7.91667 5.11904 7.97619 4.88095 8.09523 4.64285C8.21428 4.46428 8.33334 4.28572 8.51191 4.10714C8.63095 3.9881 8.80952 3.86905 8.98809 3.80953C9.22619 3.69048 9.52381 3.63095 9.82143 3.63095C9.88095 3.63095 9.88095 3.63095 9.94048 3.63095C10.0595 3.63095 10.119 3.63095 10.2381 3.63095C10.5357 3.69048 10.7738 3.80952 11.0119 3.92857C11.131 3.98809 11.25 4.10714 11.3095 4.16666H11.369C11.4286 4.16666 11.4881 4.10714 11.6071 4.10714C11.7857 4.04762 11.9048 3.98809 12.0833 3.92857C12.2619 3.86905 12.4405 3.75 12.619 3.63095C12.5595 3.75 12.5 3.92857 12.4405 4.04762C12.3809 4.16666 12.2619 4.28572 12.2024 4.40476C12.1429 4.46429 12.0238 4.58333 11.9643 4.64285C11.9048 4.70238 11.8452 4.70238 11.7857 4.7619C11.8452 4.7619 11.8452 4.7619 11.9048 4.7619C12.1429 4.70238 12.3214 4.70238 12.5595 4.58334C12.5595 4.52381 12.6786 4.52381 12.7976 4.46428Z" fill="#00D1FF" />
      </svg>
      <div>Twitter</div>
    </div>
  },
  {
    item: <div className='flex gap-[5px] items-center justify-start'>
      <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width={15} height={15} rx="7.5" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5ZM10.9323 4.62466C11.4036 4.67734 11.7951 5.03046 11.9053 5.5091C12.0608 6.18517 12.0608 6.92266 12.0608 7.6194V7.63658C12.0608 8.33828 12.0602 9.08225 11.9033 9.76388C11.7931 10.2425 11.4015 10.5956 10.9305 10.6483C9.81467 10.773 8.68525 10.7736 7.56047 10.773C6.43587 10.7736 5.30617 10.773 4.19022 10.6483C3.71892 10.5955 3.32761 10.2424 3.21761 9.76388C3.06079 9.08234 3.06079 8.33837 3.06079 7.63658C3.06079 6.93479 3.06256 6.19073 3.21938 5.5091C3.32956 5.03046 3.72078 4.67734 4.19179 4.62466C5.30784 4.50008 6.43764 4.49943 7.56223 4.50008C8.68664 4.49943 9.81625 4.50008 10.9323 4.62466ZM6.39936 6.05713V9.03347C6.80142 8.82499 7.202 8.6173 7.60239 8.40972C8.15437 8.12354 8.70598 7.83755 9.2606 7.5499L6.39936 6.05713Z" fill="#FF4747" />
      </svg>
      <div>Youtube</div>
    </div>
  },
]




const PostSummary = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div>
      <div className='flex flex-col items-center justify-center
       tablet:flex-row tablet:gap-x-[7px]'>
        <div className='wv-font-anuphan wv-font-bold
       wv-b4 leading-[24px] mb-[3px]
       wv-b4 tablet:leading-[27px]'>
          จำนวนโพสต์ในแต่ละวันจาก
        </div>
        <div >
          <div className="relative inline-block text-left border-[1px] border-white w-[200px] mx-auto p-[10px]
         wv-font-anuphan wv-font-bold text-desktop-bold-b6 leading-[21px]">
            <div>
              <button type="button"
                className="inline-flex w-full justify-between items-center"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                {DROPDOWN_COLLECTION[selectedItem].item}
                <svg width={12} height={9} viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L0.803847 -9.78799e-07L11.1962 -7.02746e-08L6 9Z" fill="white" />
                </svg>
              </button>
            </div>
            <div className={`absolute right-0 left-0 z-20 w-full h-auto mt-3  bg-white text-black
          flex flex-col justify-start
          ${openDropdown ? 'show' : 'hidden'}`} >
              {DROPDOWN_COLLECTION.map((data, index) => (
                <button key={`dropdown-item-${index}`}
                  className='p-[10px]'
                  onClick={() => { setSelectedItem(index); setOpenDropdown(false) }}>
                  {data.item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[34px] px-[17px]
      tablet:mt-[45px]'>
        {selectedItem === 0 && <ChartAll type="all" />}
        {selectedItem === 1 && <ChartAll type="facebook" />}
        {selectedItem === 2 && <ChartAll type="twitter" />}
        {selectedItem === 3 && <ChartAll type="youtube" />}
      </div>
    </div >
  )
}

export default PostSummary