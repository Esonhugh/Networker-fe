<script>
    import Card from '@smui/card';
    import Button,{Label} from '@smui/button';
    import {GetUsername,DeleteToken} from "../token";
    import Alert from "../Alert.svelte";
    let open = false;
    function logoutRefresh (){
        DeleteToken();
        open = true;
    }
</script>

<div>
<Card>
    <h1>You are login, {GetUsername()}</h1>
    <p>if You need logout click
        <Button on:click={logoutRefresh} variant="raised">
            <Label>Logout</Label>
        </Button>
        <Alert bind:open message="You are successfully logout"/>
    </p>
</Card>
</div>

<style>
    h1 {
        text-align: center;
    }
    p {
        text-align: center;
    }
</style>
