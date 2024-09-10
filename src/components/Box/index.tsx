import { Container } from "./box-style";

interface IPropsBox {
    tittle: string
    text: string | string[]
    Icon?: JSX.ElementType
    [key: string]: unknown
}

export function Box({text, Icon, tittle, ...rest}: IPropsBox) {
    return(
        <Container {...rest}>
            <div>
                <strong>{tittle}</strong>

                {
                    Array.isArray(text) ?
                    <ul>
                        {
                            text.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                    :
                    <p>{text}</p>
                }
            </div>

            {Icon && <Icon />}
        </Container>
    )
}