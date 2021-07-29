import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/homepage/homepage'
import {Post} from './components/post/post'
import {TitleBar} from './components/titlebar/titlebar'

function App() {
  return (
    <div className="App">
    <TitleBar />
     <HomePage />
    </div>
  );
}

export default App;
