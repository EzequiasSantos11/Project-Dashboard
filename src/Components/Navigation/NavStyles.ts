import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 20px;
  width: 40%;
  max-width: 256px;
  box-shadow: 0 5px 5px rgba( 0, 0, 0, 0.8);
  position: fixed;
  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
  }
  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    margin-left: 20px;
    li{
      display: flex;
      align-items: center;
      font-size: 19px;
      font-weight: "Lato", sans-serif;
      cursor: pointer;
      color: #52575c;
      img{
        margin-right: 17px;
      }
    }
  }
  button{
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 30px;
    right: 0;
    width: 90%;
    gap: 15px;
    font-size: 19px;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    color: #52575c;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
`;