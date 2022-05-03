import React, { SetStateAction, createContext, useState } from 'react';

export default interface caravanContextProps {
    instant: boolean,
    caravanType: caravanType,
    priceRange: number[],
    showCarousel: boolean,
    carouselSetup: string[],
    fn: {
        setInstant: React.Dispatch<SetStateAction<boolean>>,
        setCaravanType: React.Dispatch<SetStateAction<caravanType>>,
        setPriceRange: React.Dispatch<SetStateAction<number[]>>,
        setShowCarousel: React.Dispatch<SetStateAction<boolean>>,
        setCarouselSetup: React.Dispatch<SetStateAction<string[]>>
    }
}

interface caravanType {
    campervan: boolean,
    intergrated: boolean,
    builtin: boolean,
    alcove: boolean
}
const CaravanContext = createContext<caravanContextProps | null>(null)

const CaravanContextProvider = ({ children }: any) => {
    const [instant, setInstant] = useState<boolean>(true)
    const [caravanType, setCaravanType] = useState<caravanType>({
        campervan: false, intergrated: false, builtin: false, alcove: false
    })
    const [priceRange, setPriceRange] = useState<number[]>([1500, 8000])
    const [showCarousel, setShowCarousel] = useState<boolean>(false)
    const [carouselSetup, setCarouselSetup] = useState<string[]>([""])

    let state: caravanContextProps = {
        instant: instant,
        caravanType: caravanType,
        priceRange: priceRange,
        showCarousel: showCarousel,
        carouselSetup: carouselSetup,
        fn: {
            setInstant: setInstant,
            setCaravanType: setCaravanType,
            setPriceRange: setPriceRange,
            setShowCarousel: setShowCarousel,
            setCarouselSetup: setCarouselSetup
        }
    }

    return (
        <CaravanContext.Provider value={state}>
            {children}
        </CaravanContext.Provider>
    )
}

export { CaravanContext, CaravanContextProvider }