<script>
    export const name = 'Config';
    import Card from '@smui/card';
    import {apiBase} from "../setting";
    import ConfigTable from "../components/ConfigTable/ConfigTable.svelte";

    let configUrl = $apiBase + '/config';

    async function getAdminConfig() {
        const res = await fetch(configUrl);
        const text = await res.json();
        if (res.ok) {
            return text;
        } else {
            throw text;
        }
    }
</script>

<div>
    <Card>
        <h1> Admin Config </h1>
        <!-- <ConfigTable/> -->
            {#await getAdminConfig()}
                <pre> Loading Admin Config .... </pre>
            {:then text}
                <ConfigTable configData="{text}"/>
            {:catch e}
                <pre> Loading Error: {e.errormsg} </pre>
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