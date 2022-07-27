import React from "react";

const ShowForm = () => {
	return (
		<main>
			<h1>Buscador de shows de TV</h1>
			<div className='search-container'>
				<input type='search' id='searchInput' />
				<button className='search-btn' id='searchBtn'>
					Buscar
				</button>
				<p className='thanks-text'>
					Esto es posible gracias a la API de
					<a target='_blank' href='https://www.tvmaze.com/api'>
						TV Maze
					</a>
				</p>
			</div>

			<section className='shows' id='shows'></section>

			<template id='template'>
				<article>
					<h3></h3>
					<div></div>
					<img />
					<br />
					<a></a>
				</article>
			</template>
		</main>
	);
};

export default ShowForm;
