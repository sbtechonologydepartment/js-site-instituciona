import { Container } from "./button-link-style";

interface IPropsButton {
    text: string
    icon?: JSX.ElementType
    to: string
}

export function Button_link(props: IPropsButton) {
    return(
        <Container to={props.to}>
            <span>{props.text}</span>
            {props.icon && <props.icon />}
        </Container>
    )
}