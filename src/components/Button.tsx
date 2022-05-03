import React, { useState, useEffect } from 'react';

import styled from "styled-components";

interface ButtonProps {
    callback: () => void
}

const Button = ({ callback }: ButtonProps) => {
    const [isActive, setActive] = useState(false)
    const [buttonClass, setClass] = useState<string>("initClass")

    function handleTouchStart() {
        setActive(true)
    }
    function handleTouchEnd() {
        callback()
        setActive(false)
    }
    function handleMouseEnter() {
        setActive(true)
    }
    function handleMouseLeave() {
        setActive(false)
    }
    function handleClick() {
        callback()
    }

    useEffect(() => {
        if (isActive === true) {
            setClass(`hoverClass`)
        }
        if (isActive === false) {
            setClass('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive])

    return (
        <StyledButton
            type="button"
            className={buttonClass}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            Načíst další
        </StyledButton>
    )
}

export { Button }

const StyledButton = styled.button`
    width: 155px;
    height: 48px;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.font};
    font-weight: 400;
    font-size:  ${props => props.theme.sizes.size2};
    line-height: 21px;
    background-color: ${props => props.theme.colors.green};

    border-width: 0px;
    border-radius: 9px;
    cursor:pointer;


    position:relative;
    left:50%;
    transform:translateX(-50%);

    margin-bottom:115px;

    &.hoverClass{
        border-width: 1px;
        border-color: ${props => props.theme.colors.darkBlue};
    }
`;