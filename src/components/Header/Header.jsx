import css from "./Header.module.css";

export const Header = () => {
	return (
		<header className={`${css["header"]} wrapper`}>
			<nav className={css['nav']} aria-label="main">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
					<a href="#">Pages</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
