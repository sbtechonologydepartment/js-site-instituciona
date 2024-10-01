interface IColors {
    ORANGE_MAIN: string
    DARK_BLUE: string
    LIGHT_BLUE: string
    WHITE: string
    GRAY: string
    STRONG_GRAY: string
}

interface ITheme {
    COLORS: IColors
}

export interface IPropsTheme {
    theme: ITheme
}

export const Theme: ITheme = {
    COLORS: {
        ORANGE_MAIN: '#F75800',

        DARK_BLUE: '#0A1B23',
        LIGHT_BLUE: '#153D50',

        WHITE: '#FFFFFF',
        GRAY: '#F4F4F4',
        STRONG_GRAY: '#E1E1E1'

    }
}