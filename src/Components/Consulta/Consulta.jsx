import React, { useRef, useState } from 'react';
import './Consulta.css';
import Spiral from '../../Components/Spiral/Spiral'
export default function Consulta() {
    const dataForm = useRef();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleFormSubmit(e) {
        e.preventDefault();



        try {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setSuccessMessage('¡Formulario enviado con éxito!');
                setTimeout(() => {

                    setSuccessMessage(false);


                }, 2000)
                dataForm.current.reset();
            }, 2000)


        } catch (error) {

            setErrorMessage(errorMessage);
        }
    }

    return (
        <div>
            <form action="" className="Formulario" onSubmit={handleFormSubmit} ref={dataForm}>
                <label htmlFor="">Contactá al anunciante</label>

                <div className="deFlexInputs">
                    <input className="inputt" type="text" placeholder="Nombre" name="name" id="name" style={{ color: 'white' }} required />

                    <input className="inputt" type="number" placeholder="Telefono" name="telefono" id="telefono" style={{ color: 'white' }} required />
                </div>
                <input className="inputt" type="email" placeholder="Email" name="email" id="email" style={{ color: 'white' }} required />
                <textarea placeholder="Consulta" name="question" id="question" style={{ color: 'white' }} required></textarea>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="submit">
                    {loading ? (
                        <div className='enviar'>
                            <Spiral />
                        </div>
                    ) : (
                        <input type="submit" value="Contactar"></input>
                    )}
                </div>

                <button className='wpp-btn'>
                    Contactar por WhatsApp
                </button>
            </form>


        </div>
    );
}
