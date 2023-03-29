
import './App.css';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';

function App() {
 
  return (
    <div className='flex bg-main h-full w-screen'>
      <Sidebar/>
      <main className='md:col-span-5'>
      <Navbar/>
      </main>
    </div>
  );
}

export default App;
