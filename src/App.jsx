import {Header, Footer, Forms, Carousel} from "@components";

export const App = () => {
	return (
		<>
			<main>
				<section className="hero">
					<Header />

					<div className="hero__content">
						<h1>Lorem ipsum</h1>
						<h2>Neque porro quisquam</h2>

						<q>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, nesciunt! Eius dolor error eaque.
						</q>
						<q>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto molestias repudiandae modi dolorem praesentium voluptas aliquam!</q>

						<button>Go there...</button>

					</div>

					<aside className="hero__aside"></aside>
				</section>

				<section className="cards">
					<Carousel />
				</section>

				<section className="form">
					<Forms />
				</section>
			</main>

			<Footer />
		</>
	);
};
