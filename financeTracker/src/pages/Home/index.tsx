import './style.css';

export function Home() {
	return (
		<div class="home">
			<header>
				<h1>Home</h1>
			</header>
			<section>
				<h1>Tracking</h1>
				<Resource
					title="Spending"
					description="Graphing spending"
					href="/Spending"
				/>
				<Resource
					title="Gym"
					description="Tracking Gym."
					href=""
				/>
			</section>
			<footer></footer>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
