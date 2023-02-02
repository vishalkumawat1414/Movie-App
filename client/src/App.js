import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from '../src/pages/movieDeatil/MovieDetail'
function App() {
	return (
		<div className='App'>
			<Header />
			
			<Routes>
				
				<Route index element={<Home />}></Route>
				<Route path='movie/:id' element={<MovieDetail/>} />

				<Route path='movies/:type' element={<MovieList />} />
				<Route path='/*' element={<h1>error</h1>} />
			</Routes>
			
		</div>
	);
}

export default App;
