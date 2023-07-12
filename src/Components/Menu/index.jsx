import { FaHome, FaCalendarAlt, FaBell, FaRegSun } from "react-icons/fa"
import { MenuContainer } from "./styles"
export function Menu() {
  return (
    <MenuContainer>
      <button><FaHome size={30} /></button>
      <button><FaCalendarAlt size={30} /></button>
      <button><FaBell size={30} /></button>
      <button><FaRegSun size={30} /></button>
    </MenuContainer>
  )
}