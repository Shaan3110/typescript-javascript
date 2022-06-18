import axios          from "axios";
import { TaskList, Tasks } from "../../models/ITask";
import { token } from "../../utils/authController";

const baseUrl = "http://localhost:5000";


//receive tasks
export const getTasks = async () => {
    try {
        const response = await axios.get(
            baseUrl + '/tasks/gettasks', { headers: { 'Authorization': `bearer ${token}`, } });
        return response.data as TaskList;
    } catch (e) {
        console.log(e);
    }
};

//add tasks
export const postTasks = async (data:Tasks) => {
    try {
        const response = await axios.post(
            baseUrl + '/tasks/addtasks', data, { headers: { 'Authorization': `bearer ${token}`, } });
        return response.status as number;
    } catch (e) {
        console.log(e);
    }
};