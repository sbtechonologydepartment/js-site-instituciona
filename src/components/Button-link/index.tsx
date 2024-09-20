import { Container } from "./button-link-style";

interface IPropsButton {
    text: string
    Icon?: JSX.ElementType
    to: string
    timeDealyAnimation?: string
}

export function Button_link({to, text, timeDealyAnimation, Icon}: IPropsButton) {
    return(
        <Container 
         to={to}
         style={{'--button-animation-delay': `${timeDealyAnimation}`} as React.CSSProperties}
        >
            <span>{text}</span>
            {Icon && <Icon />}
        </Container>
    )
}