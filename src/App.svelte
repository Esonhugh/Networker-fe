<script>
	import routes from './routes'
	import Router from 'svelte-spa-router';

	import Drawer, {AppContent, Content, Header, Subtitle, Title} from '@smui/drawer';
	import List, {Item, Text} from '@smui/list';
	import Button, {Label} from '@smui/button';

	let open = false;

	import {GlobalRouter} from "./setting";
	// console.log(Object.keys(GlobalRouter))
</script>

<div class="drawer-container">
	<Drawer bind:open variant="dismissible">
		<Header>
			<Title> Menu </Title>
			<Subtitle> Service Navigator &nbsp;
				<!--
			<Button on:click={()=> (open = !open)} style="justify-content: flex-end">
				<Label> Close </Label>
			</Button>
			-->
			</Subtitle>
		</Header>
		<Content>
			<List>
				{#each Object.keys(GlobalRouter) as route }
					<Item href="#{route}">
						<!-- add # to Make Navigator work nice -->
						<Text>{ GlobalRouter[route] }</Text>
					</Item>
				{/each}
			</List>
		</Content>
	</Drawer>
	<AppContent class="app-content">
		<main class="main-content">
			<Button on:click={() => (open = !open)}>
				<Label> Menu {open?"<":">"} </Label>
			</Button>
			<Router {routes}/>
		</main>
	</AppContent>
</div>

<style>
	.drawer-container {
		position: relative;
		display: flex;
		height: 100%;
		width: 100%;
		border: 1px solid ;
		overflow: hidden;
		z-index: 0;
	}

	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}

	.main-content {
		overflow: auto;
		padding: 16px;
		height: 100%;
		box-sizing: border-box;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>