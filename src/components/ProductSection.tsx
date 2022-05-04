/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react"
import { Transition } from 'react-transition-group';

import { CaravanCard } from "./CaravanCard"
import { CaravanContext } from "../helpers/caravanContext"
import { Button } from "../components/Button"

import dataFilter from "../helpers/dataFilter";
import styled from "styled-components";

import { item } from "../helpers/dataFilter"

interface productSectionProps {
    data: { items: item[], count: number }
}
const ProductSection = (props: productSectionProps) => {
    const context = useContext(CaravanContext)

    const [filteredData, setFilteredData] = useState<item[]>([])
    const [lastShownIndex, setLastShownIndex] = useState<number>(9)

    const defaultStyle = {
        transition: `opacity ${500}ms ease-out`,
        opacity: 0
    }
    const transition: any = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 0 }
    }

    const loadMore = () => {
        setLastShownIndex(index => index + 9)
        console.log(lastShownIndex)
    }
    //GET DATA BASED ON CONTEXT CHANGES
    useEffect(() => {
        //SET INDEX TO DEFAULT
        setLastShownIndex(9)

        if (props.data !== undefined) {
            const data = dataFilter(props.data, context!)
            setFilteredData(data)
        }
    }, [context?.caravanType, context?.instant, context?.priceRange, props.data])

    return (
        <React.Fragment>
            <ProductsWrapper>
                {
                    filteredData ?
                        filteredData.map((item: item, index: number) => {
                            if (index < lastShownIndex) {
                                return (
                                    <Transition in={true} appear={true} timeout={500} key={index + "transition"}>
                                        {state => (
                                            <CaravanCard
                                                {...item}
                                                key={index}
                                                style={{
                                                    ...defaultStyle,
                                                    ...transition[state]
                                                }}
                                            />
                                        )}
                                    </Transition>
                                )
                            }
                        }) :
                        <>Loading...</>
                }
            </ProductsWrapper>
            {filteredData?.length > lastShownIndex ? <Button callback={loadMore} /> : null}
        </React.Fragment>
    )
}
export { ProductSection }

const ProductsWrapper = styled.section`
    position:relative;
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 25px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1250px){
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 25px;
        grid-column-gap: 25px;
        margin: 0 15%;
    }

    @media (max-width: 1250px){
        margin: 0 5%;
    }

    @media (max-width: 800px){
        margin: 0 0px;
        grid-template-columns: repeat(1, 1fr);
    }

    padding:32px 0px;

`;