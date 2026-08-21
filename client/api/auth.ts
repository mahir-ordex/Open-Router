import api from "../utilis/api";

const path = "/v1/auth";

export const signInApi = async (payload: { email: string; password: string }) => {
    try {
        const res = await api.post(`${path}/signin`, payload);
        return res.data;
    } catch (error) {
        throw new Error("Error!")
    }
};

export const signUpApi = async (payload: { first_name: (string | null), last_name: (string | null), email: string, password: string }) => {
    try {
        const res = await api.post(`${path}/signup`, payload)
        return res.data
    } catch (error) {
        throw new Error("Error!")
    }
}

export const logout = async (token: string) => {

    try {
        const res = await api.get(`${path}/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        return res.data
    } catch (error) {
        throw new Error("Something Went Wrong!")
    }
}
