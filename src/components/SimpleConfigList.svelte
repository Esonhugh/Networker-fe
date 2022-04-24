<script>
    export let configList = [
        {
            "id": "001",
            "username": "default",
            "asn": "424242default"
        },
        {
            "id": "002",
            "username": "default",
            "asn": "424242default"
        },
        {
            "id": "003",
            "username": "default",
            "asn": "424242default"
        }
    ];
    import DataTable, {Body, Cell, Head, Row} from '@smui/data-table';
</script>

    <div>
        <DataTable>
            <Head>
                <Row>
                    <Cell>ID</Cell>
                    <Cell>Username</Cell>
                    <Cell>ASN</Cell>
                </Row>
            </Head>
            <Body>
            {#each configList as config}
                <Row>
                    <Cell>{config.id}</Cell>
                    <Cell>{config.username}</Cell>
                    <Cell>{config.asn}</Cell>
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