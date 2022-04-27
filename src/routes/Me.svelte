<script>
    // todo: main func of peers info set and get pages. Better Hava Config Generate component
    // page need Authed.
    import {GetJWTObj} from "../components/token";
    import Alert from "../components/AlertRedirect.svelte";
    import Main from '../components/MyConfig/main.svelte'

    function verifyLogin() {
        return GetJWTObj() !== null;
    }

    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImVzb25odWdocyIsImV4cCI6MTY1MTExMjczOCwiaXNzIjoiRXNvbmh1Z2gifQ.58QeVyp0HLvxJulvP4pmm9qMIAvb_7w76D9ndoLq_Lk
    /*
    {
    "Username": "esonhughs",
        "exp": 1651112738,
        "iss": "Esonhugh"
    }
    */
</script>

<div>
    {#if (verifyLogin())}
        <Main/>
    {:else}
        <Alert open message="You are not login" url="#/auth/"/>
    {/if}
</div>