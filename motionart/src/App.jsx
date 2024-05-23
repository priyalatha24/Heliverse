// App.jsx
import Navbar from './components/Navbar';
import CenteredText from './components/Hero';
import Rating from './components/Rating';
import  Magic  from './components/Magic'; // Import Magic as named export
import  Section  from './components/Section';
import Chrome from './components/Chrome';
import Lastpg from './components/Lastpg';
import Footer from './components/Footer';
import { FluidSimulation } from './FluidSimulation';


function App() {
   return (
    <div className='container'>
      {/* <canvas></canvas> */}
      <FluidSimulation/>
      
      <div className='foreground'>
      <Navbar />
      <CenteredText />
      <Rating />
      <Magic />
      <Section />
      <Chrome/>
      <Lastpg/>
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;
