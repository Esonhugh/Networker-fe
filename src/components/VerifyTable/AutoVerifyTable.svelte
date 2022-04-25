<script>
    export let Ticket = "";

    import {apiBase} from "../../setting";

    let fetchurl = $apiBase + '/auth/verify/' + Ticket;

    async function verifyEmailTicket() {
        const res = await fetch(fetchurl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await res.json()
        if (res.ok) {
            return json
        } else {
            throw new Error(json)
        }
    }
</script>

<div>
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
