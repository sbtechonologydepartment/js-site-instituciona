import { Header } from "../../components/Header";
import { Container } from "./home-style";
import { Box } from "../../components/Box";
import { TbTargetArrow } from "react-icons/tb";
import { LiaEyeSolid } from "react-icons/lia";
import { FaHandHoldingHeart } from "react-icons/fa";

export function Home() {
    return (
        <Container>
            <Header />

            <div id="box-row">
                <Box
                 tittle='Missão'
                 Icon={TbTargetArrow}
                 text="Impactar positivamente na vida dos colaboradores e cliente atráves do elo com os parceiros promovendo o crescimento de todos"
                />
                <Box
                 style={{
                    '--animation-cards-delay': '850ms'
                 }}
                 tittle='Visão'
                 Icon={LiaEyeSolid}
                 text="Expandir a operação com mais filiais no nordeste formando novos representantes comerciais que possam implantar novas soluções como micro negócios em nossos clientes visando o aumento do faturamento"
                />
                <Box
                 tittle='Valores'
                 style={{
                    '--animation-cards-delay': '1700ms'
                 }}
                 Icon={FaHandHoldingHeart}
                 text={["inovação", "confiança", "melhoria", "contínua", "eficiência"]}
                />
            </div>
        </Container>
    )
}