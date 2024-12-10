import { React, useEffect } from 'react'
import InputSearchHome from '../InputSearchHome/InputSearchHome'
export default function Hero() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='h-100'>

            <h1 className='font-bold flex justify-center items-center '>Encuentra tu próximo hogar</h1>
            <InputSearchHome />

        </div>
    )
}
