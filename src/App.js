import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      {/* <UserDetails /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/:id" exact element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;