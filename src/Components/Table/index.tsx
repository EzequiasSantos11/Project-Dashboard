import { useEffect, useState } from "react";
import { Container, PTable, Pagination, PaginationButton, PaginationItem } from "./TableStyles";

type DataProps = {
  id: string,
  pedido: string,
  data: string,
  produtos: string,
  comprador: string,
  valor: string,
  status: string,
  acao: string, 
}


export function Table(){
  const [data, setData] = useState([]);
  const produtos: DataProps[] = [
    {id: "1", pedido: "1", data: "20/12/20", produtos: "4", comprador: "Ezequias", valor: "R$ 30,00", status: "fim", acao: "retirada" },
    {id: "2", pedido: "1", data: "20/12/20", produtos: "4", comprador: "Ezequias", valor: "R$ 30,00", status: "fim", acao: "retirada" },
    {id: "3", pedido: "1", data: "20/12/20", produtos: "4", comprador: "Ezequias", valor: "R$ 30,00", status: "fim", acao: "retirada" },
    {id: "4", pedido: "1", data: "20/12/20", produtos: "4", comprador: "Ezequias", valor: "R$ 30,00", status: "fim", acao: "retirada" },
    {id: "5", pedido: "1", data: "20/12/20", produtos: "4", comprador: "Ezequias", valor: "R$ 30,00", status: "fim", acao: "retirada" },
    {id: "6", pedido: "1", data: "20/12/20", produtos: "4", comprador: "Ezequias", valor: "R$ 30,00", status: "fim", acao: "retirada" },
  ]

  return(
    <Container>
      <PTable>
        <thead>
          <tr>
            <th>Pedido</th>
            <th>Data e horário</th>
            <th>Produtos</th>
            <th>Total</th>
            <th>Comprador</th>
            <th>Status do pedido</th>
            <th>Ação Recomendada</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(item =>(
            <tr className="lineTable" key={item.id}>
              <td>{item.pedido}</td>
              <td>{item.data}</td>
              <td>{item.produtos}</td>
              <td>{item.valor}</td>
              <td>{item.comprador}</td>
              <td>{item.status}</td>
              <td>{item.acao}</td>
            </tr>
          ))}
        </tbody>
      </PTable>
      <Pagination>
        <div>Total de Páginas 10</div>
        <PaginationButton>
          <PaginationItem className="active">1</PaginationItem>
          {/* <PaginationItem >2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>4</PaginationItem> */}
        </PaginationButton>
      </Pagination>
    </Container>
  )
}