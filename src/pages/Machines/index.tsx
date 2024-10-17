import { Header } from "../../components/Header";
import { NavMachine } from "../../components/Nav-machine";
import { Container } from "./machines-styles";
import { CarouselMachine } from "../../components/CarouselMachine";
import { machineList } from "../../data/machineList";

export function Machines() {
    return (
        <Container>
            <Header />

            <CarouselMachine 
             machineList={machineList}
            />

            <NavMachine />
        </Container>
    )
}