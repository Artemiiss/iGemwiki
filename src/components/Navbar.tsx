import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";

export function Navbar() {
  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
            >
              {subpage.name}
            </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          id="basic-nav-dropdown"
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      return (
        <Nav.Link key={`page-${pageIndex}`} as={Link} to={item.path}>
          {item.name}
        </Nav.Link>
      );
    }
  });

  return (
    <BootstrapNavbar expand="lg" className="navbar" fixed="top">
      <Container className="d-flex align-items-center">
        {/* 新增的 logo 部分 */}
        <div className="navbar-logos">
          <img src="https://static.igem.wiki/teams/5432/logo1.png" alt="Logo 1" className="navbar-logo" />
          <img src="https://static.igem.wiki/teams/5432/logo2.png" alt="Logo 2" className="navbar-logo" />
        </div>
        {/* 黑色背景的内容 */}
        <div className="navbar-content ms-auto">
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="left-aligned">{pages}</Nav>
          </BootstrapNavbar.Collapse>
        </div>
      </Container>
    </BootstrapNavbar>
  );
}
