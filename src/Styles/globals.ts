import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  body{
    background: #f6f8fb;
  }
  .dashboard{
    display: flex;
    width: 100%;
    padding-left: 18%;
  }
`;