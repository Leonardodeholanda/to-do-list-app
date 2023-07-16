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
        background-color: #f4f7f8;
        cursor: pointer;
        color: #DFBD43;
        margin-right: 5px;
        &:hover {
            opacity: 0.8;
        }
    }
    input {
        height: 40px;
        width: 100%;
        border-radius: 20px;
        border: none;
        font-size: 20px;
        color: #000;
        padding-left: 10px;
        outline: none;
        background-color: #f4f7f8;
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
    overflow-y: auto;
    &::-webkit-scrollbar {
  width: 5px;
}
    &::-webkit-scrollbar-track {
  background-color: #38a1691f;
}
    &::-webkit-scrollbar-thumb {
  background: #DFBD43;
  border-radius: 10px;
}

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
        padding: 0 5px;
        margin-bottom: 5px;
        margin-right: 5px;
        background-color: ${props => props.isFinished ? "#DFBD43" : "#f4f7f8"};
        opacity: ${props => props.isFinished ? "0.5" : "1"};
  filter: ${props => props.isFinished ? "grayscale(100%)" : "none"};
        
        .check-box {
            cursor: pointer;
            color: ${props => props.isFinished ? "#f4f7f8" : "#DFBD43"};
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
            color: ${props => props.isFinished ? "#f4f7f8" : "#DFBD43"};
            border: none;
            background: none;
        }
        button:hover {
            opacity: 0.8;
            
        }
`
export const NoTasks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30% 0;
    p {
        font-size: 20px;
        margin: 0;
    }
`