<script>
    export let configData = {
        "username": "yourid like esonhugh",
        "asn": "4242421234",
        "public_access": "XXXX.dn42.youdomain.com or IPv4 IPv6",
        "wireguard_key": "[BASE64 String]==",
        "dn42_ipv4": "172.20.xx.xx",
        "dn42_ipv6": "fe80::XXXX"
    };
    let keys = Object.keys(configData);
    import DataTable, {Body, Cell, Head, Row} from '@smui/data-table';
</script>

<div>
    <DataTable>
        <Head>
            <Row>
                <Cell style="text-align: center">
                    Config Name
                </Cell>
                <Cell style="width: 100%;text-align: center">
                    Detail Value
                </Cell>
            </Row>
        </Head>
        <Body>
        {#each keys as key}
            <Row>
                <Cell style="text-align: center">
                    {key}
                </Cell>
                <Cell style="text-align: center">
                    {configData[key]}
                </Cell>
            </Row>
        {/each}
        </Body>
    </DataTable>
</div>

<style>
    div {
        margin: auto;
        padding: 20px;
        text-align: center;
    }
</style>