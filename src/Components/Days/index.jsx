import { useState } from "react"
import { DaysContainer } from "./styles"

export function Days() {
  const [selectedDay, setSelectedDay] = useState(6)

  function handleDayClick(day) {
    setSelectedDay(day)
  }
    return (
        <DaysContainer>
          <div>
            <p className={selectedDay === 3 ? 'number-day selected' : 'number-day'}
    onClick={() => handleDayClick(3)}>3</p>
            <p className='week-day'>Thu</p>
          </div>
          <div>
            <p className={selectedDay === 4 ? 'number-day selected' : 'number-day'}
    onClick={() => handleDayClick(4)}>4</p>
            <p className='week-day'>Fri</p>
          </div>
          <div>
            <p className={selectedDay === 5 ? 'number-day selected' : 'number-day'}
    onClick={() => handleDayClick(5)}>5</p>
            <p className='week-day'>Sat</p>
          </div>
          <div>
            <p className={selectedDay === 6 ? 'number-day selected' : 'number-day'}
    onClick={() => handleDayClick(6)}>6</p>
            <p className='week-day'>Sun</p>
          </div>
          <div>
            <p className={selectedDay === 7 ? 'number-day selected' : 'number-day'}
    onClick={() => handleDayClick(7)}>7</p>
            <p className='week-day'>Mon</p>
          </div>
          <div>
            <p className={selectedDay === 8 ? 'number-day selected' : 'number-day'}
    onClick={() => handleDayClick(8)}>8</p>
            <p className='week-day'>Tue</p>
          </div>
          <div>
            <p className={selectedDay === 9 ? 'number-day selected' : 'number-day'}
    onClick={() => handleDayClick(9)}>9</p>
            <p className='week-day'>Wed</p>
          </div>
        </DaysContainer>
    )
}