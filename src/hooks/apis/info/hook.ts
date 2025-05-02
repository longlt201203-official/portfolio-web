import { useAxios } from "../axios";
import { InfoResponse } from "./info.response";
import { UpdateInfoRequest } from "./update-info.request";

export function useInfoApis() {
    const { axiosGet, axiosPut } = useAxios();

    const getInfo = async () => {
        const url = `/api/info`;
        const response = await axiosGet<InfoResponse>(url);
        return response.data;
    }

    const updateInfo = async (data: UpdateInfoRequest) => {
        const url = `/api/info`;
        if (data.avt) {
            const formData = new FormData();
            formData.append("file", data.avt);
            const updateAvtUrl = `/api/info/avt`;
            await axiosPut(updateAvtUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        }
        // delete data.avt;
        data.avt = null;
        await axiosPut(url, data);
    }

    return { getInfo, updateInfo };
}