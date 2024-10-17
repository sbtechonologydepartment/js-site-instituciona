import znatureImage from '../assets/machines/maquina-exemplo.jpeg'
import vivaImage from '../assets/machines/viva-marrom.jpg'

export interface IMachineList{
    [key: string]: IMachine[]
}

export interface IMachine {
    machineBrand: string
    name: string
    image: string
    models: string[] 
    about: string
}

export const machineList: IMachineList = {
    juice: [
        {
            machineBrand: 'zummo',
            name: 'Z01-Nature',
            image: znatureImage,
            models: ['Z06', 'Z14', 'Z40'],
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum dolores libero, veritatis error, dignissimos a ratione nam facilis quod laboriosam assumenda fuga temporibus obcaecati non cupiditate eos recusandae voluptas animi! adipisicing elit. Nostrum dolores libero, veritatis error, dignissimos a ratione nam facilis quod laboriosam assumenda fuga temporibus obcaecati non cupiditate eos recusandae voluptas animi!'
        }, 
        {
            machineBrand: 'zummo',
            name: 'VIVA',
            image: vivaImage,
            models: [],
            about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum dolores libero, veritatis error, dignissimos a ratione nam facilis quod laboriosam assumenda fuga temporibus obcaecati non cupiditate eos recusandae voluptas animi! adipisicing elit. Nostrum dolores libero, veritatis error, dignissimos a ratione nam facilis quod laboriosam assumenda fuga temporibus obcaecati non cupiditate eos recusandae voluptas animi!'
        }
    ]
}
