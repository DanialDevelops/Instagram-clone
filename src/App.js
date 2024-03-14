import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav/nav'
import Timeline from './timeline/timeline'

function App() {
  return (
    <div className="App d-flex">
      <Nav />
      <Timeline />
    </div>
  );
}

export default App;
