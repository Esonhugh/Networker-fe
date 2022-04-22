<script>
    export const name = 'GetAdminConfig';
    import Card from '@smui/card';
    import {apiBase} from "../setting";

    let configUrl = $apiBase + '/config';
</script>

<div>
    <Card>
        <h1> Admin Config </h1>
        <ul>
            <li>
                { configUrl }
            </li>
        </ul>
    </Card>
</div>

<style>
    h1 {
        text-align: center;
    }
</style>