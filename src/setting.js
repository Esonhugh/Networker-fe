import {readable} from "svelte/store";

// 设置全局的只读 apiBase
export const apiBase = readable("//127.0.0.1/api/v1")