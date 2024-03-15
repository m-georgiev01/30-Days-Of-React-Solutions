import './App.css';
import { FirstTask } from './components/first-task/FirstTask';
import { SecondTask } from './components/second-task/SecondTask';
import { ThirdTask } from './components/third-task/ThirdTask';

function App() {
  return (
    <div className="App">
      <FirstTask />
      <SecondTask />
      <ThirdTask />
    </div>
  );
}

export default App;
