<script>
    import Button, {Label} from '@smui/button';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import {apiBase} from "../../setting";
    import Alert from "../Alert.svelte";

    let userLogin = {
        username: "",
        password: ""
    }

    let fetchUrl = $apiBase + '/auth/login';
    let open = false;
    let returns = "";

    async function Login() {
        const res = await fetch(fetchUrl,{
            method: "POST",
            mode: 'cors',
            credentials: "include",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(userLogin)
        })
        const json = await res.json()
        open = true;
        if (res.ok) {
            returns=json
            localStorage.setItem("Token",returns.errorcode)
        } else {
            returns=json
        }
    }
</script>

<div>
    <Textfield
            bind:value={userLogin.username}
            label="Username"
            type="username"
            variant="outlined"
    >
        <HelperText slot="helper">Username,as your register</HelperText>
    </Textfield>
    <Textfield
            bind:value={userLogin.password}
            label="Password"
            type="password"
            variant="outlined"
    >
        <HelperText slot="helper">Password,as your register</HelperText>
    </Textfield>
</div>
<div>
    <Button on:click={Login} variant="raised">
        <Label>Submit</Label>
    </Button>
    <Alert bind:open={open} message="{returns.errormsg}"/>
</div>

<style>
    div {
        margin: auto;
        padding: 20px;
    }
</style>