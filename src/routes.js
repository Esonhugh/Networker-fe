// Components
import Home from './routes/Home.svelte'

// Export the route definition object
export default {
    // Exact path
    '/': Home,

    // Using named parameters, with last being optional
    '/hello/:first/:last?': Home,

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    '/wild': Home,
    '/verify/*': Home,

    // Catch-all, must be last
    '*': Home,
}