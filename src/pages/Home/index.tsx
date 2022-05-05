import { Header } from "../../Components/Header";
import { Container, Cards, Graphic } from "../../Styles/HomeStyles";
import {Table} from "../../Components/Table";
import {Chart} from "react-google-charts";

export default function Home(){
  const data = [
    ["Age", "Weight"],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7]
  ];
  return(
    <Container>
      <Header/>
      <Cards>
        <div className="card">
          <img src="/assets/CardsIcon/iconeRegistros.svg" alt="" />
          <div className="textCard">
            <h2>Unidades Registradas</h2>
            <span>1</span>
          </div>
        </div>
        <div className="card">
          <img src="/assets/CardsIcon/iconNovosClientes.png" alt="" />
          <div className="textCard">
            <h2>Novos Clientes</h2>
            <span>104</span>
          </div>
        </div>
        <div className="card">
          <img src="/assets/CardsIcon/iconVendasRealizadas.png" alt="" />
          <div className="textCard">
            <h2>Vendas Realizadas</h2>
            <span>7270</span>
          </div>
        </div>
        <div className="card">
          <img src="/assets/CardsIcon/iconLucro.png" alt="" />
          <div className="textCard">
            <h2>Lucro Liquido (Geral)</h2>
            <span>R$ 427.300.50</span>
          </div>
        </div>
      </Cards>
      <Graphic>
        <Chart
          chartType="ColumnChart"
          data={data}
          width="100%"
          height="400px"
          legendToggle
        />
      </Graphic>
      <Table/>
    </Container>
  )
}