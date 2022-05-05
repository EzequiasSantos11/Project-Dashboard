import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 40px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  gap: 10px;
  .card{
    display: flex;
    align-items: center;
    height: 88px;
    width: 100%;
    box-shadow: 0 0 5px rgba( 0, 0, 0, 0.3);
    img{
      height: 40px;
      width: 40px;
      margin: 0 10px;
    }
    .textCard{
      h2{
        font-size: 14px;
      }
    }
  }
`;


export const Graphic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 70px;
  height: 350px;
  box-shadow: 0 0 10px rgba( 0, 0, 0, 0.3);
`;
