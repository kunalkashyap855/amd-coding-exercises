import './App.css';

import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <p><strong>Problem: </strong>Create an application that accepts words from a user and sorts the words alphabetically into four columns, vertically, then horizontally. The last row should be the only row that contains any empty cells if the number of words is not evenly divisible by 4.</p>
      <h3>Instructions</h3>
      <ul>
        <li>Enter your words below to be sorted and arranged in nx4 matrix</li>
        <li>Click "Arrange" / Enter to sort and arrange</li>
        <li>Click a word to remove it</li>
        <li>Click "Reset" to start over</li>
      </ul>
      <MainComponent />
    </div>
  );
}

export default App;
