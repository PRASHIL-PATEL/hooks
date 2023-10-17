import './App.css';
import UseState from './components/UseState';
import UseStateObject from './components/UseStateObject';
import UseRef from './components/UseRef';
import UseTimer from './components/UseTimer';
import DataFeching from './components/DataFeching';


function App() {
  return (
   <>
   <div className='App container'>
    <UseState />
    <UseStateObject />
    <UseRef  />
    <UseTimer />
    <DataFeching />
   </div>
   </>
  );
}

export default App;
