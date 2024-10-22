import { Container } from "./header-style";
import black_logo from '../../assets/black-logo.png'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook, FaYoutube  } from "react-icons/fa";
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
                    <Link to={'/aboutUs'}>Sobre nós</Link>
                </div>
                <div className="link-nav">
                    <Link to={'/services'}>Serviços</Link>
                </div>
                <div className="link-nav">
                    <Link to={'/contacts'}>Orçamento</Link>
                </div>
                <div className="link-nav">
                    <Link to={'/machines'}>Máquinas</Link>
                </div>
            </div>

            <div id="social-media-navigation">
                <div className="social-nav-link">
                    <a 
                     href="https://www.instagram.com/jsrepresentaca0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                     target="_blank"
                    >
                        <FaInstagram />
                    </a>
                </div>
                <div className="social-nav-link">
                    <a 
                     href="#"
                     target="_blank"
                    >
                        <FaLinkedin />
                    </a>
                </div>
                <div className="social-nav-link">
                    <a 
                     href="#"
                     target="_blank"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
                <div className="social-nav-link">
                    <a 
                     href="#"
                     target="_blank"
                    >
                        <FaFacebook />
                    </a>
                </div>
                <div className="social-nav-link">
                    <a 
                     href="#"
                     target="_blank"
                    >
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </Container>
    )
}