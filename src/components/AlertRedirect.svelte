<script>
    export let open = false;
    export let message = "";
    export let url = "#/";
    import Dialog, {Actions, Content, Title} from '@smui/dialog';
    import Button, {Label} from '@smui/button';

    let reload = 0;

    function redirect() {
        location.hash = url;
    }
</script>

<!--
wrapper of Dialog Alert ,which will auto fresh the window
-->

<Dialog
        aria-describedby="simple-content"
        aria-labelledby="simple-title"
        bind:open>
    <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
    <Title id="simple-title">Message</Title>
    <Content id="simple-content">{message}</Content>
    <Actions>
        <Button on:click={redirect}>
            <Label>Ok</Label>
        </Button>
    </Actions>
</Dialog>
