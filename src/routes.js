// Components
import Home from './routes/Home.svelte'
import Config from './routes/Config.svelte'
import Others from "./routes/Others.svelte";
import Verify from "./routes/Verify.svelte";
import Auth from "./routes/Auth.svelte";
// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/config': Config,
    '/others/': Others,
    // '/verify/*': Verify,

    // Following is unfinished.....
    // Using named parameters, with last being optional
    '/verify/*': Verify,
    '/auth/*': Auth,

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    '/me': Home,

    // Catch-all, must be last
    '*': Home,
}