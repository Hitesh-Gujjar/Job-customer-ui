import api from "./axiosInterceptor";

const callGetApi = async ({ url }) => {
    const data = await api.get(url);

    return data;
};

const callPostApi = async (url, data) => {
    const response = await api.post(url, data);

    return response;
};

export { callGetApi, callPostApi };
