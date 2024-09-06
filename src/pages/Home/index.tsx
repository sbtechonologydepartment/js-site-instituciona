import { Header } from "../../components/Header";
import { Container } from "./home-style";
import { Box } from "../../components/Box";
import { IoTimer, } from "react-icons/io5";
import { IoMdListBox } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";

export function Home() {
    return (
        <Container>
            <Header />

            <div id="box-row">
                <Box
                 tittle='Tempo'
                 Icon={IoTimer}
                 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sit cumque ab quae ratione est ipsum rerum accusantium, consectetur nostrum aliquam iste nesciunt magni omnis? Doloribus tenetur ducimus vitae saepe? "
                />
                <Box
                 style={{
                    '--animation-cards-delay': '1s'
                 }}
                 tittle='Receita'
                 Icon={IoMdListBox}
                 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sit cumque ab quae ratione est ipsum rerum accusantium, consectetur nostrum aliquam iste nesciunt magni omnis? Doloribus tenetur ducimus vitae saepe?"
                />
                <Box
                 tittle='Inovação'
                 style={{
                    '--animation-cards-delay': '2s'
                 }}
                 Icon={FaLightbulb}
                 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sit cumque ab quae ratione est ipsum rerum accusantium, consectetur nostrum aliquam iste nesciunt magni omnis? Doloribus tenetur ducimus vitae saepe?"
                />
            </div>
        </Container>
    )
}