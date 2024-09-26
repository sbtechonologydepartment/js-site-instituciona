import { Container } from "./input-syles";

interface IProps {
    [key: string]: unknown
}

export function Input({...rest}: IProps) {
    return(
        <Container {...rest} />
    )
}