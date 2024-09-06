import { Button } from "../../components/Button"
import { Floating_text } from "../../components/Floating-text"
import { Header } from "../../components/Header"
import { Container } from "./Start-style"
import { FaArrowRight } from "react-icons/fa";

export function Start() {

  return (
    <Container>
      <Header />

      <Floating_text />

      <div id="home-button">
        <Button 
         text="Saiba mais"
         icon={FaArrowRight}
        />
      </div>
    </Container>
  )
}
