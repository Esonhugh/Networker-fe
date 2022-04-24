<script>
    import TextField from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import Button, {Label} from '@smui/button';

    export let Ticket;

    function verifyEmailTicket() {
        alert(1);
        // todo: Send Verify ticket.
        // window.href = window.location + '/' + Ticket;
    }
</script>

<div>
    <TextField bind:value={Ticket}>
        <HelperText slot="helper">Ticket</HelperText>
    </TextField>
    <Button on:click={verifyEmailTicket}>
        <Label>Verify!</Label>
    </Button>
</div>

<style>
    div {
        margin: auto;
        padding: 20px;
        text-align: center;
    }
</style>
