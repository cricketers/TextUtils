import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />

      {/* default props
      <Navbar /> */}


{/* state */}
      <div className="container my-3">
        <TextForm heading="Enter your Text" />
      </div>
    </>
  );
}

export default App;
