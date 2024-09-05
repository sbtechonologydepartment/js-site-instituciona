import { Container } from "./style";

interface IPropsButton {
    text: string
    icon?: JSX.ElementType
}

export function Button(props: IPropsButton) {
    return(
        <Container>
            <span>{props.text}</span>
            {props.icon && <props.icon />}
        </Container>
    )
}