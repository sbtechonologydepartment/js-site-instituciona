import { Container } from "./navMachine-styles";
import bralyx from '../../assets/logos-backgroundWhite/1.png'
import bizerba from '../../assets/logos-backgroundWhite/2.png'
import ferneto from '../../assets/logos-backgroundWhite/3.png'
import robot from '../../assets/logos-backgroundWhite/4.png'
import zummo from '../../assets/logos-backgroundWhite/6.png'
import ramalhos from '../../assets/logos-backgroundWhite/7.png'
import impomac from '../../assets/logos-backgroundWhite/8.png'
import tramontina from '../../assets/logos-backgroundWhite/9.png'
import eibel from '../../assets/logos-backgroundWhite/10.png'
import winterhalter from '../../assets/logos-backgroundWhite/11.png'
import { Link } from "react-router-dom";

export function NavMachine() {
    const partners = [
        {
            name: 'zummo',
            logo: zummo
        }, 
        {
            name: 'bralyx',
            logo: bralyx
        },
        {
            name: 'bizerba',
            logo: bizerba
        },
        {
            name: 'ferneto',
            logo: ferneto
        },
        {
            name: 'robot',
            logo: robot
        },
        {
            name: 'ramalhos',
            logo: ramalhos
        },
        {
            name: 'impomac',
            logo: impomac
        },
        {
            name: 'tramontina',
            logo: tramontina
        },
        {
            name: 'eibel',
            logo: eibel
        },
        {
            name: 'winterhalter',
            logo: winterhalter
        },
    ]

    return(
        <Container>
            {
                partners.map((partner, index) => (
                    <Link
                     to={`/machines/${partner.name}`}
                     key={index}
                     className="partner"
                    >
                        <img src={partner.logo} alt={`logo da ${partner.name}`} />
                    </Link>
                ))
            }
        </Container>
    )
}