import styled from "styled-components";

import { LogoWithRef as Logo } from "./SVG/Logo";

const Menu = () => {
    return (
        <Section>
            <Logo />
        </Section>
    )
}

const Section = styled.section`
    width: 100vw;
    height:60px;
    max-width:${props => props.theme.maxWidth};
    background-color: ${props => props.theme.colors.white};
    z-index:1;
`
export { Menu }

