/*class Block extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reaveled: false,
            adjacent: 0,
            bomb: 0,
        }
    }
    render(){
        return (
            <h1>Hello React!</h1>
         );
    }
}; */

class App extends React.Component {
 render() {
    return (
        <div id="app">
            <h1>hi</h1>
        </div>
    );
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);