
//State handling - med MobX 
@observer export default class App extends Component {

    @observable name = 'Pelle';
    
    veryBeautifulNames = [
      'Anna',
      'Thomas',
      'Julia'
    ];

    ratherBeautifulNames = [
      'Paulina',
      'Sara',
      'Caroline'
    ]

    async start(){
      await sleep(5000);
      this.name='Anna';
    }
    
    render(){
      return (
        <Fragment>
        <h1>Hello {this.name}!</h1>
        {
          (this.veryBeautifulNames.includes(this.name) &&
          <p>You have a very beautiful name!</p>) || 

          (this.ratherBeautifulNames.includes(this.name) && 
          <p>You have a rather beautiful name!</p>) || 

          <p>You have a ok name!</p>
        }
        </Fragment>
      );
    }
  }