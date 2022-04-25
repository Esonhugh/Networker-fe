<script>
import Card from '@smui/card';

export let params = {};
let tabs = ['Login','Register'];
let Mod = tabs[0];

import Tab, { Label } from '@smui/tab';
import TabBar from '@smui/tab-bar';

import Register from "../components/Auth/Register.svelte";
import Login from "../components/Auth/Login.svelte";
import Verify from "./Verify.svelte";

</script>


<div>
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
</div>
