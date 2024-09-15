import { ReactNode, useEffect, useState } from "react";
import { Container } from "./solution-box-styles";
import { useInView } from "react-intersection-observer";

interface IProps {
    icon: ReactNode
    title: string
    text: string
    [key: string]: unknown
}

export function SolutionBox({icon, title, text, ...props}: IProps) {
    const {inView: solutionBoxInView, ref: solutionBoxRef} = useInView()
    const [solutionBoxAlreadySeen, setSolutionBoxAlreadySeen] = useState<boolean>(false)

    useEffect(() => {
        if(solutionBoxInView && !solutionBoxAlreadySeen) {
            setSolutionBoxAlreadySeen(true)
        }
    }, [solutionBoxAlreadySeen, solutionBoxInView])

    return (
        <Container 
         ref={solutionBoxRef}
         $isVisible={ solutionBoxAlreadySeen ? 'true' : 'false'}
         {...props}
        > 
            <div>
                {icon}
            </div>

            <div>
                <strong> {title}</strong>

                <p>{text}</p>
            </div>
        </Container>
    )
}