/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react"
import Image from 'next/image'

import { Seat } from "./SVG/Seat"
import { Bed } from "./SVG/Bed"
import { Toilet } from "./SVG/Toilet"
import { Shower } from "./SVG/Shower"
import { Light } from "./SVG/Light"
import { CaravanContext } from "../helpers/caravanContext"

import styled from "styled-components"

import { item } from "../helpers/dataFilter"

interface CardProps extends item {
    style: any
}

const CaravanCard = (itemData: CardProps) => {
    const context = useContext(CaravanContext)
    const typeHeader = itemData.vehicleType == "Intergrated" ?
        "Integrál" : itemData.vehicleType == "Campervan" ?
            "Campervan" : itemData.vehicleType == "BuiltIn" ?
                "Vestavba" : itemData.vehicleType == "Alcove" ?
                    "Přívěs" : null

    const imgURLs = itemData.pictures

    return (
        <React.Fragment>
            <Card
                style={itemData.style}
                onClick={() => { context?.fn.setCarouselSetup(imgURLs); context?.fn.setShowCarousel(true) }}
            >
                <PictureWrapper>
                    <img src={imgURLs[0]} alt={itemData.name} />
                </PictureWrapper>
                <ContentWrapper>
                    <CaravanTypeHeader>{typeHeader}</CaravanTypeHeader>
                    <Name>{itemData.name}</Name>
                    <UtilityWrapper>
                        <LocationHeader>{itemData.location}</LocationHeader>
                        <div className="iconRow">
                            <div className="iconWrapper">
                                <Seat />
                                {itemData.passengersCapacity}
                            </div>
                            <div className="iconWrapper">
                                <Bed />
                                {itemData.sleepCapacity}
                            </div>
                            {itemData.toilet ? <Toilet /> : null}
                            {itemData.shower ? <Shower /> : null}
                        </div>
                    </UtilityWrapper>
                    <PriceWrapper>
                        <PriceHeader>Cena od</PriceHeader>
                        <div className="priceValueWrapper">
                            <Value>{itemData.price} Kč/den</Value>
                            {itemData.instantBookable ? <Light /> : null}
                        </div>
                    </PriceWrapper>
                </ContentWrapper>
            </Card>
        </React.Fragment>
    )
}

export { CaravanCard }

const Card = styled.section`
    position:relative;
    max-width: 392px;
    min-width: 343px;
    height:380px;
    display:grid;
    grid-template-rows: 190px 190px;
    grid-template-areas: "picture" "informations";

    left:50%;
    transform: translate(-50%);

    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.colors.beige};
    overflow: hidden;
    
    cursor:pointer;

    &:hover{
        border-width: 1px;
        border-color: ${props => props.theme.colors.green};
        transition-property: border-color;
        transition-timing-function: ease-out;
        transition-duration: 500ms;
    }
`;
const PictureWrapper = styled.div`
    grid-area: picture;
    position:relative;
    width:100%;
    height: 100%;

    img{
        position:relative;
        height:100%;
        width:100%;
        object-fit:cover;
        object-position: center center;
    }
`;
const ContentWrapper = styled.div`
    grid-area: informations;
    position: inherit;
    display:flex;
    flex-direction: column;

    padding: 0 16px;
`;
const CaravanTypeHeader = styled.h5`
    color: ${props => props.theme.colors.orange};
    font-family: ${props => props.theme.font};
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${props => props.theme.sizes.size4};
    text-align: left;
    line-height: 16px;

    margin-top:12px;
`;
const Name = styled.h2`
    color: ${props => props.theme.colors.darkBlue};
    font-family: ${props => props.theme.font};
    font-weight: 700;
    font-size: ${props => props.theme.sizes.size1};
    text-align: left;
    line-height: 32px;

    margin-top:2px;
`;
const UtilityWrapper = styled.div`
    display:flex;
    flex-direction: column;

    border-top-color: ${props => props.theme.colors.beige};
    border-top-width: 1px;
    border-top-style: solid;

    border-bottom-color: ${props => props.theme.colors.beige};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    
    .iconRow{
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;

        margin-bottom: 10px;

        .iconWrapper{
            display:flex;
            flex-wrap: nowrap;
            margin-right:13px;
        }
    }
`;
const LocationHeader = styled.p`
    color: ${props => props.theme.colors.darkBlue};
    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.sizes.size3};
    font-weight: 400;
    text-align: left;
    line-height: 19px;

    margin-top:10px;
    margin-bottom:9px;
`;
const PriceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height:100%;

    .priceValueWrapper{
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
`;
const PriceHeader = styled.p`
    color: ${props => props.theme.colors.darkGrey};
    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.sizes.size2};
    line-height: 21px;
    font-weight: 400;
    text-align: left;
`;
const Value = styled.p`
    color: ${props => props.theme.colors.darkBlue};
    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.sizes.size2};
    line-height: 21px;
    font-weight: 700;

    margin-right: 4px;
`;
