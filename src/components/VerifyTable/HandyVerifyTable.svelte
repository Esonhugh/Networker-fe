<script>
    import TextField from '@smui/textfield';
    import Button, {Label} from '@smui/button';
    import {apiBase} from "../../setting";

    export let Ticket = "";
    let send = false;

    async function verifyEmailTicket() {
        // window.href = window.location + '/' + Ticket;
        let fetchurl = $apiBase + '/auth/verify/' + Ticket;
        const res = await fetch(fetchurl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        send = true;
        const json = await res.json()
        if (res.ok) {
            return json
        } else {
            throw json
        }
    }

    function clearup() {
        setTimeout(function () {
            location.reload(true)
        }, 1000);
        return ""
    }
</script>

<div>
    <TextField bind:value={Ticket} label="Ticket">

    </TextField>
    <Button on:click={verifyEmailTicket}>
        <Label>Verify!</Label>
    </Button>
    {#if (send)}
        {#await verifyEmailTicket()}
        <pre>
            Authing ...
        </pre>
        {:then json}
        <pre>
            { json.errormsg }
        </pre>
        {:catch err}
        <pre>
            { err.errormsg }
        </pre>
        {/await}
        { clearup() }
    {/if}
</div>

<style>
    div {
        margin: auto;
        padding: 20px;
        text-align: center;
    }

    pre {
        text-align: center;
        font-family: "Microsoft Sans Serif", cursive;
        font-size: 2em;
        color: orangered;
    }
</style>
