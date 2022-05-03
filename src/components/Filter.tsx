/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext, useRef } from "react"
import { gsap } from "gsap"
import Slider from '@mui/material/Slider';


import { Light } from "../components/SVG/Light"
import { ArrowWithRef as Arrow } from "./SVG/Arrow";
import { CaravanContext } from "../helpers/caravanContext"

import styled from "styled-components";
import theme from "../helpers/theme";

const Filter = () => {
    return (
        <Section>
            <SliderSection />
            <CaravanTypeSection />
            <ReservationSection />
        </Section>
    )
}


const SliderSection = () => {
    const context = useContext(CaravanContext)

    const [range, setRange] = useState<number[]>([1500, 8000])

    const valuetext: any = (value: any) => {
        return `${value}Kč`
    }
    const handleSliderChange = (e: Event, newValue: number[]) => {
        setRange(newValue)
    }
    const handleInputChange = (e: React.BaseSyntheticEvent, input: string) => {
        let number = e.target.value.length
        if (e.target.value.length > 0) {
            number = parseInt(e.target.value)
        } else {
            number = 0
        }

        switch (input) {
            case "1":
                if (number !== NaN && number >= 0) {
                    number >= range[1] - 500 ? setRange([range[1] - 500, range[1]]) : setRange([number, range[1]])
                }
                break;
            case "2":
                if (number !== NaN && number >= 0) {
                    number <= range[0] + 500 ? setRange([range[0], range[0] + 500]) : setRange([range[0], number])
                }
                break;

        }
    }

    useEffect(() => {
        context?.fn.setPriceRange(range)
    }, [range])
    return (
        <FilterPart>
            <FilterHeader>Cena za den</FilterHeader>
            <PriceInputWrapper>
                <Slider
                    className="slider"
                    getAriaLabel={() => 'Price range'}
                    value={range}
                    onChange={(e, newValue: any) => { handleSliderChange(e, newValue) }}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={100}
                    max={10000}
                    sx={{
                        color: theme.colors.green,
                        width: "308px",
                        '& .MuiSlider-rail': {
                            color: theme.colors.beige,
                            opacity: 1
                        }
                    }}
                />
                <BoxWrapper className="input1">
                    <Input type={"text"} value={range[0]} onChange={(e) => { handleInputChange(e, "1") }} />
                    <Currency>Kč</Currency>
                </BoxWrapper>
                <BoxWrapper className="input2">
                    <Input type={"text"} value={range[1]} onChange={(e) => { handleInputChange(e, "2") }} />
                    <Currency>Kč</Currency>
                </BoxWrapper>
            </PriceInputWrapper>
        </FilterPart>
    )
}

const CaravanTypeSection = () => {
    const context = useContext(CaravanContext)



    const [campervan, setCampervan] = useState<boolean>(false)
    const [intergrated, setIntergrated] = useState<boolean>(false)
    const [builtin, setBuiltin] = useState<boolean>(false)
    const [alcove, setAlcove] = useState<boolean>(false)

    const campRef = useRef<HTMLDivElement>(null)
    const integRef = useRef<HTMLDivElement>(null)
    const buildRef = useRef<HTMLDivElement>(null)
    const alcovRef = useRef<HTMLDivElement>(null)

    interface updateObj {
        campervan?: boolean,
        intergrated?: boolean,
        builtin?: boolean,
        alcove?: boolean
    }
    const updateContext = (update: updateObj) => {
        context?.fn.setCaravanType(actualState => ({ ...actualState, ...update }))
    }

    return (
        <FilterPart className="centerEl">
            <FilterHeader>Typ karavanu</FilterHeader>
            <FilterButtonsWrapper>
                <FilterButton
                    onClick={() => { updateContext({ campervan: !campervan }); setCampervan(!campervan); }}
                    data-clicked={campervan}
                    ref={campRef}
                >
                    <FilterButtonHeader >Campervan</FilterButtonHeader>
                    <FilterButtonText>Obytka s rozměry osobáku, se kterou dojedete všude.</FilterButtonText>
                </FilterButton>
                <FilterButton
                    onClick={() => { updateContext({ intergrated: !intergrated }); setIntergrated(!intergrated) }}
                    data-clicked={intergrated}
                    ref={integRef}
                >
                    <FilterButtonHeader>Integrál</FilterButtonHeader>
                    <FilterButtonText>Král mezi karavany. Luxus na kolech.</FilterButtonText>
                </FilterButton>
                <FilterButton
                    onClick={() => { updateContext({ builtin: !builtin }); setBuiltin(!builtin); }}
                    data-clicked={builtin}
                    ref={buildRef}
                >
                    <FilterButtonHeader>Vestavba</FilterButtonHeader>
                    <FilterButtonText>Celý byt geniálně poskládaný do dodávky.</FilterButtonText>
                </FilterButton>
                <FilterButton
                    onClick={() => { updateContext({ alcove: !alcove }); setAlcove(!alcove); }}
                    data-clicked={alcove}
                    ref={alcovRef}
                >
                    <FilterButtonHeader>Přívěs</FilterButtonHeader>
                    <FilterButtonText>Tažný karavan za vaše auto. Od kapkovitých až po rodinné.</FilterButtonText>
                </FilterButton>
            </FilterButtonsWrapper>
        </FilterPart>
    )
}

