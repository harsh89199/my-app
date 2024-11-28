import axios from "axios";

export default axios.create({

    baseURL:'https://fakerestapi.azurewebsites.net/api/v1/Activities',
    headers:{
        "content-type":"application/json"
        
    }
})
