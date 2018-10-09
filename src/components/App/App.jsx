 <Router>
  <Fragment>
    <header className="mb-5"><MainMenu /></header>
    <Container tag="main">
    <Route exact={true} path="/blog" component={Blog}></Route>
    <Route exact={true} path="/posts" component={Posts}></Route>



    </Container>
    <Container tag="footer">
      
     </Container>
  </Fragment> 
 </Router> 
