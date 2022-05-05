import styled from "styled-components";


export const Container = styled.div`
  height: 350px;
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
  padding: 40px 20px 0 20px;
  box-shadow: 0 0 10px rgba( 0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
`;

export const PTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  th{
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba( 0, 0, 0, 0.2);
  }
  tbody{
    width: 100%;
    .lineTable{
      text-align: left;
      border-bottom: 1px solid rgba( 0, 0, 0, 0.2);
      td{
        padding: 10px;
        text-align: left;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
`;

export const PaginationButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  gap: 4px;
  box-shadow: 0 0 3px 2px rgba(0,0,0,0.4);
  padding: 5px;
`;

export const PaginationItem = styled.div`
  &.active{
    box-shadow:  0 0 2px 2px rgba(0,0,0,0.4);
  }
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
