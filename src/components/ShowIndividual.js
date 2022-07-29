import React from "react";
import ShowIndividualStyles from "../estilos/ShowIndividual.scss";

const ShowIndividual = ({ name, image, sintesis }) => {
	let sintesis2 = sintesis;
	let container = document.createElement("p");
	container.innerHTML = sintesis2;
	let texto = container.textContent || container.innerText || "";

	return (

			<article>
				<h3>{name}</h3>
				<div>
					<p>{texto}</p>
				</div>
				{/* 
			
			<img src={image}></img>
		*/}
				{image ? (
					<img src={image.medium}></img>
				) : (
					<img src='http://static.tvmaze.com/images/no-img/no-img-portrait-text.png'></img>
				)}
			</article>

	);
};

export default ShowIndividual;
