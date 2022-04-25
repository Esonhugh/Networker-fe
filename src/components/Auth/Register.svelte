<script>
    import Alert from "../Alert.svelte";

    import Button,{Label} from '@smui/button';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';

    import {apiBase} from "../../setting";
    let userReg = {
        username: "",
        password: "",
        email: ""
    }
    let open = false;
    let fetchUrl = $apiBase + '/auth/register'
    let returns = "";
    async function Register(){
        const res = await fetch(fetchUrl,{
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(userReg)
        })
        open = true;
        const json = await res.json()
        if(res.ok){
            returns = json.errormsg
            return json
        }else {
            returns = json.errormsg
            throw json
        }

    }
</script>

<div>
    <Textfield variant="outlined" bind:value={userReg.username} label="Username">
        <HelperText slot="helper">Username</HelperText>
    </Textfield>
    <Textfield variant="outlined" bind:value={userReg.password} label="Password">
        <HelperText slot="helper">Password</HelperText>
    </Textfield>
    <Textfield variant="outlined" bind:value={userReg.email} label="Email">
        <HelperText slot="helper">Email</HelperText>
    </Textfield>
</div>
<div>
    <Button on:click={Register} variant="raised">
        <Label>Submit</Label>
    </Button>
    <Alert bind:open message="{returns}"/>
</div>


<style>
    div {
        margin: auto;
        padding: 20px;
    }
</style>