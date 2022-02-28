// import logo from './logo.svg';
import './App.css';

// importing self made components
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Footer from './components/Footer';

function App() {
    return (
      <div className='App'>
        < Navbar title="Word Counter" about="React About" />
        < TextArea heading="Write Up"/>
        < Footer />
      </div>
    )
}

export default App;