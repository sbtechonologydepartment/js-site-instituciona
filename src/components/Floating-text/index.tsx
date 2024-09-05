import { Container } from "./floating-text-style"

export function Floating_text() {
    const possibility_array: string[] = [ 'P', 'o', 's', 's', 'i', 'b', 'i', 'l', 'i', 'd', 'a', 'd', 'e', 's']
    const infinity_array: string[] = [ 'I', 'n', 'f', 'i', 'n', 'i', 't', 'a', 's']
    return(
        <Container>
            <div className="text" id="possibility">
                {
                    possibility_array.map((letter, index) => (
                            <span 
                             key={index}
                             style={
                                {
                                    '--float-distance' : `${index * 1}px`,
                                    '--animation-delay' : `${index * 100}ms`
                                } as React.CSSProperties}
                            >
                                {letter}
                            </span>
                        )
                    )
                }
            </div>
            <div className="text" id="infinity">
                {
                    infinity_array.map((letter, index) => (
                        <span
                         key={index}
                         style={
                            {
                                '--float-distance' : `${ index * 1}px`,
                                '--animation-delay' : `${index * 100}ms`
                            } as React.CSSProperties}
                        >
                            {letter}
                        </span>
                    ))
                }
            </div>
        </Container>
    )
}