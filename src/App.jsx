import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { FaTrashAlt, FaSearch, FaHome, FaCalendarAlt, FaBell, FaRegSun, FaPlus } from "react-icons/fa"
import { Container, AppContainer, PerfilContainer, DaysContainer,SearchContainer, TodaysTasks, TasksContainer, ItemsToDo, MenuContainer, AddContainer } from './styles'
function App() {
  const [list, setList] = useState([{id: uuid(), task: "nada"}])  
  const [task, setTask] = useState("")

  function inputChange(event) {
    setTask(event.target.value)
  }
  
  function buttonClick() {
    setList([...list, { id: uuid(), task}])
  }
  return (

    <Container>
      <AppContainer>

        <PerfilContainer>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"/>
          <h3>Good morning, Ivy</h3>
        </PerfilContainer>

        
        <DaysContainer>
          <div>
            <p className='number-day'>3</p>
            <p className='week-day'>Thu</p>
          </div>
          <div>
            <p className='number-day'>4</p>
            <p className='week-day'>Fri</p>
          </div>
          <div>
            <p className='number-day'>5</p>
            <p className='week-day'>Sat</p>
          </div>
          <div>
            <p className='number-day'>6</p>
            <p className='week-day'>Sun</p>
          </div>
          <div>
            <p className='number-day'>7</p>
            <p className='week-day'>Mon</p>
          </div>
          <div>
            <p className='number-day'>8</p>
            <p className='week-day'>Tue</p>
          </div>
          <div>
            <p className='number-day'>9</p>
            <p className='week-day'>Wed</p>
          </div>
        </DaysContainer>

        <SearchContainer>
      <button><FaSearch size={20}/></button>
      <input type='search' placeholder='Search'/>
        </SearchContainer>
      <TodaysTasks>Todays Tasks</TodaysTasks>

      <TasksContainer>
      <ul>
        {
          list.map((item) => 
            (
              <>
                
              <ItemsToDo key={item.id}>
                <input type='checkbox' />
                <p>{item.task}</p>
                <button><FaTrashAlt size={20}/></button>
                </ItemsToDo>
              </>
            )
          )
        }
      </ul>
      </TasksContainer>


      <MenuContainer>
      <button><FaHome size={20}/></button>

      <button><FaCalendarAlt size={20}/></button>

      <AddContainer>
      <button className='plus-button'><FaPlus size={20}/></button>
      <input onChange={inputChange} placeholder="What do I have to do?"/>
      <button className='add-button' onClick={buttonClick}>Add</button>
      </AddContainer>

      <button><FaBell size={20}/></button>
      <button><FaRegSun size={20}/></button>
      </MenuContainer>
      </AppContainer>
    </Container>

  )
}

export default App
