import {readable} from "svelte/store";

// 设置全局的只读 apiBase
export const apiBase = readable("//127.0.0.1:8090/api/v1")

// Router is Cleaned that Routes.js
export const GlobalRouter = {
    '/': 'Home',
    '/config': 'Config',
    '/auth/': 'Auth',
    '/me/': 'Me',
    '/others/': 'Other Friends',
}