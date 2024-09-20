import { Button_link } from "../../components/Button-link"
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
        <Button_link 
         to="/home"
         text="Saiba mais"
         Icon={FaArrowRight}
         timeDealyAnimation="3.7s"
        />
      </div>
    </Container>
  )
}
