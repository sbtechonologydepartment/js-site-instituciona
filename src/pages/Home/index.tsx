import { Header } from "../../components/Header";
import { Container } from "./home-style";
import { Box } from "../../components/Box";

export function Home() {
    return (
        <Container>
            <Header />

            <div id="box-row">
                <Box
                 tittle='Tempo'
                 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sit cumque ab quae ratione est ipsum rerum accusantium, consectetur nostrum aliquam iste nesciunt magni omnis? Doloribus tenetur ducimus vitae saepe?"
                />
                <Box
                 tittle='Receita'
                 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sit cumque ab quae ratione est ipsum rerum accusantium, consectetur nostrum aliquam iste nesciunt magni omnis? Doloribus tenetur ducimus vitae saepe?"
                />
                <Box
                 tittle='Inovação'
                 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sit cumque ab quae ratione est ipsum rerum accusantium, consectetur nostrum aliquam iste nesciunt magni omnis? Doloribus tenetur ducimus vitae saepe?"
                />
            </div>
        </Container>
    )
}