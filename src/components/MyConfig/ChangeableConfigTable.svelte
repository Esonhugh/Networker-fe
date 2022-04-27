<script>
    import {apiBase} from "../../setting";
    import Alert from "../Alert.svelte";

    import Button, {Label} from '@smui/button';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';

    import {GetUsername} from "../token";
    /*
{
"id": 0,
"username": "",
"asn": "",
"public_access": "",
"wireguard_key": "",
"dn42_ipv4": "",
"dn42_ipv6": ""
}
*/
    import Formfield from '@smui/form-field';
    import ConfigGenerate from "./ConfigGenerate.svelte";

    export let config = {};

    let MyConfigPath = $apiBase + '/peerinfo/me';
    let open = false;
    let returns = {};

    let userconfig = {
        username: GetUsername(),
        asn: config.asn === undefined ? "" : config.asn,
        public_access: config.public_access === undefined ? "" : config.public_access,
        wireguard_key: config.wireguard_key === undefined ? "" : config.wireguard_key,
        dn42_ipv4: config.dn42_ipv4 === undefined ? "" : config.dn42_ipv4,
        dn42_ipv6: config.dn42_ipv6 === undefined ? "" : config.dn42_ipv6,
    }

    async function UpdateMyConfig() {
        const res = await fetch(MyConfigPath, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': "application/json",
                'Auth': localStorage.getItem("Token"),
            },
            body: JSON.stringify(userconfig)
        })
        open = true;
        const json = await res.json()
        if (res.ok) {
            returns = json
        } else {
            returns = json
        }
    }

    let configkey = ["asn", "public_access", "wireguard_key", "dn42_ipv4", "dn42_ipv6"]
    let rules = {
        "asn": "Asn Number should be like 424242XXXX",
        "public_access": "There should be like an IP address or good domain name in public",
        "wireguard_key": "Public key for you wireguard, should be base64 format",
        "dn42_ipv4": "Your Dn42 data inet4",
        "dn42_ipv6": "Your Dn42 data inet6",
    }

    let adminconfig = {
        "id": 0,
        "username": "",
        "asn": "",
        "public_access": "",
        "wireguard_key": "",
        "dn42_ipv4": "",
        "dn42_ipv6": ""
    } // let admin empty
    let preview = false;
    let configUrl = $apiBase + '/config';

    async function PreviewMyConfig() {
        const res = await fetch(configUrl);
        const text = await res.json();
        preview = true;
        if (res.ok) {
            adminconfig = text;
        } else {
            throw text
        }
    }
</script>

<div>
    <Formfield>
        <div>
            {#each configkey as key}
                <div>
                    <Textfield
                            variant="outlined"
                            bind:value={ userconfig[key] }
                            label="{key}"
                            style="width: 100%"
                    >
                        <HelperText slot="helper">{rules[key]}</HelperText>
                    </Textfield>
                </div>
            {/each}
            <div>
                <Button on:click={UpdateMyConfig} variant="raised">
                    <Label>Update</Label>
                </Button>
                <Alert bind:open message="{returns.errormsg}"/>
                <Button on:click={PreviewMyConfig} variant="raised">
                    {#if preview}
                        <Label>Refresh</Label>
                    {:else}
                        <Label>Preview</Label>
                    {/if}
                </Button>
                {#if preview}
                    <Button on:click={()=> (preview = false)} variant="raised">
                        <Label>Preview Off</Label>
                    </Button>
                {/if}
            </div>
        </div>
    </Formfield>
    <Formfield>
        {#if preview}
            <ConfigGenerate bind:MyConfig="{userconfig}" bind:AdminConfig="{adminconfig}" slot=""/>
        {/if}
    </Formfield>
</div>

<style>
    div {
        margin: auto;
        padding: 10px;
        align-items: center;
    }
</style>
