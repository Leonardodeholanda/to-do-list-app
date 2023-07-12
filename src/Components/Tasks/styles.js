import styled from "styled-components"

export const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid #000;
    border-radius: 30px;
    padding: 5px;
    margin: 0 10px;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.3);
    button {
        border: none;
        background-color: #fff;
        cursor: pointer;
        color: #DFBD43;
        margin-right: 5px;
        &:hover {
            opacity: 0.8;
        }
    }
    input {
        height: 40px;
        border-radius: 20px;
        border: none;
        font-size: 20px;
        color: #000;
        padding-left: 10px;
        outline: none;
    }

`
export const TodaysTasks = styled.h3`
    font-size: 20px;
    margin: 10px 10px 0;
`
export const TasksContainer = styled.div`
    height: 55%;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
    overflow-y: scroll;
    ul {
        margin: 10px 0;
        padding: 0;
    }
    h3 {
        text-align: center;
        margin: 50% 0;
    }
`
export const ItemsToDo = styled.li`
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        border: 2px solid #000;
        border-radius: 30px;
        padding: 5px;
        margin-bottom: 5px;
        background-color: ${props => props.isFinished ? "#0f0" : "#fff" };
        
        .check-box {
            cursor: pointer;
            color: #DFBD43;
            border: none;
            background: none;
        }
        p {
            color: #000;
            font-size: 20px;
        }
        .trash-button {
            cursor: pointer;
            margin-left: auto;
            color: #DFBD43;
            border: none;
            background: none;
        }
        button:hover {
            opacity: 0.8;
        }
`