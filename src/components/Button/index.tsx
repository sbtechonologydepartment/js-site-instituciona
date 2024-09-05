import { Container } from "./style";

interface IPropsButton {
    text: string
}

export function Button(props: IPropsButton) {
    return(
        <Container>
            {props.text}
        </Container>
    )
}