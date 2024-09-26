import { ChangeEvent, useState } from "react";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button, Container, Form } from "./contacts-styles"
import { FiMapPin, FiPhone  } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { toast } from "sonner";
import { Footer } from "../../components/Footer";

export function Contacts() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [enterprise, setEnterprise] = useState<string>('')
    const [menssage, setMenssage] = useState<string>('')

    function handleSubmitForm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()

        if(!name || !email || !enterprise || !menssage) {
            return toast.error('Preencha todos os campos!', {duration: 5000})
        }

        window.open('https://www.instagram.com', '_blank')
    }

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
                        <Input 
                         placeholder='Nome'
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        />
                        <Input 
                         placeholder='Email'
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                        <Input 
                         placeholder='Empresa'
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setEnterprise(e.target.value)}
                        />
                    </div>

                    <Textarea 
                     placeholder='Mensagem'
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setMenssage(e.target.value)}
                    />

                    <Button  
                     onClick={handleSubmitForm}
                    >
                        <span>Enviar</span>
                    </Button>
                </Form>
            </div>

            <Footer />
        </Container>
    )
}