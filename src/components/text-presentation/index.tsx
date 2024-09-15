import { Container } from "./text-presetation-styles";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect, useState } from "react";

interface IProps {
    [key: string]: unknown
    children?: ReactNode
    $leftright: 'right' | 'left'
}

export function TextPresentation(props:IProps) {
    const {ref: textPresentationRef, inView: textPresentationInView} = useInView()
    const [alreadySeen, setAlreadyseen] = useState<boolean>(false)

    useEffect(() => {
        if(textPresentationInView && !alreadySeen) {
            setAlreadyseen(true)
        }
    }, [textPresentationInView, alreadySeen])

    return (
        <Container 
         ref={textPresentationRef}
         $textPresentationInView={alreadySeen ? 'true' : 'false'}
         direction={props.$leftright}
         {...props}
        >   
            {props.children}
        </Container>
    )
}