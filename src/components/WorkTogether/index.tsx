import { Button_link } from "../Button-link"
import { Container } from "./workTogether-styles"

export function WorkTogether() {
    return (
        <Container id="work-together">
            <div>
                <strong>Vamos trabalhar juntos?</strong>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus labore quaerat cumque ratione reiciendis pariatur voluptate veniam. Corporis pariatur, reprehenderit, hic, earum molestias corrupti quam ipsum saepe odit necessitatibus porro.
                </p>
            </div>

            <div>
                <Button_link
                    text="Comece agora"
                    to="/contacts"
                    timeDealyAnimation="0s"
                />
            </div>

        </Container>
    )
}