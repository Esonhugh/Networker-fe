<script>
    export let open = false;
    export let message = "";
    import Dialog, { Title, Content ,Actions } from '@smui/dialog';
    import Button, { Label } from '@smui/button';
    let reload = 0;
    function refresh(){
        location.reload(true);
    }
</script>

<!-- wrapper of Dialog Alert ,which will auto fresh the window
-->

<Dialog
        bind:open
        aria-labelledby="simple-title"
        aria-describedby="simple-content">
    <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
    <Title id="simple-title">Message</Title>
    <Content id="simple-content">{message}</Content>
    <Actions>
        <Button on:click={refresh}>
            <Label>Ok</Label>
        </Button>
    </Actions>
</Dialog>