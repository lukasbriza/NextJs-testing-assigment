import * as React from "react"
import { SVGProps } from "react"
import theme from "../../helpers/theme"
import styled from "styled-components";

const Bed = (props: SVGProps<SVGSVGElement>) => (
    <SVGWrapper>
        <svg
            data-name="Icon/Bed"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            {...props}
        >
            <g data-name="Hotel Double Bed 1">
                <path
                    data-name="Combined Shape"
                    d="m18.757 17.593-.007-.093v-1.875H1.25V17.5a.625.625 0 0 1-1.243.093L0 17.5v-6.458a2.3 2.3 0 0 1 1.875-2.254V3.75A1.876 1.876 0 0 1 3.6 1.88l.15-.005h12.5a1.876 1.876 0 0 1 1.87 1.729l.005.146v5.038A2.3 2.3 0 0 1 20 11.042V17.5a.625.625 0 0 1-1.243.093ZM1.25 11.042v3.333h17.5v-3.333a1.039 1.039 0 0 0-.928-1.035l-.113-.006H2.291a1.042 1.042 0 0 0-1.041 1.041ZM16.875 8.75V7.5a.625.625 0 0 0-.533-.618l-.092-.007h-5a.625.625 0 0 0-.618.532l-.006.093v1.25Zm-7.5 0V7.5a.625.625 0 0 0-.533-.618l-.092-.007h-5a.625.625 0 0 0-.618.532l-.007.093v1.25ZM8.75 5.625a1.868 1.868 0 0 1 1.25.478 1.867 1.867 0 0 1 1.1-.472l.147-.005h5a1.871 1.871 0 0 1 .625.107V3.75a.626.626 0 0 0-.533-.618l-.089-.007H3.75a.625.625 0 0 0-.618.533l-.007.092v1.982a1.868 1.868 0 0 1 .479-.1l.146-.007Z"
                    fill={theme.colors.darkGrey}
                />
            </g>
        </svg>
    </SVGWrapper>
)

const SVGWrapper = styled.div`
    margin-right:4px;
`;

export { Bed }
