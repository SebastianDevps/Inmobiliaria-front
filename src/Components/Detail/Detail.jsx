import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { inmobiliario } from "../dataInmobiliarios";
import './Detail.css'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; // Importa los estilos de react-responsive-modal
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import Consulta from '../Consulta/Consulta'
import Comentarios from "../Comentarios/Comentarios";
export default function Detail() {
    const { id } = useParams();
    const [inmo, setInmo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    useEffect(() => {
        const inmueble = inmobiliario.find((e) => e.id === parseInt(id));
        setInmo(inmueble);
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!inmo) {
        return <div>Cargando...</div>;
    }

    function handleFavoritoClick() {
        // Lógica para manejar el clic en el icono de favorito
        console.log('Icono de favorito clicado');
    }

    function handleCompartirClick() {
        // Lógica para manejar el clic en el icono de compartir
        console.log('Icono de compartir clicado');
    }


    return (
        <div className="detail-contain">

            <div >

                <div className="deFlex">
                    <h2 className="title">{inmo.titulo}</h2>
                    <div className="deFlexBtn">
                        <button>Favorito  <FontAwesomeIcon icon={faHeart} onClick={handleFavoritoClick} /> </button>
                        <button>Compartir <FontAwesomeIcon icon={faShare} onClick={handleCompartirClick} /> </button>

                    </div>
                </div>


                <div className="imgDetail">
                    <img
                        src={inmo.img}
                        alt={inmo.titulo}
                        className="img"
                        onClick={() => {
                            setModalImage(inmo.img);
                            setIsModalOpen(true);
                        }}
                    />
                    <div className="imgGrid">
                        <img
                            src={inmo.img2}
                            alt={inmo.titulo}
                            onClick={() => {
                                setModalImage(inmo.img2);
                                setIsModalOpen(true);
                            }}
                        />
                        <img
                            src={inmo.img3}
                            alt={inmo.titulo}
                            onClick={() => {
                                setModalImage(inmo.img3);
                                setIsModalOpen(true);
                            }}
                        />
                        <img
                            src={inmo.img4}
                            alt={inmo.titulo}
                            onClick={() => {
                                setModalImage(inmo.img4);
                                setIsModalOpen(true);
                            }}
                        />
                        <img
                            src={inmo.img5}
                            alt={inmo.titulo}
                            onClick={() => {
                                setModalImage(inmo.img5);
                                setIsModalOpen(true);
                            }}
                        />
                    </div>
                </div>
                <hr />
                <p><FontAwesomeIcon icon={faMapMarker} /> {inmo.ubicacion}</p>
                <p className="price">USD {inmo.precio}</p>
                <div className="deFlex">
                    <div className="deColumn">


                        <div className="iframe" dangerouslySetInnerHTML={{ __html: inmo.mapa }} />

                        <p>{inmo.descripcion}</p>
                        <hr />
                        <h3 className="titlecoment">Deja un Comentario</h3>
                        <Comentarios />
                    </div>
                    <Consulta />
                </div>

            </div>


            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                center
                classNames={{
                    modal: 'custom-modal',
                }}
            >
                <img src={modalImage} alt={inmo.titulo} />
            </Modal>
        </div>
    );
}
