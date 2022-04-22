import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        title: 'DN42 Config Server',
    }
});


export default app;