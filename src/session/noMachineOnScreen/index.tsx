import { Container } from "./noMachineOnScreen-styles";
import { FaArrowDown } from "react-icons/fa";

export function NoMachineOnScreen() {
    return(
        <Container>
            <strong>Selecione uma das opções de máquina abaixo</strong>

            <FaArrowDown />
        </Container>
    )
}