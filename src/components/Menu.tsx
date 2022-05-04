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

    @media (max-width: 700px){

        div{
            margin: 0;
            left:50%;
            transform: translate(-50%,-50%);
        }
    }
`
export { Menu }

