<script>
    export const name = "Others";
    import SimpleConfigList from "../components/SimpleConfigList.svelte";
    import Card from '@smui/card';
</script>

<div>
    <Card>
        <h1>Config List</h1>
        <SimpleConfigList/>
    </Card>
</div>

<style>
    h1 {
        text-align: center;
    }
</style>