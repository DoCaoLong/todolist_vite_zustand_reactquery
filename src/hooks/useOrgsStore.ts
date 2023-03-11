import axios from "axios";
import { create } from "zustand";

export const useOrgsStore = create((set) => ({
    // initialState
    orgs: [],
    orgs2: [],
    load: true,

    // c1: fetch trực tiếp
    getOrgs: async () => {
        const response = await axios
            .get("https://devapi.myspa.vn/v1/organizations")
            .then((res) => res.data.context.data);
        return set((state: any) => ({ orgs: response, load: false }));
    },

    // c2: nhận data value từ component set vào initialState
    setOrgs: (payload: any) =>
        set((state: any) => ({ orgs2: payload, load: false })),
}));
