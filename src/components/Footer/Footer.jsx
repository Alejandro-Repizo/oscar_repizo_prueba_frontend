import css from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={css['footer']}>
			<section>
				<ul>
					<li>
						<p>
							<strong>Lorem upsum dolor amet</strong>
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
							deserunt!
						</p>
					</li>
					<li>
						<p>
							<strong>Lorem upsum dolor amet</strong>
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
							deserunt!
						</p>
					</li>
					<li>
						<p>
							<strong>Lorem upsum dolor amet</strong>
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
							deserunt!
						</p>
					</li>
				</ul>
			</section>

			<section>
				<small>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
					<a href="#">Link here</a> Fugit, omnis?
				</small>
			</section>
		</footer>
	);
};
