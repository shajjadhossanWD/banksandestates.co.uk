import Home from './Pages/Home/Home'
import { Route, Routes } from "react-router-dom";
<link href="/dist/output.css" rel="stylesheet" />

function App() {
  return (
    <div>
       <Routes>
         <Route path="/" element={<Home/>}/>
       </Routes>
    </div>
  );
}

export default App;
