@observer export default class Posts extends Component {

  start(){  
    this.posts = this.stores.Blog.posts
  }
  remove(item){
    this.posts.splice(this.posts.indexOf(item), 1);
  }


}