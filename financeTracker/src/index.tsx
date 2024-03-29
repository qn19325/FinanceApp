import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { Spending } from './pages/Spending/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { Gym } from './pages/Gym/index.js';

export function App() {
	return (
		<div class="ui">
			<LocationProvider>
				<main>
					<Router>
						<Route default path="/Home" component={Home} />
						<Route path="/Spending" component={Spending} />
						<Route path='/Gym' component={Gym} />
					</Router>
				</main>
			</LocationProvider>
		</div>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}

const scale = document.querySelector('.scale');
const ui = document.querySelector('.ui');
const rootElement = document.getElementsByTagName('html')[0];

function resize() {
	const windowWidth = window.innerWidth;
	const scaleFactorX = windowWidth / 1920;

	const fontSize = 10 * scaleFactorX;

	rootElement.style.fontSize = `${fontSize}px`;
}

resize();

window.addEventListener('resize', resize);
