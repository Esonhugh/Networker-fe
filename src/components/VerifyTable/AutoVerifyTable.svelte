<script>
    export let Ticket;

    import {apiBase} from "../../setting";

    let fetchurl = $apiBase + '/verify/' + Ticket;
    console.log(fetchurl)

    async function verifyHandler() {
        let res = await fetch(fetchurl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await res.json()
        console.log(data)
        if (data.statusCode === 200) {
            return data;
        } else {
            throw data;
        }
    }

    async function verifyEmailTicket() {
        const res = fetch(fetchurl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = res.json()
        if (res.ok) {
            return json
        } else {
            throw json
        }
    }
</script>

<div>
    {#await Promise}
        <pre>
            Authing ...
        </pre>
    {:then json}
        <pre>
            { json.ErrorMsg }
        </pre>
    {:catch err}
        <pre>
            { err.ErrorMsg }
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
    }
</style>
