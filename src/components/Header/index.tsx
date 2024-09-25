import { Container } from "./header-style";
import black_logo from '../../assets/black-logo.png'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook  } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Header() {
    return(
        <Container>
            <div id="logo">
                <img src={black_logo}  alt="logo da JS"/>
            </div>

            <div id="navigation">
                <div className="link-nav">
                    <Link to={'/home'}>Home</Link>
                </div>
                <div className="link-nav">
                    <Link to={'/home'}>Sobre nós</Link>
                </div>
                <div className="link-nav">
                    <Link to={'/contacts'}>Orçamento</Link>
                </div>
                <div className="link-nav">
                    <Link to={'/home'}>Parceiros</Link>
                </div>
            </div>

            <div id="social-media-navigation">
                <div className="social-nav-link">
                    <a href="#">
                        <FaInstagram size={20}/>
                    </a>
                </div>
                <div className="social-nav-link">
                    <a href="#">
                        <FaLinkedin size={20}/>
                    </a>
                </div>
                <div className="social-nav-link">
                    <a href="#">
                        <FaWhatsapp size={20}/>
                    </a>
                </div>
                <div className="social-nav-link">
                    <a href="#">
                        <FaFacebook size={20}/>
                    </a>
                </div>
            </div>
        </Container>
    )
}