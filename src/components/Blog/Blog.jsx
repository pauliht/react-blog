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
{(this.showMessage) && (
    <div>
      Posted!
    </div>
)}
  </Form>
 

</Fragment>