import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Home.css"
import MovieList from "../../components/MovieList/MovieList";
function Home() {
	const [popularMovies, setpopularMovies] = useState();

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
			);
			let jsonData = await response.json();
			await console.log(jsonData);
			await setpopularMovies(jsonData.results);
		} catch (e) {
			console.log(e, "error occured");
		}
	}
	return (
		<div>
			<Carousel
				showThumbs={false}
				autoPlay={true}
				infiniteLoop={true}
				transitionTime={2}
				showStatus={false}>
				{popularMovies?.map((movie) => (
					
					<Link key={movie.id}
						style={{ textDecoration: "none", color: "white" }}
						to={`/movie/${movie.id}`}>
						<div className='posterImage'>
							<img
								src={`https://image.tmdb.org/t/p/original${
									movie && movie.backdrop_path
								}`}
								alt='img'
							/>
						</div>
						<div className='posterImage__overlay'>
							<div className='posterImage__title'>
								{movie ? movie.original_title : ""}
							</div>
							<div className='posterImage__runtime'>
								{movie ? movie.release_date : ""}
								<span className='posterImage__rating'>
									{movie ? movie.vote_average : ""}
									<i className='fas fa-star' />{" "}
								</span>
							</div>
							<div className='posterImage__description'>
								{movie ? movie.overview : ""}
							</div>
						</div>
					</Link>
				))}
			</Carousel>
			<MovieList/>
		</div>
	);
}
export default Home;
