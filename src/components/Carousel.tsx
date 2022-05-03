import { useContext, useEffect, useState } from "react"
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CaravanContext } from "../helpers/caravanContext"

import styled from "styled-components"

const Carousel = () => {
    const [display, setDisplay] = useState<"grid" | "none">("none")
    const [setup, setSetup] = useState<string[]>([])
    const context = useContext(CaravanContext)

    useEffect(() => {
        if (context?.showCarousel === true) setDisplay("grid")
        if (context?.showCarousel === false) setDisplay("none")
    }, [context?.showCarousel])

    useEffect(() => {
        if (context?.carouselSetup !== undefined) setSetup(context.carouselSetup)
    }, [context?.carouselSetup])
    return (
        <Wrapper style={{ display: display }}>
            <div
                className="cross"
                onClick={() => context?.fn.setShowCarousel(false)}
            >
                <div></div>
                <div></div>
            </div>
            <Swiper
                className="swiper"
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {setup.map((url: string, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={url} alt="test" />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    top:0px;
    left:0px;
    position: fixed;
    width:100vw;
    height:100vh;
    background-color: rgba(53, 53, 53, 0.64);

    z-index: 1000;

    display:grid;
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 100px 1fr 100px;
    grid-template-areas: 
    ". . ."
    ". carousel ."
    ". . ."
    ;

    .cross{
        position:absolute;
        right:20px;
        top:10px;
        width:30px;
        height:30px;
        background: transparent;
        cursor:pointer;

        div{
            position:absolute;
            width: 35px;
            height: 5px;
            border-radius: 8px;
            background: ${props => props.theme.colors.darkBlue};
            left: 50%;
            top:50%;
            
            &:first-child{
                transform: translate(-50%,-50%) rotate(45deg);
            }
            &:last-child{
                transform: translate(-50%,-50%) rotate(-45deg);
            }
        }
        
    }
    .swiper{
        grid-area:carousel;
        width: 100%;
        height: 100%;
        .swiper-slide{
          
            img{
                height:100%;
                width:100%;
                object-fit:cover;
            }
        }
    }
`;
const BeadWrapper = styled.section`
    grid-area: bead;
    display:flex;
    justify-content: center;
    align-items: center;

    .bead{
        width: 20px;
        height:20px;
        background: #00000069;
        border-radius: 50%;
        margin: 0 3px;
        cursor:pointer;
    }
`;
const CarouselPortal = styled.section`
    grid-area:carousel;
    background:brown;
    position:relative;
    width: 100%;
    height: 100%;
   
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow:visible;
    .imgWrapper{
        position:absolute;
        padding-left:100%;
        height:100%;
        img{
            position:absolute;
            height:100%;
            object-fit:cover;
            object-position: center center;
        }
    }
    .imgWrapper:first-child{
        position:absolute;
        padding-left: 0%;
        width:100%;
    }

`;
export { Carousel }