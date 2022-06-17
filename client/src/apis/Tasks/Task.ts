import axios          from "axios";
import { tasklist } from "../../models/task";
import { token } from "../../utils/authController";

const baseUrl = "http://localhost:5000";

export const getPenalty = async () => {
    try {
        const response = await axios.get(
            baseUrl + '/penalty', { headers: { 'Authorization': `bearer ${token}`, } });
        return response.data as tasklist;
    } catch (e) {
        console.log(e);
    }
};