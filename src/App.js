import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';
import './styles/Tasks.css';

function App() {
  return (
    <div className="content-container content">
      <Form />
      <Tasks />
    </div>
  );
}

export default App;
