import React, { useState, useEffect } from "react";
import ShowForm from "./ShowForm";

const ShowSearch = () => {
	//ESTADOS
	const [loader, setLoader] = useState(false);
	const [search, setSearch] = useState(null);
	const [shows, setShows] = useState(null);

	//useEffect que dispara la la peticion fetch, pero tendremos un btn que disparará el cambio en el estado search, que es la dependencia de este useEffect
	useEffect(() => {
		if (search === null) return;

		//haciendo peticion fetch a los datos
		const fetchData = async () => {
			const busqueda = search;

			//URL API
			let UrlApi = `https://api.tvmaze.com/search/shows?q=${busqueda}`;

			//mostrar loader
			setLoader(true);

			//peticion fetch y paso de datos a formato json
			let respuesta = await fetch(UrlApi);
			let json = await respuesta.json();
			//validacion
			if (json.length === 0) {
				alert("No hay resultados");
			} else {
				json.forEach((element) => {
					console.log(element);
				});
			}
		};
		fetchData()
	}, [search]);

	const handleClick = () => {
		setSearch("Breaking Bad");
	};

	return (
		<>
			<header>
				<div className='top-header'>
					{/* Para poder colocar una imagen debemos escribir su ruta como si comenzara en public(public sera el punto de partida de la ruta) */}
					<img src='/assets/tvm-header-logo.png' alt='logo TV Maze' />
					<div className='user-container'>
						<p>Login</p>
						<p>Register</p>
					</div>
				</div>
				<nav>
					<ul>
						<li>Shows</li>
						<li>Actors</li>
						<li>Episodes</li>
						<li>Networks</li>
						<li>Articles</li>
						<li>Calendar</li>
						<li>Forums</li>
					</ul>
				</nav>
			</header>
			<button onClick={handleClick}>Click Me!</button>
			<ShowForm></ShowForm>
		</>
	);
};

export default ShowSearch;
