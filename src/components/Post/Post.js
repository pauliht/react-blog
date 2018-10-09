export default class Post extends Component{
  start(){
    this.post = this.stores.Blog.posts.find(
      post => post.head === this.props.match.params.id
    )
  }
}