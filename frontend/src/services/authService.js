import axios from "axios";

const getToken = async () => {
    const token = await axios.get("http://localhost:5000/api/auth");
    return token;
}

export default getToken;