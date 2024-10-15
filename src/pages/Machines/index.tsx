import { Header } from "../../components/Header";
import { NavMachine } from "../../components/Nav-machine";
import { Container } from "./machines-styles";
import machineImageExample from '../../assets/machines/maquina-exemplo.jpeg'

export function Machines() {
    return (
        <Container>
            <Header />

            <div id="machine">
                <div>
                    <img src={machineImageExample} />
                </div>

                <div>
                    <div id="title-machine">
                        <p>ZUMMO</p>

                        <strong>Z01-Nature</strong>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum dolores libero, veritatis error, dignissimos a ratione nam facilis quod laboriosam assumenda fuga temporibus obcaecati non cupiditate eos recusandae voluptas animi! adipisicing elit. Nostrum dolores libero, veritatis error, dignissimos a ratione nam facilis quod laboriosam assumenda fuga temporibus obcaecati non cupiditate eos recusandae voluptas animi!
                    </p>

                    <div id="machine-variants">
                        <strong>Modelos</strong>

                        <div id="variants-row">
                            <div className="variant">
                                <span>Z06</span>
                            </div>

                            <div className="variant">
                                <span>Z14</span>
                            </div>

                            <div className="variant">
                                <span>Z40</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NavMachine />
        </Container>
    )
}