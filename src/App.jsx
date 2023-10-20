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
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
							nesciunt! Eius dolor error eaque.
						</q>
						<q>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Architecto molestias repudiandae modi dolorem praesentium voluptas
							aliquam!
						</q>

						<button onClick={() => console.log("Go there...")}>
							Go there...
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24">
									<path d="M400-280v-400l200 200-200 200Z" />
								</svg>
							</span>
						</button>
					</div>

					<aside className="hero__aside">
						<div>
							<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
								<rect width="10" height="10">
									<animate
										attributeName="rx"
										values="0;10;0"
										dur="10s"
										repeatCount="indefinite"
									/>
								</rect>
							</svg>
						</div>
					</aside>
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
