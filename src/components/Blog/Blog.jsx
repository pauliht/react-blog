<Fragment>
  <h1>Welcome</h1>


  <Form>

    <FormGroup>
      <Label for="titel">Headline</Label>
      <Input
        type="text"
        id="titel"
        placeholder="Write here..."
        value={this.headToSet}
        onChange={e => this.editTitel(e)}
        onKeyPress={e => this.checkForEnter(e)}/>
    </FormGroup>

    <FormGroup>
      <Label for="text">Post</Label>
      <Input
        type="textarea"
        id="text"
        placeholder="Write here..."
        value={this.postToSet}
        onChange={e => this.editText(e)}
        onKeyPress={e => this.checkForEnter(e)}/>
    </FormGroup>

    <Button
      onClick={(e) => { this.savePost(); }}>
      Post
    </Button>

  </Form>



  <Media
    className="mt-5"
    id="post">

    <Media body>
      <Media heading>
        {this.head}
      </Media>
      {this.post}
    </Media>

    <Button
      id="delete-btn"
      onClick={(e) => { this.deleteStore(); }}>
      Delete Post
    </Button>
    
  </Media>


</Fragment>