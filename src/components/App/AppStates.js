
//State handling - med MobX 
@observer export default class App extends Component {

@observable name= 'Pelle';

async start(){
  await sleep(5000);
  this.name='Anna';
  while(true){
    await sleep(200);
    this.name += '!';
  }
}

render(){
  return <h1>Hello {this.name}!</h1>
}

}
//State handling - Traditionellt sätt
// export default class App extends Component {
//   //extends skapa en react component
// 
// state = {name: 'Pelle'};
//   

// async changeState(){
//   await sleep(5000);
//   this.setState({name: 'Anna'});
// }

// render(){
//     return <h1> Hello {this.state.name}! </h1>
//   }
// }

  