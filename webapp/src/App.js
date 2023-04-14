import "./App.css";
import ListAllMovies from "./components/ListAllMovies";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import About from '../src/components/About'
import AddMovie from "./components/AddMovie";
import Footer from "./components/Footer";
import Search from "./components/Search";
function App() {
  return (
    <div>
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" Component={ListAllMovies} />
        <Route path="/about" Component={About} />
        <Route path="/addmovie" Component={AddMovie} />
        <Route path="/update-movie/:id" Component={AddMovie} />
        <Route path="/search" Component={Search} />
      </Routes>
      {/* <ListAllMovies /> */}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
