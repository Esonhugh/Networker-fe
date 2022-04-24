import {readable, writable} from "svelte/store";

// 设置全局的只读 apiBase
export const apiBase = readable("//127.0.0.1:8090/api/v1")

// Router is Cleaned that Routes.js
export const GlobalRouter = {
    '/': 'Home',
    '/config': 'Config',
    '/Auth/': 'Auth',
    '/others/': 'Others',
    // '/verify/*': Verify,

    // Following is unfinished.....
    // Using named parameters, with last being optional

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)

    // Catch-all, must be last
}