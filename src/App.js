import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/Dishes/Dishes';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className='container'>
      <div className='block fixed'>
        <AllCategories />
        <Cart />
      </div>
      <div className='block left'>
        <Dishes />
      </div>
    </div>
  );
}

export default App;
