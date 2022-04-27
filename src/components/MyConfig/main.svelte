<script>
    import Card from '@smui/card';

    import {apiBase} from "../../setting";
    import ChangeableConfigTable from "./ChangeableConfigTable.svelte";

    let MyConfigPath = $apiBase + '/peerinfo/me';

    let configData = {};

    // Get to Get POST to update
    async function GetMyConfig() {
        const res = await fetch(MyConfigPath, {
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


</script>

<div>
    <Card>
        <h1>My Config</h1>
        {#await GetMyConfig()}
            <p>Loading.. Data</p>
        {:then data}
                    <ChangeableConfigTable config="{data}"/>
        {:catch e}
            <p> { e.errormsg } </p>
        {/await}
    </Card>
</div>

<style>
    h1 {
        text-align: center;
        color: orangered;
    }
</style>