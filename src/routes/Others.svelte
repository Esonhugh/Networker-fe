<script>
    import {GetJWTObj} from "../components/token";
    import Alert from "../components/AlertRedirect.svelte";
    import SimpleConfigList from "../components/ConfigTable/SimpleConfigList.svelte";
    import Card from '@smui/card';
    import {apiBase} from "../setting";

    export const name = "Others";
    let fetchUrl = $apiBase + "/peerinfo/list"

    async function getFriendsConfig() {
        const res = await fetch(fetchUrl, {
            method: "GET",
            mode: "cors",
            headers: {
                "Auth": localStorage.getItem("Token"),
            },
        });
        const data = await res.json()
        if (res.ok) {
            return data
        } else {
            throw data
        }
    }

    function verifyLogin() {
        return GetJWTObj() !== null;
    }
</script>

<div>
    {#if (verifyLogin())}
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
    {:else}
        <Alert open message="You are not login" url="#/auth/"/>
    {/if}
</div>

<style>
    h1 {
        text-align: center;
    }
    pre {
        text-align: center;
    }
</style>