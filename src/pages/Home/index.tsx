import { Button } from "../../components/Button"
import { Floating_text } from "../../components/Floating-text"
import { Header } from "../../components/Header"
import { Container } from "./Home-style"
import { FaArrowRight } from "react-icons/fa";

export function Home() {

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
