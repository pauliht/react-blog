
//State handling - med MobX 
@observer export default class App extends Component {

  @observable veryBeautifulNames = [
    {_id: 0, name: 'Anna'},
    {_id: 1, name: 'Thomas'},
    {_id: 2, name: 'Julia'},
    {_id: 3, name: 'Louisa'}
  ];

  async start(){
    this.veryBeautifulNames.push({_id: 10, name:'Billie'});
  }
  
  render(){
    return (
      <Fragment>
      <h1>Hello!</h1>
      <p>Here are som very beautiful names:</p>
      <ul>
          {this.veryBeautifulNames.map((nameObj) => 
            <li key={nameObj._id}>{nameObj.name}</li>
          )}
      </ul>
      </Fragment>
    );
  }
}