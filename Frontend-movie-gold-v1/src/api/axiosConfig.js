import { axios } from "axios";

export default axios.create({
    basURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    Headers: {"ngrok-skip-browser-warning": "true"}
});


