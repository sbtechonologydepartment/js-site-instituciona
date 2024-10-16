import { Header } from "../../components/Header";
import { NavMachine } from "../../components/Nav-machine";
import { Container } from "./machines-styles";
import { CarouselMachine } from "../../components/CarouselMachine";

export function Machines() {
    return (
        <Container>
            <Header />

            <CarouselMachine />

            <NavMachine />
        </Container>
    )
}