import "./Blog.scss";
@observer export default class Blog extends Component {

  @observable postToSet = '';
  @observable headToSet = '';

  start(){
    this.createStoreConnectedProperties({
      posts: []
    });
  }
  checkForEnter(e){
    if(e.key ==='Enter'){
      this.savePost();
    }
  }
 
  savePost(){
    this.posts.push({head: this.headToSet, text: this.postToSet});
}

  editTitel(e){
    this.headToSet = e.currentTarget.value;
  }

  editText(e){
    this.postToSet = e.currentTarget.value;
  }
  
}