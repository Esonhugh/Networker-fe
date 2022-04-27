<script>
    import Card from '@smui/card';
    import Tab, {Label} from '@smui/tab';
    import TabBar from '@smui/tab-bar';

    // component invoke
    import Register from "../components/Auth/Register.svelte";
    import Login from "../components/Auth/Login.svelte";
    import Verify from "./Verify.svelte";
    import Logout from "../components/Auth/Logout.svelte";

    // func
    import {GetJWTObj} from "../components/token";

    // params on routes
    export let params = {};

    // tabs bar setting
    let tabs = ['Login', 'Register'];
    let Mod = tabs[0];
</script>


<div>
    {#if GetJWTObj() === null } <!-- not Login -->
    <TabBar
            {tabs}
            let:tab
            bind:active={Mod}
            style="border: 1px black "
    >
        <!-- Note: the `tab` property is required! -->
        <Tab {tab}>
            <Label>{tab}</Label>
        </Tab>
    </TabBar>
    <Card>
        {#if (Mod === 'Register')}
            <Register/>
        {:else if (Mod === 'Login')}
            <Login/>
        {:else if (Mod === 'Verify')}
            <Verify params="{params}"/>
        {/if}
    </Card>
    {:else }
        <Logout/>
    {/if}
</div>

