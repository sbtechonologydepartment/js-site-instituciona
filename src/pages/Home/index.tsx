import { Header } from "../../components/Header";
import { Container } from "./home-style";
import { Box } from "../../components/Box";
import { CarouselRunner } from "../../components/Carousel-runner";
import { TextPresentation } from "../../components/text-presentation";
import { SolutionBox } from "../../components/Solution-box";
import { LiaEyeSolid } from "react-icons/lia";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineHighQuality, MdFactory, MdComputer } from "react-icons/md";
import { FaArrowTrendUp} from "react-icons/fa6";
import { IoIosInfinite, IoIosHourglass } from "react-icons/io";
import { Button_link } from "../../components/Button-link";

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

            <CarouselRunner />

            <div>
                <div className="textRow">
                    <TextPresentation $leftright="left">
                        <strong>Com o <span>produto</span> certo grandes coisas acontecem</strong>
                    </TextPresentation>

                    <TextPresentation $leftright="right">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae leo eget velit pharetra convallis. Fusce vehicula, turpis ut placerat scelerisque, risus libero vestibulum massa, nec luctus justo risus eget lacus. Fusce vehicula, turpis ut placerat scelerisque, risus.
                        </p>
                    </TextPresentation>
                </div>
                <div className="textRow">
                    <TextPresentation $leftright="left">
                        <strong>redução do <span>tempo</span> e aumento da produtividade</strong>
                    </TextPresentation>

                    <TextPresentation $leftright="right">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae leo eget velit pharetra convallis. Fusce vehicula, turpis ut placerat scelerisque, risus libero vestibulum massa, nec luctus justo risus eget lacus. Fusce vehicula, turpis ut placerat scelerisque, risus.
                        </p>
                    </TextPresentation>
                </div>
                <div className="textRow">
                    <TextPresentation $leftright="left">
                        <strong>receita para alcançar o <span>sucesso</span></strong>
                    </TextPresentation>

                    <TextPresentation $leftright="right">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae leo eget velit pharetra convallis. Fusce vehicula, turpis ut placerat scelerisque, risus libero vestibulum massa, nec luctus justo risus eget lacus. Fusce vehicula, turpis ut placerat scelerisque, risus.
                        </p>
                    </TextPresentation>
                </div>
            </div>

            <div id="solutions">
                <div>
                    <strong>Nossas soluções</strong>

                    <p>
                        Nos comprometemos com a inovação, excelência e satifação do cliente. A máquina certa trás as soluções para fazer seu negócido alcançar o próximo nível.
                    </p>
                </div>

                <div>
                    <SolutionBox 
                     icon= {< MdOutlineHighQuality />}
                     title="Mais qualidade"
                     text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet itaque excepturi distinctio quasi commodi, ea ipsa assumenda"
                    />

                    <SolutionBox 
                     icon= {<FaArrowTrendUp />}
                     title="Rentabilidade"
                     text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet itaque excepturi distinctio quasi commodi, ea ipsa assumenda"
                     style= {{'--solution-box-delay': '500ms'} as React.CSSProperties}
                    />

                    <SolutionBox 
                     icon= {<MdFactory />}
                     title="Maior produtividade"
                     text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet itaque excepturi distinctio quasi commodi, ea ipsa assumenda"
                     style= {{'--solution-box-delay': '1s'} as React.CSSProperties}
                    />

                    <SolutionBox 
                     icon= {<MdComputer/>}
                     title="Inovação"
                     text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet itaque excepturi distinctio quasi commodi, ea ipsa assumenda"
                    />

                    <SolutionBox 
                     icon= {<IoIosInfinite />}
                     title="Automatização"
                     text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet itaque excepturi distinctio quasi commodi, ea ipsa assumenda"
                     style= {{'--solution-box-delay': '500ms'} as React.CSSProperties}
                     />

                    <SolutionBox 
                     icon= {<IoIosHourglass />}
                     title="Menos tempo"
                     text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet itaque excepturi distinctio quasi commodi, ea ipsa assumenda"
                     style= {{'--solution-box-delay': '1s'} as React.CSSProperties}
                    />
                </div>
            </div>

            <div id="work-together">
                <div>
                    <strong>Vamos trabalhar juntos?</strong>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus labore quaerat cumque ratione reiciendis pariatur voluptate veniam. Corporis pariatur, reprehenderit, hic, earum molestias corrupti quam ipsum saepe odit necessitatibus porro.
                    </p>
                </div>

                <div>
                    <Button_link
                     text="Comece agora"
                     to="/contact"
                     timeDealyAnimation="0s"
                    />
                </div>

            </div>
        </Container>
    )
}