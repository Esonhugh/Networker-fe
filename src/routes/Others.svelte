<script>
    export const name = "Others";
    import SimpleConfigList from "../components/ConfigTable/SimpleConfigList.svelte";
    import Card from '@smui/card';
    import {apiBase} from "../setting";
    let fetchUrl = $apiBase + "/peerinfo/list"
    async function getFriendsConfig() {
        const res = await fetch(fetchUrl,{
            method: "GET",
            mode: "cors",
            headers: {
                "Auth": localStorage.getItem("Token"),
            },
        });
        const data = await res.json()
        if (res.ok){
            return data
        }else {
            throw data
        }
    }
</script>

<div>
    <Card>
        <h1>Config List</h1>
        {#await getFriendsConfig()}
            <pre>Loading....</pre>
        {:then json}
            <SimpleConfigList configList="{json}"/>
        {:catch err}
            <pre>{err.errormsg}</pre>
        {/await}
    </Card>
</div>

<style>
    h1 {
        text-align: center;
    }
    pre {
        text-align: center;
    }
</style>