import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import EventsData from "./data/upcoming-events.json";
import PageBoard from './components/PageBoard';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <PageBoard events={EventsData}/>
    </div>
  );
}

export default App;
