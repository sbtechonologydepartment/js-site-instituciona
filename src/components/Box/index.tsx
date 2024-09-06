import { Container } from "./box-style";

interface IPropsBox {
    tittle: string
    text: string
    Icon?: JSX.ElementType
    [key: string]: unknown
}

export function Box({text, Icon, tittle, ...rest}: IPropsBox) {
    return(
        <Container {...rest}>
            <strong>{tittle}</strong>

            <p>{text}</p>

            {Icon && <Icon />}
        </Container>
    )
}