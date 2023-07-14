import styled from "styled-components"

export const DaysContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .number-day {
        padding: 10px;
        background-color: #1c1f26;
        box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.4);
        text-align: center;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        margin: 0;
        &:hover {
            opacity: 0.8;
        }
    }
    .week-day {
        font-size: 15px;
        letter-spacing: 2px;
        margin: 10px 0;
    }
    .selected {
        background-color: #DFBD43;
        padding: 15px;
    }
`
