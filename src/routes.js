// Components
import Home from './routes/Home.svelte'
import Config from './routes/Config.svelte'

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/config': Config,

    // Using named parameters, with last being optional
    '/login': Home,

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    '/me': Home,
    '/verify/': Home,

    // Catch-all, must be last
    '*': Home,
}