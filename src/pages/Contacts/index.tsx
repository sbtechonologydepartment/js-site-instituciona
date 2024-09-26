import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button, Container, Form } from "./contacts-styles"
import { FiMapPin, FiPhone  } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export function Contacts() {
    return (
        <Container>
            <Header />

            <div>
                <div id="contact-options">
                    <strong>Fale conosco</strong>

                    <div>
                        <div className="contact-way">
                            <div>
                                <FiMapPin />
                            </div>

                            <span>Av. Brg. Faria Lima, 3477 - BA</span>
                        </div>
                        <div className="contact-way">
                            <div>
                                <MdOutlineMailOutline />
                            </div>

                            <span>contato@pstudio.com</span>
                        </div>
                        <div className="contact-way">
                            <div>
                                <FiPhone />
                            </div>

                            <span>(35) 3456 - 7890</span>
                        </div>
                    </div>
                </div>

                <Form>
                    <div>
                        <Input placeholder='Nome'/>
                        <Input placeholder='Email'/>
                        <Input placeholder='Empresa'/>
                    </div>

                    <Textarea placeholder='Mensagem'/>

                    <Button  
                     target="blank"
                     href="#"
                    >
                        <span>Enviar</span>
                    </Button>
                </Form>
            </div>
        </Container>
    )
}