const ReservationSection = () => {
    const context = useContext(CaravanContext)

    const handleChange = (e: React.BaseSyntheticEvent) => {
        e.target.value === "1" ? context?.fn.setInstant(true) : context?.fn.setInstant(false)
    }
    return (
        <FilterPart>
            <FilterHeader>Okamžitá rezervace <Light /></FilterHeader>
            <ReservationSelectWrapper>
                <ReservationSelect onChange={handleChange}>
                    <option value="1">Ano</option>
                    <option value="0">Ne</option>
                </ReservationSelect>
                <Arrow />
            </ReservationSelectWrapper>
        </FilterPart>
    )
}

const Section = styled.section`
    width: 100vw;
    max-width:${props => props.theme.maxWidth};
    display:flex;
    flex-direction: row;
`;
const FilterHeader = styled.div`
    grid-area: header;

    padding: 0 10px;
    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.sizes.size2};
    color: ${props => props.theme.colors.darkGrey};
    height: 21px;
    width: 186px;

    text-align: left;
    align-items: center;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;

    cursor:default;
`;
const FilterPart = styled.div`
    padding: 10px 0px;
    flex-grow: 1;

    border-color: ${props => props.theme.colors.beige};
    border-style: solid;
    border-width: 1px;

    display: grid;
    grid-template-rows: 30px 95px;
    grid-template-areas: "header" "main";

    &.centerEl {
        border-left: none;
        border-right: none;
    }
    &:first-child{
        grid-template-rows: 30px 95px;
        grid-template-columns: 1fr min-content;
        grid-template-areas: ". header" ". main";

        ${FilterHeader}{
            padding-left: 0px;
        }
    }
    &:last-child{
        grid-template-rows: 30px 95px;
        grid-template-columns: min-content 1fr;
        grid-template-areas: "header ." "main .";
    }
`;

const PriceInputWrapper = styled.div`
    grid-area: main;
    display: grid;
    grid-template-rows: 40px 48px;
    grid-template-columns: 164px 164px;
    grid-template-areas: "slider slider" "input1 input2";

    .slider{
        grid-area: slider;
        margin-right: 10px;
    }
`;
const BoxWrapper = styled.div`
    &.input1{
        grid-area: input1;
        position: relative;
    }
    &.input2{
        grid-area: input2;
        position: relative;
    }
`;
const Input = styled.input`
    width:146px;
    height:48px;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.beige};
    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.sizes.size2};
    background-color: transparent;
    cursor: pointer;
    padding-left:10px;
    margin-right:10px;

    &:hover{
        border: 2px solid ${props => props.theme.colors.green};
        transition-property: border-color;
        transition-duration: 250ms;
        transition-timing-function: ease-out;
    }

    &:focus{
        border: 2px solid ${props => props.theme.colors.green};
    }
`;
const Currency = styled.div`
    position: absolute;
    display: inline-block;
    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.sizes.size2};
    color: ${props => props.theme.colors.darkGrey};
    right:28px;
    top:50%;
    transform: translateY(-50%);
`;

const FilterButtonsWrapper = styled.section`
    grid-area: main;
    display: flex;
    justify-content: space-between;
`;
const FilterButton = styled.div`
    border-radius: 8px;
    border-color: ${props => props.theme.colors.beige};
    border-style: solid;
    border-width: 1px;
    height: 88px;
    width: 156px;

    margin: 0 5px;
    cursor: pointer;

    &:first-child{
       margin-left: 10px;
    }
    &:last-child{
        margin-right: 10px;
    }


    &[data-clicked=true]{
        border-color: ${props => props.theme.colors.green};
        border-width: 2px;
        transition-property: border-color;
        transition-timing-function: ease-out;
        transition-duration: 350ms;
    }

    &[data-clicked=false]:hover {
        border-color: ${props => props.theme.colors.darkBlue};
        transition-property: border-color;
        transition-duration: 250ms;
        transition-timing-function: ease-out;
    }
    z-index: +1;
`;
const FilterButtonHeader = styled.p`
    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.sizes.size2};
    font-weight: 400;
    color: ${props => props.theme.colors.darkBlue};
    margin: 5px 10px;
    z-index:-1;
`;
const FilterButtonText = styled.p`
    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.sizes.size4};
    font-weight: 400;
    color: ${props => props.theme.colors.darkGrey};
    margin: 0px 10px;
`;

const ReservationSelectWrapper = styled.div`
    grid-area: main;
    position: relative;
    background-color: transparent;
    margin-left: 10px;
    width:176px;
`
const ReservationSelect = styled.select`
    position: relative;
    width:176px;
    height:48px;
    padding-left: 10px;
    border: 1px solid ${props => props.theme.colors.beige};

    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.sizes.size2};
    font-weight: 400;
    color: ${props => props.theme.colors.darkBlue}; 

    border-radius: 8px;
    appearance: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 1;

    &:hover{
        border-width: 2px;
        border-color:  ${props => props.theme.colors.green};

        transition-property: border-color;
        transition-duration: 250ms;
        transition-timing-function: ease-out;
    }

    `;

export { Filter }
