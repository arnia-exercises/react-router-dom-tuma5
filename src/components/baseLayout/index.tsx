import { Outlet } from "react-router-dom";
import Nav from "../nav";
import { Container, Footer } from "./styled";

export default function BaseLayout () {
  return (
    <div>
      <Nav />

      <Container>
        <Outlet />
      </Container>

      <Footer>
        Rodapé do meu site lindo e maravilhoso 😘
      </Footer>
    </div>
  )
}