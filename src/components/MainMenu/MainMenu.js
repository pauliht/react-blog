import "./MainMenu.scss";

@withRouter @observer export default class MainMenu extends Component {
@observable collapseOpen = false;

toggle(){
  this.collapseOpen = !this.collapseOpen;
}
}
