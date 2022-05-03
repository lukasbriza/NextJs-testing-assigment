import * as React from "react"
import { SVGProps } from "react"
import theme from "../../helpers/theme"
import styled from "styled-components"

const Light = (props: SVGProps<SVGSVGElement>) => (
    <SVGWrapper>
        <svg
            {...props}
            data-name="Icon / Action / Filter"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
        >
            <path
                data-name="Combined Shape"
                d="M0 8a8 8 0 1 1 8 8 8.009 8.009 0 0 1-8-8Zm1 0a7 7 0 1 0 7-7 7.008 7.008 0 0 0-7 7Zm5.129 5.836A.5.5 0 0 1 6 13.45L6.448 9h-.776a1 1 0 0 1-.958-1.288l1.2-4A1 1 0 0 1 6.872 3h3.318a1 1 0 0 1 .894 1.446L10.309 6H11.5a.5.5 0 0 1 .408.79l-5 7a.5.5 0 0 1-.778.045ZM6.87 4l-1.2 4H7a.5.5 0 0 1 .5.549l-.313 3.132L10.529 7H9.5a.5.5 0 0 1-.448-.724L10.191 4h-3.32Z"
                fill={theme.colors.orange}
            />
        </svg>
    </SVGWrapper>
)

const SVGWrapper = styled.div`
 position: relative;
 width:16px;
 height: 16px;
 margin-left: 5px;
`;

export { Light }
