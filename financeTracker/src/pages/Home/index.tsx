import './style.css';

export function Home() {
	return (
		<div class="home">
			<h1>Home</h1>
			<section>
				<h1>Tracking</h1>
				<Resource
					title="Spending"
					description="Graphing spending"
					href="/Spending"
				/>
				<Resource
					title="Net Worth"
					description="Graphing net worth."
					href=""
				/>
			</section>
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
