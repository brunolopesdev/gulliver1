import styles from './styles.module.scss'
import { FaLocationDot, FaCar, FaWifi } from "react-icons/fa6";
import { LuCigaretteOff } from "react-icons/lu";
import { MdOutlinePool, MdAir } from "react-icons/md";
import { CgGym } from "react-icons/cg";

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useCallback, useEffect, useState } from 'react';
import { Map } from '../Map';

export const Hotel = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAZskCuCGtT5BovaxJIeJvPHMcN7CC_uOc"
    })

    const [map, setMap] = useState(null)
    const [isMobile, setIsMobile] = useState(null)
    const [containerStyle, setContainerStyle] = useState({
        width: '1180px',
        height: '400px'
    })

    const center = {
        lat: -23.571046829223633,
        lng: -46.65774917602539
    };

    const markerPosition = {
        lat: -23.571046829223631,
        lng: -46.65774917602538
    };

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
            setContainerStyle({
                width: '100%',
                height: '400px'
            })
        } else {
            setIsMobile(false)
        }
    }, [isMobile])

    return (
        <section className={styles.hotelContainer}>
            <div>
                <h1 className={styles.hotelName}>Quality Hotel Paulista
                    <br />
                    <span className={styles.topLocation}><FaLocationDot /> Alameda Lorena 360 Jardins, São Paulo, Estado de São Paulo 01424-000 Brasil</span>
                </h1>
            </div>
            <div className={styles.hotelImages}>
                <img src="https://s3-alpha-sig.figma.com/img/88a5/13d1/3f6b6c4ff1e14c0da4d4f49879e824e2?Expires=1701648000&Signature=G3-YJ9cnqr7js~0gkjx0BLdOsTYb~LcrLqotBdXfsZ9nv~kXuJAl7kMZ09MJGvgLMw9d7oM2fYnAldobYA389O4UGNK3s3OmzNTvsSQpzxp9LNh8H8fyjDi~gZc3TWEGFnlO2BIsVtxSau5B9pGg8L2BjzduxsebLbna8mZWa63DmKnlsuOVrukt-wqT6yIAmUuN07NoBp4CtsakWibNL1Rw1XNuVvaeKZUgcm6hb~90GoHxXClBXwdkCQ4-tENzmis765heW~p4ALuXVHLK-k-jC~-Snz7RdVaXtbgJCU2ds2xcYg06GS6UsgxfIfBv3ExmXesBJiAfVIESUZl0oA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Imagem de uma piscina do Quality Hotel Paulista" />
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/7a/2d/c0/spacious-breakfast-area.jpg?w=1100&h=-1&s=1" alt="Imagem de uma mesa de café da manhã no Quality Hotel Paulista" />
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/94/bf/16/golden-tulip-park-plaza.jpg?w=1200&h=-1&s=1" alt="Imagem da área externa do quality hotel paulista, contendo uma piscina e vegetação" />
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/94/bf/1b/golden-tulip-park-plaza.jpg?w=1000&h=-1&s=1" alt="Imagem da área interna do quality hotel, bem iluminada e com cadeiras para descanso." />
            </div>

            <h2 className={styles.hotelDescription}>
                O <strong>Quality Hotel Paulista</strong>, oferece toda a elegância dos Jardins, próximo do Parque Ibirapuera e do Shopping Pátio Paulista. Os serviços oferecidos são de ótima qualidade. Há um lounge bar, restaurante, 2 piscinas (adulto e criança), sala de eventos, health club, além do heliporto.
            </h2>

            <div className={styles.hotelInfo}>
                <p>INSTALAÇÕES</p>

                <div className={styles.infoText}>
                    <p><FaCar />Estacionamento disponível</p>
                    <p><FaWifi />Wi-Fi Grátis</p>
                    <p><LuCigaretteOff />Para não fumantes</p>
                    <p><MdOutlinePool />Piscina</p>
                    <p><CgGym />Academia</p>
                    <p><MdAir />Ar-condicionado</p>
                </div>
            </div>

            <div className={styles.hotelLocation}>
                <p>Localização</p>

                <Wrapper apiKey={"AIzaSyAZskCuCGtT5BovaxJIeJvPHMcN7CC_uOc"} >
                    <Map center={center} zoom={20} style={containerStyle}/>
                </Wrapper>

                <div className={styles.aditionalLocationInfo}>
                    <p>1 quadra da Avenida Paulista</p>
                    <p>10km do aeroporto de congonhas</p>
                    <p>2 quadras da Estação do Metrô</p>
                    <p>25km do aeroporto de Guarulhos</p>
                </div>
            </div>

            <div className={styles.hotelRoomOptions}>
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/bce9/aabb/b1e5bd1332d7bd7b824103f75cbe5a1e?Expires=1701648000&Signature=NMp5U6MT5Ht5KQCkYexn4oSS24Nt71WKUPG3~oKNt6-lzj7H13XZZ0~WJziBIZJDCXQL8DgZfHVFY3ouVpVNK40uT5FaeXDwWV15iHFWxQxf~TnmHzr66F-C4sktBWd8dr1q8R0zSkujD27V0LZy~iIRxGtu0opg~6-4YtVtH4Vh1Hfrb2KdbQu5xquxr67-717p~IjLCOQgLmNvG2gOS2zb-MVX0muvJvv0eoGF84aBY412lI7rM8ZFJt2MMt7RhuS7e6OMwdrJ-eop-zHit~iaEuWtVcbb00XIzpxUltIeW2mhIVsHQtePOKCGTrDSofUbUwI8aK7leZNhCvXEmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Imagem de um dos quartos do hotel, contendo uma cama, uma mesa e um sofá." />
                </div>
                <div className={styles.options}>
                    <p>Quarto individual</p>
                    <ul >
                        <li>Cama de Casal</li>
                        <li>Banheiro</li>
                        <li>Frigobar</li>
                        <li>Armário e Cofre</li>
                    </ul>

                    <p className={styles.price}>R$580,00</p>
                </div>
            </div>

            <div className={styles.hotelReviews}>
                <h3>Avaliações</h3>

                <p>nenhuma avalição no momento...</p>

                <button>Avaliar Hotel</button>
            </div>

        </section>
    )
}