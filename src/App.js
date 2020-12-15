import './App.css';
import Contact from './Contact.js';

function App() {

  const c = {
    name: "Alexandera",
    phone: "666777888"
  }

  return (
    <div className="App">
      <h1>Contacts App</h1>
      <Contact contact={c}/>
    </div>
  );
}

export default App;
