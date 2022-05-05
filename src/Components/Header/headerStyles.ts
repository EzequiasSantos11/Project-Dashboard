import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 6rem;
  width: 100%;
  margin-bottom: 30px;
  .search{
    display: flex;
    align-items: center;
    width: 30%;
    position: relative;
    input{
      width: 100%;
      height: 40px;
      border-radius: 20px;
      border: 1px solid gray;
      outline: none;
      padding-left: 40px;
      padding-right: 20px;
    }
    img{
      position: absolute;
      left: 15px;
    }
  }
  .user{
    display: flex;
    align-items: center;
    .notification{
      display: flex;
      position: relative;
      cursor: pointer;
      img{
        height: 30px;
      }
      span{
        background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
        color: #FFF;
        font-size: 14px;
        border-radius: 50%;
        padding: 4px 6px;
        text-align: center;
        border: 2px solid #FFF;
        position: absolute;
        top: -10px;
        right: -19px;
      }
    }
    .userInfo{
      margin-left: 40px;
      cursor: pointer;
      img{
        height: 50px;
        border: 3px solid rgba( 0, 0, 0, 0.2);
        border-radius: 50%;
      }
    }
  }
`;