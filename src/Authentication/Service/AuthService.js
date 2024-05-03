import axiosInstance from "../Instance/axiosInstance.js";

const AuthService = () =>  {

    const login = async (payload) => {
        const { data } = await axiosInstance.post("/auth/login", payload);
        return data;
    }

    const registerAdmin = async (payload) => {
        const { data } = await axiosInstance.post("/auth/register/admin", payload);
        return data;
    }

    const registerCustomer = async (payload) => {
        const { data } = await axiosInstance.post("/auth/register", payload);
        return data;
    }

    const validateToken = async () => {
        const token = sessionStorage.getItem('token');
        const { data } = await axiosInstance.get("/auth/validate-token", {
            headers : {
                "Authorization": `Bearer ${token}`,
            }
        });
        return data.statusCode === 200;
    }
        return {
        login,
            registerAdmin,
            registerCustomer,
            validateToken
        }
}

export default AuthService;