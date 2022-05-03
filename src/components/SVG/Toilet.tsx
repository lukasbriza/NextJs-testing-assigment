import * as React from "react"
import { SVGProps } from "react"
import theme from "../../helpers/theme"
import styled from "styled-components";

const Toilet = (props: SVGProps<SVGSVGElement>) => (
    <SVGWrapper>
        <svg
            data-name="Icon/Toilet"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20.004}
            {...props}
        >
            <path
                d="M6.417 20.002a.62.62 0 0 1-.489-.237.627.627 0 0 1-.116-.533l.515-2.163a7.422 7.422 0 0 1-3.638-5.917 1.875 1.875 0 0 1 .6-3.65h9.378V1.877A1.879 1.879 0 0 1 14.542.002h2.5a1.879 1.879 0 0 1 1.875 1.875v7.5a1.869 1.869 0 0 1-1.3 1.784 3.129 3.129 0 0 1-2.076 2.428.613.613 0 0 0-.374.587v5.2a.626.626 0 0 1-.625.625H6.417Zm-2.467-8.75a6.231 6.231 0 0 0 3.379 4.943.625.625 0 0 1 .324.7l-.442 1.855h6.706v-4.555a1.865 1.865 0 0 1 1.19-1.778l.036-.012a1.87 1.87 0 0 0 1.165-1.151H3.948Zm10.594-10a.625.625 0 0 0-.625.625v8.125h3.125a.626.626 0 0 0 .625-.625v-7.5a.626.626 0 0 0-.625-.625Zm-11.252 7.5a.625.625 0 0 0 0 1.25h9.375v-1.25Z"
                fill={theme.colors.darkGrey}
            />
        </svg>
    </SVGWrapper>
)

const SVGWrapper = styled.div`
    margin-right:13px;
`;
export { Toilet }
