import './App.css';
import Calculator from './components/calculator/calculator';

function App() {
  return (
    <div className="App bg-[#11aba4]">
      <section className="flex justify-center items-center w-full h-screen">
        <div className="w-full max-w-md h-full flex justify-center items-center flex-col">
          <Calculator />
        </div>
      </section>
    </div>
  );
}

export default App;
