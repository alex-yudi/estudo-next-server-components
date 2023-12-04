'use client'

import { ReactNode } from "react"
import TestClientSideAsComponent from "./TestClientSideAsComponent"

type Props = {
    children?: ReactNode;
}

export default function ClickButton({ children }: Props) {

    console.log('Rendered on client --- ClickButton.tsx')
    return (
        <>
            <br />
            <br />
            <button onClick={() => alert('clicked!')}>
                Click me!
            </button>
            <br />
            {/*
            O Componente chamado aqui é renderizado no client-side, uam vez que esse componente completo sinaliza a renderização no client-side
            */}
            <TestClientSideAsComponent />
            <br />
            {children}
        </>
    )
}