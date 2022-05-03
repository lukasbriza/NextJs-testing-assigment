import * as React from "react"
import { SVGProps, Ref, forwardRef } from "react"

import styled from "styled-components";

const Arrow = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <SVGWrapper>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            ref={ref}
            {...props}
        >
            <path data-name="Path 11" d="M24 24H0V0h24Z" fill="none" opacity={0.87} />
            <path
                data-name="Path 12"
                d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6Z"
                fill="#edeae3"
            />
        </svg>
    </SVGWrapper>
)
const SVGWrapper = styled.div`
    position: absolute;
    right: 5px;
    top:13px;
    cursor: pointer;
    z-index: 0;
`;

const ArrowWithRef = forwardRef(Arrow)
export { ArrowWithRef }
