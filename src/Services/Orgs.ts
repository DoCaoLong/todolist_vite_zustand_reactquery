import axiosClient from "./AxiosClient";

export const getOganizations = (values: any) => {
    const url = "/organizations";
    const params = values;
    return axiosClient.get(url, { params }).then((res) => res.data.context);
};
