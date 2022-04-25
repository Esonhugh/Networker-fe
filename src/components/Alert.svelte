<script>
    export let open = false;
    export let message = "";
    import Dialog, { Title, Content } from '@smui/dialog';
</script>


<Dialog
        bind:open
        aria-labelledby="simple-title"
        aria-describedby="simple-content">
    <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
    <Title id="simple-title">Message</Title>
    <Content id="simple-content">{message}</Content>
</Dialog>