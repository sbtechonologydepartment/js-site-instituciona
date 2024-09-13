import { Container } from "./text-presetation-styles";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect, useState } from "react";

interface IProps {
    [key: string]: unknown
    children?: ReactNode
}

export function TextPresentation(props:IProps) {
    const {ref: textPresentationRef, inView: textPresentationInView} = useInView()
    const [visibleCount, setVisibleCount] = useState<number>(0)

    useEffect(() => {
        if(textPresentationInView) {
            setVisibleCount((prevState) => prevState + 1)
        }
    }, [textPresentationInView])

    return (
        <Container 
         ref={textPresentationRef}
         $textPresentationInView={visibleCount === 1 ? 'true' : 'false'}
         {...props}
        >   
            {props.children}
        </Container>
    )
}