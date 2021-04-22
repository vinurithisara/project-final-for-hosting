import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8080/api/v1/user";



class EmployeeService{

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL,user);
    }
 
    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }
   
    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' +userId)
    }



}

export default new EmployeeService()
