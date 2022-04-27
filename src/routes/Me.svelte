<script>
    // todo: main func of peers info set and get pages. Better Hava Config Generate component
    // page need Authed.
    import {GetJWTObj} from "../components/token";
    import Alert from "../components/AlertRedirect.svelte";
    import Main from '../components/MyConfig/main.svelte'

    function verifyLogin() {
        return GetJWTObj() !== null;
    }
</script>

<div>
    {#if (verifyLogin())}
        <Main/>
    {:else}
        <Alert open message="You are not login" url="#/auth/"/>
    {/if}
</div>