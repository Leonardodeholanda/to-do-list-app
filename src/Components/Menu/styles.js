import styled from "styled-components"

export const MenuContainer = styled.div`
        background-color: #000;
        display: flex;
        justify-content: space-evenly;
        padding: 14px 10px;
        border-radius: 20px;
        button {
            cursor: pointer;
            color: #DFBD43;
            border: none;
            background: none;
            &:hover {
                opacity: 0.8;
            }
        }
`