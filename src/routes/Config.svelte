<script>
    export const name = 'Config';
    import Card from '@smui/card';
    import {apiBase} from "../setting";
    import ConfigTable from "../components/ConfigTable.svelte";

    let configUrl = $apiBase + '/config';

    async function getAdminConfig() {
        const res = await fetch(configUrl);
        const text = res.json();
        if (res.StatusCode === 200) {
            return text;
        } else {
            throw text;
        }
    }
</script>

<div>
    <Card>
        <h1> Admin Config </h1>
        <ConfigTable/>
        <!--
            {#await getAdminConfig()}
                <p> Loading Admin Config .... </p>
            {:then text}
                <ConfigTable {text}/>
            {:catch e}
                <p> Loading Error: {e.ErrorMsg} </p>
            {/await}
            -->
    </Card>
</div>

<style>
    h1 {
        text-align: center;
    }
</style>