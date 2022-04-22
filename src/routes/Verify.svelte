<script>
    export const name = 'Verify';
    import {apiBase} from "../setting";
    import {location} from 'svelte-spa-router';

    let fetchurl = $apiBase + $location
    console.log(fetchurl)

    async function verifyHandler() {
    }
</script>

<div>

</div>
