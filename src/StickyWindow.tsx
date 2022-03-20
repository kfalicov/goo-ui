import { SxProps } from "@mui/material"
import { styled } from "@mui/system"
import React from "react"

type StickyWindowProps = {
    sx?: SxProps
}

export const StickyWindow = styled((props: React.PropsWithChildren<StickyWindowProps>) => {
    return <div>{props.children}</div>
})(({ theme }) => ({ width: 100, height: 100, background: 'gray' }));