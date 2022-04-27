<script>
    import Textfield from '@smui/textfield';

    import {CreateBird, CreateWg} from './configdata';

    export let MyConfig = {};
    export let AdminConfig = {};

    let data =
        "################ Wireguard ####################\n" +
        CreateWg(AdminConfig, MyConfig) + "\n" +
        "################    Bird   ####################\n" +
        CreateBird(AdminConfig) + "\n" +
        "###############################################"

</script>

<div>
    <Textfield
            bind:value={data}
            input$cols={60}
            input$resizable={true}
            input$rows={46}
            label="wireguard Config and bird config"
            textarea
    >
    </Textfield>
</div>