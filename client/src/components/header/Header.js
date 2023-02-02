import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
	return (
		<div className='header'>
			<div className='headerLeft'>
				<Link to='/'>
					<img
						className='header_icon'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'
						alt='icon'
					/>
				</Link>

				<Link to='/movies/popular' style={{ textDecoration: "none" }}>
					<span>Popular</span>
				</Link>
				<Link to='/movies/top_rated' style={{ textDecoration: "none" }}>
					<span>Top_Rated</span>
				</Link>
				<Link to='/movies/upcoming' style={{ textDecoration: "none" }}>
					<span>Upcoming</span>
				</Link>
			</div>
			<div className="headerRight">
				<h3 style={{color:"cyan-500"}}>Vishal</h3>
			</div>
		</div>
	);
}

export default Header;
