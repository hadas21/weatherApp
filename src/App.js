import './App.css';
import Poster from './components/Poster'
import Info from './components/Info'


const layout = {
	display: 'flex',
	justifyContent: 'center',
  	flexFlow: 'row nowrap',
	border: 'red'
}


function App() {
  return (
    <main className="App" style={layout}>
	<Poster></Poster>
	<Info></Info>
	
</main>
  );
}

export default App;
