<script>
    import Alert from "../Alert.svelte";

    import Button, {Label} from '@smui/button';
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
    let recheckpass = "";
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
    <Textfield
            bind:value={userReg.email}
            label="Email"
            type="email"
            variant="outlined"
    >
        <HelperText slot="helper">Email.used to contact you.</HelperText>
    </Textfield>
    <Textfield
            bind:value={userReg.username}
            label="Username"
            type="username"
            variant="outlined"
    >
        <HelperText slot="helper">Username.length in range(4,20)</HelperText>
    </Textfield>
    <Textfield
            bind:value={userReg.password}
            label="Password"
            type="password"
            variant="outlined"
    >
        <HelperText slot="helper">Password.length in range(8,20)</HelperText>
    </Textfield>
    <Textfield
            bind:value={recheckpass}
            label="Password Again"
            type="password"
            variant="outlined"
    >
        <HelperText slot="helper">Equal to the password</HelperText>
    </Textfield>
    {#if (recheckpass !== userReg.password)}
        <p>Password are not equal</p>
    {/if}
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

    p {
        text-align: center;
        color: red;
    }
</style>