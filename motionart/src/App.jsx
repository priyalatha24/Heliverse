// App.jsx
import Navbar from './components/Navbar';
import CenteredText from './components/Hero';
import Rating from './components/Rating';
import  Magic  from './components/Magic'; // Import Magic as named export
import  Section  from './components/Section';
import Chrome from './components/Chrome';
import Lastpg from './components/Lastpg';
import Footer from './components/Footer';

function App() {
   return (
    <div>
      <Navbar />
      <CenteredText />
      <Rating />
      <Magic />
      <Section />
      <Chrome/>
      <Lastpg/>
      <Footer/>
    </div>
  );
}

export default App;
