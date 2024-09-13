import { useState, useEffect } from "react";
import { Container } from "./carousel-runner-styles";
import { useInView } from "react-intersection-observer";
import logo1 from '../../assets/Fábricas parceiras - JS/1.png'
import logo2 from '../../assets/Fábricas parceiras - JS/2.png'
import logo3 from '../../assets/Fábricas parceiras - JS/3.png'
import logo4 from '../../assets/Fábricas parceiras - JS/4.png'
import logo5 from '../../assets/Fábricas parceiras - JS/5.png'
import logo6 from '../../assets/Fábricas parceiras - JS/6.png'
import logo7 from '../../assets/Fábricas parceiras - JS/7.png'
import logo8 from '../../assets/Fábricas parceiras - JS/8.png'
import logo9 from '../../assets/Fábricas parceiras - JS/9.png'
import logo10 from '../../assets/Fábricas parceiras - JS/10.png'

export function CarouselRunner() {
    const {ref: carouselRunnerRef, inView: carouselRunnerInView} = useInView()
    const [alreadySeen, setAlreadySeen] = useState<boolean>(false)

    useEffect(() => {
        if(carouselRunnerInView && !alreadySeen) {
            setAlreadySeen(true)
        }
    }, [carouselRunnerInView, alreadySeen])
    
    return(
        <Container 
         $carouselRunnerInView={alreadySeen ? 'true' : 'false'}
         ref={carouselRunnerRef}
        >
            <strong>Empresas parceiras</strong>

            <div id="logo-runner">
                <div className="logo-wrap">
                    <img src={logo1} alt="exemplo" />
                    <img src={logo2} alt="exemplo" />
                    <img src={logo3} alt="exemplo" />
                    <img src={logo4} alt="exemplo" />
                    <img src={logo5} alt="exemplo" />
                    <img src={logo6} alt="exemplo" />
                    <img src={logo7} alt="exemplo" />
                    <img src={logo8} alt="exemplo" />
                    <img src={logo9} alt="exemplo" />
                    <img src={logo10} alt="exemplo" />
                </div>        
                <div className="logo-wrap">
                    <img src={logo1} alt="exemplo" />
                    <img src={logo2} alt="exemplo" />
                    <img src={logo3} alt="exemplo" />
                    <img src={logo4} alt="exemplo" />
                    <img src={logo5} alt="exemplo" />
                    <img src={logo6} alt="exemplo" />
                    <img src={logo7} alt="exemplo" />
                    <img src={logo8} alt="exemplo" />
                    <img src={logo9} alt="exemplo" />
                    <img src={logo10} alt="exemplo" />
                </div>            
            </div>
        </Container>
    )
}