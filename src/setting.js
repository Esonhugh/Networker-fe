import {readable, writable} from "svelte/store";

// 设置全局的只读 apiBase
export const apiBase = readable("//127.0.0.1:8080/api/v1")

export let isVerify = writable(false)