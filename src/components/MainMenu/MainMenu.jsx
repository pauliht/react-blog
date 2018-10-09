  <Navbar light expand="md">
    <NavbarBrand href="/">Wuma17</NavbarBrand>
    <NavbarToggler onClick={e => this.toggle()} />
  <Collapse isOpen={this.collapseOpen} navbar>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/blog" activeClassName="active" >Blog</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/posts" activeClassName="active" >Posts</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>