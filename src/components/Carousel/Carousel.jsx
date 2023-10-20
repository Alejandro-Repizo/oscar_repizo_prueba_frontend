	const data = [
		{
			title: "Lorem ipsum",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nihil illo consectetur est harum. Expedita nostrum suscipit maxime corporis ex? Excepturi iste sit dolore iusto quia cum quasi? Molestiae, eius?",
		},
		{
			title: "Lorem ipsum",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nihil illo consectetur est harum. Expedita nostrum suscipit maxime corporis ex? Excepturi iste sit dolore iusto quia cum quasi? Molestiae, eius?",
		},
		{
			title: "Lorem ipsum",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nihil illo consectetur est harum. Expedita nostrum suscipit maxime corporis ex? Excepturi iste sit dolore iusto quia cum quasi? Molestiae, eius?",
		},
		{
			title: "Lorem ipsum",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nihil illo consectetur est harum. Expedita nostrum suscipit maxime corporis ex? Excepturi iste sit dolore iusto quia cum quasi? Molestiae, eius?",
		},
		{
			title: "Lorem ipsum",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nihil illo consectetur est harum. Expedita nostrum suscipit maxime corporis ex? Excepturi iste sit dolore iusto quia cum quasi? Molestiae, eius?",
		},
		{
			title: "Lorem ipsum",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nihil illo consectetur est harum. Expedita nostrum suscipit maxime corporis ex? Excepturi iste sit dolore iusto quia cum quasi? Molestiae, eius?",
		},
		{
			title: "Lorem ipsum",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nihil illo consectetur est harum. Expedita nostrum suscipit maxime corporis ex? Excepturi iste sit dolore iusto quia cum quasi? Molestiae, eius?",
		},
		{
			title: "Lorem ipsum",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nihil illo consectetur est harum. Expedita nostrum suscipit maxime corporis ex? Excepturi iste sit dolore iusto quia cum quasi? Molestiae, eius?",
		},
		{
			title: "Lorem ipsum",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nihil illo consectetur est harum. Expedita nostrum suscipit maxime corporis ex? Excepturi iste sit dolore iusto quia cum quasi? Molestiae, eius?",
		},
	];

	import {useRef} from "react";
	import css from "./Carousel.module.css";

	export const Carousel = () => {
		const ref = useRef();

		// Mapeamos los datos y generamos un nuevo arreglo de tarjetas con un ID único.
		const cards = data.map((card) => ({
			id: window.crypto.randomUUID(),
			...card,
		}));

		// Función para desplazar hacia la derecha.
		const scrollRight = () => {
			if (ref.current) {
				ref.current.scrollLeft += 330; // Incrementa el desplazamiento horizontal en 330 píxeles.
			}
		};

		// Función para desplazar hacia la izquierda.
		const scrollLeft = () => {
			if (ref.current) {
				ref.current.scrollLeft -= 330; // Decrementa el desplazamiento horizontal en 330 píxeles.
			}
		};

		return (
			<div className={css["wrapper"]}>
				<div className={css["carousel"]} ref={ref}>
					{cards.map((card) => (
						<article key={card.id} className={css["card"]}>
							<div className={css["card__image"]}></div>
							<h2>{card.title}</h2>
							<p>{card.content}</p>
						</article>
					))}
				</div>
				<button
					className={`${css["button"]} ${css["button--left"]}`}
					onClick={scrollLeft}
					aria-label="Izquierda">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 -960 960 960"
						width="24">
						<path d="M560-280 360-480l200-200v400Z" />
					</svg>
				</button>
				<button
					className={`${css["button"]} ${css["button--right"]}`}
					onClick={scrollRight}
					aria-label="Derecha">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 -960 960 960"
						width="24">
						<path d="M400-280v-400l200 200-200 200Z" />
					</svg>
				</button>
			</div>
		);
	};
