import { Nav } from "./NavStyles";

export function Navigation(){
  return(
    <Nav>
      <div className="logo">
        <img src="/assets/label.png" alt="" />
      </div>
      <ul>
        <li>
          <img src="/assets/NavBarIcon/iconeDashboard.png" alt="" />
        </li>
        <li>
          <img src="/assets/NavBarIcon/iconePedidos.png" alt="" />
          Pedidos
        </li>
        <li>
          <img src="/assets/NavBarIcon/iconeProdutos.png" alt="" />
          Produtos
        </li>
        <li>
          <img src="/assets/NavBarIcon/iconeClientes.png" alt="" />
          Clientes
        </li>
        <li>
          <img src="/assets/NavBarIcon/iconeFinanceiro.png" alt="" />
          Financeiro
        </li>
        <li>
          <img src="/assets/NavBarIcon/iconeUsuarios.png" alt="" />
          Usuários
        </li>
      </ul>
      <button>
        <img src="/assets/NavBarIcon/iconeLogout.png" alt="" />
        Logout
      </button>
    </Nav>
  )
}