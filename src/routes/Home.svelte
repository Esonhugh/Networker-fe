<script>
    export const name = 'Home'; // Let we can read filename as route in url and auto navigator to there
    import Card from '@smui/card';
    import {GetUsername} from '../components/token';

    let user = GetUsername();
    let TestUserToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImVzb25odWdocyIsImV4cCI6MTY1MTE2NDQzMSwiaXNzIjoiRXNvbmh1Z2gifQ.badSign"
</script>

<div>
    <Card>
        <h1> Welcome to DN42 Config Server </h1>
        <p> Hello { user }. </p>
        <p> Use the Menu Button to explorer the Site. </p>
    </Card>
</div>

<style>
    div {
        margin: auto;
        padding: 2px;
    }

    h1 {
        text-align: center;
    }

    p {
        color: red;
        text-align: center;
    }
</style>