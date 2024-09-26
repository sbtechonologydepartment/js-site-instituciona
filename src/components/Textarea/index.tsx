import { Container } from "./textarea-styles";

interface IProps {
    [key:string]: unknown
}

export function Textarea({...props}: IProps) {
    return(
        <Container maxLength={200} {...props}/>
    )
}