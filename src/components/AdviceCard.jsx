import React, { useEffect, useState } from 'react'
import dividerDesktop from '../images/pattern-divider-desktop.svg'
import dividerMobile from '../images/pattern-divider-mobile.svg'
import dice from '../images/icon-dice.svg'
import axios from 'axios'
const AdviceCard = () => {

  const [advice, setAdvice] = useState("");
  const baseURL="https://api.adviceslip.com/advice";  
  const getAdvice = async() => {
    const response = await axios.get(baseURL);
    const advice = await response.data.slip;
    setAdvice(advice);
  }

  useEffect(() => {
    getAdvice();
   }, []);

  return (
    <div className='bg-dark flex flex-col w-[540px] max-sm:w-[90%] font-manrope pt-8 pb-16 pl-8 pr-8 mx-auto rounded-lg relative items-center justify-center'>
        <p className='font-manrope text-neongreen tracking-[3.5px] mb-4 text-md'>ADVICE #{advice.id}</p>
        <h2 className='text-lightcyan text-3xl max-sm:text-xl mb-8'>{advice.advice}</h2>
        <img src={dividerDesktop} className='divider-desktop block max-sm:hidden' alt="divider" />
        <img src={dividerMobile} className='divider-mobile hidden max-sm:block' alt="divider" />
        <div onClick={getAdvice} className='dice bg-neongreen w-[64px] h-[64px] rounded-full flex flex-col justify-center items-center cursor-pointer absolute bottom-[-2rem] hover:shadow-diceShadow transition duration-300'>
            <img src={dice} alt="" />
        </div>
    </div>
  )
}

export default AdviceCard