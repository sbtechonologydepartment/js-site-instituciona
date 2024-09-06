import { Container } from "./box-style";

interface IPropsBox {
    tittle: string
    text: string
    icon?: JSX.ElementType
}

export function Box(props: IPropsBox) {
    return(
        <Container>
            <strong>{props.tittle}</strong>

            <p>{props.text}</p>

            {props.icon && <props.icon />}
        </Container>
    )
}