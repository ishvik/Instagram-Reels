import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Signup from './Components/Signup';

function App() {
  return (
    <AuthProvider>
    <Signup/>
    {/* <Login/> */}
    </AuthProvider>
  );
}

export default App;
