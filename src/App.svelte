<script>
	export let title;
	import routes from './routes'
	import Router from 'svelte-spa-router';
	import Drawer, {AppContent, Content} from '@smui/drawer';
	import List, {Item, Text} from '@smui/list';
</script>

<title>{title}</title>
<main>
	<Drawer>
		<Content>
			<List>
				{#each Object.keys(routes) as route}
					<Item
							href="{route}"
					>
						<Text>{routes[route].name}</Text>
					</Item>
				{/each}
			</List>
		</Content>
	</Drawer>
	<Router {routes}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>