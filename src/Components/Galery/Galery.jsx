import React from 'react'
import img from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import './Galery.css'
import { Link as Anchor } from 'react-router-dom';
export default function Galery() {

    const imgs = [
        img, img2, img3, img4, img5, img6, img7
    ]
    return (
        <div className='galeryContain'>

            {

                imgs.map((item) => (

                    <Anchor to={`/propiedades`}>
                        <img src={item} alt="" />
                    </Anchor>
                ))
            }

        </div>
    )
}
