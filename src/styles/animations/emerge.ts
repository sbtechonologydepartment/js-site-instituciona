import { keyframes } from "styled-components";

export const emerge = keyframes`
    from {
            opacity: 0;
            transform: translateY(-20px);
        }

    to { 
        opacity: 1;
        transform: translateY(0);
    }
`