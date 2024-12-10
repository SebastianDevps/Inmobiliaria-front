import React from 'react'
import './TilteSection.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
export default function TilteSection({ title, more, link }) {
    return (
        <div className='titleSection'>

            <h2>  {title}</h2>

            <Anchor to={`/${link}`} >
                {more}
            </Anchor>
        </div>
    )
}
