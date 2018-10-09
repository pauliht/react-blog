  <Navbar light expand="md">
    <NavbarBrand to="/blog">Blog</NavbarBrand>
    <NavbarToggler onClick={e => this.toggle()} />
  <Collapse isOpen={this.collapseOpen} navbar>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/posts" activeClassName="active" >Posts</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>