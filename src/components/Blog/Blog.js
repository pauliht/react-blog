import "./Blog.scss";
@observer export default class Blog extends Component {

  @observable postToSet = '';
  @observable headToSet = '';

  start(){
    this.createStoreConnectedProperties({
      head: '',
      post: ''
    });
  }
  checkForEnter(e){
    if(e.key ==='Enter'){
      this.savePost();
    }
  }
 
  savePost(){
  this.head = this.headToSet;
  this.post = this.postToSet;
}

  editTitel(e){
    this.headToSet = e.currentTarget.value;
  }

  editText(e){
    this.postToSet = e.currentTarget.value;
  }

  deleteStore(){
    delete this.store.post;
    delete this.store.head;
  }
  
}