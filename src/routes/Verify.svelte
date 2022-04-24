<script>

    export const name = 'Verify';
    import Card from "@smui/card";
    import HandyVerifyTable from "../components/VerifyTable/HandyVerifyTable.svelte";
    import AutoVerifyTable from "../components/VerifyTable/AutoVerifyTable.svelte";

    export let params = {};
    let Ticket = "";
    let NoAutoSend = true;
    if (params.wild === '*' || params.wild === '' || params.wild === null) {
        // 为 空 或者为 "*" 就手动验证
        Ticket = "";
    } else {
        Ticket = params.wild;
        NoAutoSend = false;
    }
</script>

<div>
    <Card padding>
        <h1>Verify Email Ticket</h1>
        {#if NoAutoSend}
            <HandyVerifyTable {Ticket}/>
        {:else }
            <AutoVerifyTable {Ticket}/>
        {/if}
    </Card>
</div>

<style>
    h1 {
        text-align: center;
    }
</style>