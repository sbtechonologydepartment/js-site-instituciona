import { Header } from "../../components/Header";
import { Container } from "./aboutUs-styles";
import sandrasPhoto from '../../assets/fotos/sandra.jpg'
import joaosPhoto from '../../assets/fotos/joao-paulo.jpg'
import { Founder } from "../../components/Founder";

export function AboutUs() {

    return(
        <Container>
            <Header />
            
            <strong>Quem somos</strong>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            <div id="div-start">
                <div id="company-numbers">
                    <div className="numbers">
                        <strong>450+</strong>
                        <p>Empresas atendidas</p>
                    </div>

                    <div className="numbers">
                        <strong>20+</strong>
                        <p>Cidades de atuação</p>
                    </div>

                    <div className="numbers">
                        <strong>1000+</strong>
                        <p>Máquinas vendidas</p>
                    </div>
                </div>

                <hr />

                <div>
                    <div>
                        <span>Uma visão de futuro</span>

                        <p>
                            Temos o objetivo de levar a modernização para sua empresa. Com um arsenal diversificado de máquinas, encontraremos aquela que mais se encaixa para seu negócio.
                        </p>
                    </div>

                    <div>
                        <span>Um parceiro a longo prazo</span>
                        
                        <p>
                            O equipamento ideal será o maior aliado daquela empresa, servindo como um parceiro dos négocios que tem como foco aumentar a produtividade.
                        </p>
                    </div>
                </div>

                <div id="founders">
                    <strong>Fundadores</strong>

                    <Founder 
                     name="João Paulo"
                     photoWay={joaosPhoto}
                     altImg="Imagem do fundador João Paulo"
                     textAbout="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum cum totam aliquam veritatis accusamus repudiandae id corporis, voluptas et natus tempore delectus commodi, nulla fuga dicta hic voluptate tempora."
                     leftOrRight="left"
                    />
                    <Founder 
                     name="Sandra Barbosa"
                     photoWay={sandrasPhoto}
                     altImg="Imagem da fundadora Sandra Barbosa"
                     textAbout="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum cum totam aliquam veritatis accusamus repudiandae id corporis, voluptas et natus tempore delectus commodi, nulla fuga dicta hic voluptate tempora."
                     leftOrRight="right"
                    />
                </div>

                <div id="our-history">
                    <strong>Nossa história</strong>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quisquam nobis voluptate distinctio dignissimos harum quo tempora, voluptates quam rem officia quis quidem perferendis eveniet provident sint placeat, totam explicabo.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quisquam nobis voluptate distinctio dignissimos harum quo tempora, voluptates quam rem officia quis quidem perferendis eveniet provident sint placeat, totam explicabo.
                    </p>
                </div>
            </div>

        </Container>
    )
}