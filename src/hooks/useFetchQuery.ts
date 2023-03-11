import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import axiosClient from "../Services/AxiosClient";

export function useFetchQuery({ api_route, refetch, onSave, params }: any) {
    const { data } = useQuery({
        queryKey: [api_route, params.page],
        queryFn: () =>
            axiosClient
                .get(api_route, params)
                .then((res) => res.data.context.data),
        refetchOnWindowFocus: refetch || false,
        onSuccess(data) {
            onSave(data);
        },
    });
    return { data };
}
