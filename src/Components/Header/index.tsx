import { Container } from "./headerStyles"

export function Header(){
  return(
    <Container>
      <div className="search">
        <input type="search" />
        <img src="/assets/HeaderIcons/searchIcon.png" alt="" />
      </div>
      <div className="user">
        <div className="notification">
          <img src="/assets/HeaderIcons/notificationIcon.png" alt="" />
          <span>10</span>
        </div>
        <div className="userInfo">
          <img src="https://github.com/ezequiassantos11.png" alt="" />
        </div>
      </div>
    </Container>
  )
}