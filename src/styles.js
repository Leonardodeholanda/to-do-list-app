import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
`
export const AppContainer = styled.div`
    width: 390px;
    height: 844px;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 20px;
`
export const PerfilContainer = styled.div`
    img {
        width: 70px;
    }
    h3 {
        margin: 0 0 10px;
    }
`

export const DaysContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 25px;
    margin: 0;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .number-day {
        width: 25px;
        height: 25px;
        padding: 5px;
        background-color: #4D4117;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        margin: 0;
    }
    .week-day {
        font-size: 15px;
        letter-spacing: 2px;
        margin: 10px 0;
    }
`
export const SearchContainer = styled.div`
    display: flex;
    border: 2px solid #000;
    border-radius: 20px;
    button {
        border: none;
        border-radius: 20px 0 0 20px;
        background-color: #fff;
        cursor: pointer;
        padding: 0 10px;
        width: 40px;
        color: #DFBD43;
    }
    input {
        width: 100%;
        height: 40px;
        border-radius: 0 20px 20px 0;
        border: none;
        font-size: 20px;
        color: #000;
        padding-left: 10px;}

`
export const TodaysTasks = styled.h3`
    font-size: 20px;
    margin: 10px;
`
export const TasksContainer = styled.div`
    height: 60%;
    width: 100%;
    padding: 10px 0;
    ul {
        margin: 10px 0;
        padding: 0;
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
        input {
            cursor: pointer;
        }
        p {
            color: #000;
            font-size: 20px;
        }
        button {
            cursor: pointer;
            margin-left: auto;
            color: #DFBD43;
            border: none;
            background: none;
        }

`
export const MenuContainer = styled.div`
        
        width: 390px;
        background-color: #000;
        display: flex;
        gap: 10px;
        button {
            cursor: pointer;
            color: #DFBD43;
            border: none;
            background: none;
        }
`
export const AddContainer = styled.div`
        .plus-button {
}
        input {
            width: 80%;
        }
        .add-button {}
`