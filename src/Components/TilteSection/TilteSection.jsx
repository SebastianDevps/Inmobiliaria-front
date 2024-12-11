import React from 'react'
import { Link as Anchor } from "react-router-dom";
export default function TilteSection({ title, more, link }) {
    return (
        <div className='py-[10px] px-[3%] flex justify-between items-center mt-[2rem] gap-[1rem]'>

            <h2 className='lg:text-[20px] text-[var(--text-color)] font-semibold'> {title}</h2>

            <Anchor to={`/${link}`} className='hidden lg:block text-[var(--color1)]' >
                {more}
            </Anchor>
        </div>
    )
}
