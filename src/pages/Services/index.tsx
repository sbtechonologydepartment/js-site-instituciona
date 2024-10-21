import { Header } from "../../components/Header";
import { Container } from "./services-styles";

export function Services() {
    return(
        <Container>
            <Header />

            <div>
                <div className="service">
                    <strong>Compra de máquina</strong>
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam libero modi tenetur. Officiis sequi, adipisci placeat deleniti aliquam distinctio illum soluta ut? Numquam aliquam pariatur non quidem soluta quaerat. Ad magnam libero modi tenetur. Officiis sequi, adipisci placeat deleniti aliquam distinctio illum soluta ut? Numquam aliquam pariatur non quidem soluta quaerat.
                    </p>
                </div>
                
                <hr />

                <div className="service">
                    <strong>Aluguel de máquina</strong>
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam libero modi tenetur. Officiis sequi, adipisci placeat deleniti aliquam distinctio illum soluta ut? Numquam aliquam pariatur non quidem soluta quaerat. Ad magnam libero modi tenetur. Officiis sequi, adipisci placeat deleniti aliquam distinctio illum soluta ut? Numquam aliquam pariatur non quidem soluta quaerat.
                    </p>
                </div>
            </div>
        </Container>
    )
}