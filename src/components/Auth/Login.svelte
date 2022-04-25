<script>
    import Unfinished from "../Unfinished.svelte";

    import Button,{Label} from '@smui/button';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    let userLogin = {
        username: "",
        password: ""
    }
    async function Login(){
        alert("Submitted")
    }
</script>

<Unfinished/>
<div>
    <Textfield variant="outlined" bind:value={userLogin.username} label="Username">
        <HelperText slot="helper">Username</HelperText>
    </Textfield>
    <Textfield variant="outlined"  bind:value={userLogin.password} label="Password">
        <HelperText slot="helper">Password</HelperText>
    </Textfield>
</div>
<div>
    <Button on:click={Login} variant="raised">
        <Label>Submit</Label>
    </Button>
</div>

<style>
    div {
        margin: auto;
        padding: 2px;
    }
</style>