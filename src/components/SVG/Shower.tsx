import * as React from "react"
import { SVGProps } from "react"
import theme from "../../helpers/theme"
import styled from "styled-components";

const Shower = (props: SVGProps<SVGSVGElement>) => (
    <SVGWrapper>
        <svg
            data-name="Icon/Shower"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            {...props}
        >
            <path
                data-name="Combined Shape"
                d="M13.603 20a.622.622 0 0 1-.592-.427l-.625-1.873a.626.626 0 1 1 1.186-.4l.625 1.875a.622.622 0 0 1-.588.824Zm-11.758-.258a.624.624 0 0 1-.085-.565l.625-1.877a.626.626 0 1 1 1.186.4l-.624 1.872a.623.623 0 0 1-.594.428h-.005a.618.618 0 0 1-.503-.258Zm15.509-.366V5.625a4.375 4.375 0 0 0-8.712-.571 4.4 4.4 0 0 1 3.712 4.321.625.625 0 0 1-.627.625h-7.5a.625.625 0 0 1-.625-.625 4.389 4.389 0 0 1 3.78-4.331 5.625 5.625 0 0 1 11.22.58v13.75a.625.625 0 0 1-1.25 0ZM4.918 8.75h6.123a3.125 3.125 0 0 0-6.124 0Zm2.436 10.625V17.5a.625.625 0 0 1 1.25 0v1.876a.625.625 0 0 1-1.25 0Zm4.375-5a.622.622 0 0 1-.592-.428l-.625-1.875a.626.626 0 1 1 1.186-.4l.625 1.875a.622.622 0 0 1-.588.824Zm-7.5 0a.622.622 0 0 1-.593-.823l.625-1.875a.624.624 0 0 1 1.152-.077.617.617 0 0 1 .034.478l-.62 1.87a.624.624 0 0 1-.592.427Zm3.125-.625v-1.875a.625.625 0 0 1 1.25 0v1.875a.625.625 0 0 1-1.25 0Z"
                fill={theme.colors.darkGrey}
            />
        </svg>
    </SVGWrapper>
)

const SVGWrapper = styled.div`
    margin-right:13px;
`;

export { Shower }
