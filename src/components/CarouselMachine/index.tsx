import { Container } from "./carouselMachine-styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IMachine, IMachineList } from "../../data/machineList";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { NoMachineOnScreen } from "../../session/noMachineOnScreen";


interface IPropsCarouselMachine {
    machineList: IMachineList
}

export function CarouselMachine(props: IPropsCarouselMachine) {
    const { pathname } = useLocation()
    const [, ,machineType] = pathname.split('/');

    const [indexMachine, setIndexMachine] = useState<number>(0)
    const [machineData, setMachineData] = useState<IMachine[] | null>(null)
    const [ machineOnScreen, setMachineOnScreen ] = useState<IMachine | null>(null)

    function nextIndex() {
        if(machineData && (machineData.length - 1) > indexMachine) {
            setIndexMachine((prev) => prev + 1)
        }
    }
    
    function prevIndex() {
        if(0 < indexMachine) {
            setIndexMachine((prev) => prev - 1)
        }
    }

    function determineIndex(index: number) {
        setIndexMachine(index)
    }

    useEffect(() => {
        if(machineType && machineType !== 'machines') {
            setMachineData(props.machineList[`${machineType}`])
        } else {
            setMachineData(null)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [machineData, machineType, indexMachine])

    useEffect(() => {
        if (machineData !== null) {
            setMachineOnScreen((machineData as IMachine[])[indexMachine]);
        }
    }, [machineData, indexMachine]);

    return (
        machineData ? 
        (
            <Container>
                <button 
                    className="arrow-button"
                    onClick={prevIndex}
                >
                    <FaArrowLeft />
                </button>

                <div id="machine-image">
                    <img src={machineOnScreen ? machineOnScreen.image : '$'} />
                </div>

                <div id="machine-text">
                    <div id="title-machine">
                        <p>{machineOnScreen ? machineOnScreen.machineBrand : '$'}</p>

                        <strong>{machineOnScreen ? machineOnScreen.name : '$'}</strong>
                    </div>

                    <p>
                        {machineOnScreen ? machineOnScreen.about : '$'}
                    </p>

                    <div id="machine-variants">
                        <strong>Modelos</strong>

                        <div id="variants-row">
                            {
                                machineOnScreen ? machineOnScreen.models.map((model, index) => (
                                    <div 
                                    className="variant"
                                    key={index}
                                    >
                                        <span>{model}</span>
                                    </div>
                                ))
                                : null
                            }
                        </div>
                    </div>
                </div>

                <button 
                    className="arrow-button"
                    onClick={nextIndex}
                >
                    <FaArrowRight />
                </button>

                <div id="buttons-carousel">
                    {
                        machineData && machineData.map((_, index) => (
                            <button
                            className={index === indexMachine ? 'active' : ''}
                            key={index}
                            onClick={() => determineIndex(index)}
                            ></button>
                        ))
                    }
                </div>
            </Container>
        )
        : <NoMachineOnScreen />

    )
}