import { Container } from "./carouselMachine-styles";
import machineImageExample from '../../assets/machines/maquina-exemplo.jpeg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function CarouselMachine() {
    return (
        <Container>
            <button className="arrow-button">
                <FaArrowLeft />
            </button>

            <div id="machine-image">
                <img src={machineImageExample} />
            </div>

            <div id="machine-text">
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

            <button className="arrow-button">
                <FaArrowRight />
            </button>

            <div id="buttons-carousel">
                <button className="active"></button>
                <button></button>
                <button></button>
            </div>
        </Container>
    )
}