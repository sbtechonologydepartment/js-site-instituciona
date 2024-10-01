import { Container, PictureFrame } from "./founder-styles";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface IProps {
    photoWay: string
    altImg?: string
    name: string
    textAbout: string
    leftOrRight: 'right' | 'left'
}

export function Founder({photoWay, altImg, name, textAbout, leftOrRight}: IProps) {
    const {ref: founderRef, inView: founderInView} = useInView()
    const [alreadySeen, setAlreadySeen] = useState<boolean>(false)

    useEffect(() => {
        if(founderInView && !alreadySeen) {
            setAlreadySeen(true)
        }
    }, [founderInView, alreadySeen])

    return (
        <Container 
         $leftOrRight={leftOrRight}
         ref={founderRef}
         $alreadySeen={alreadySeen ? 'true' : 'false'}
        >
            <PictureFrame $leftOrRight={leftOrRight}>
                <img src={photoWay} alt={altImg && altImg} />
            </PictureFrame>

            <div className="about-founder">
                <strong>{name}</strong>

                <p>
                    {textAbout}
                </p>
            </div>
        </Container>
    )
}