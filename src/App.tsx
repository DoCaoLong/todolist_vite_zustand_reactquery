import "./App.css";
import { Count } from "./components/Count";
import Organization from "./components/Oganizations";
import { TodoList } from "./components/TodoList";
import { useCountStore, useOrgsStore } from "./hooks";
import { useFetchQuery } from "./hooks/useFetchQuery";
function App() {
    const { count } = useCountStore((state: any) => state);
    const { getOrgs, setOrgs } = useOrgsStore((state: any) => state);

    const params = {
        page: 1,
        limit: 10,
    };

    // nếu không dùng react query thì dùng useEffect để gọi hàm getOrgs trong zutand
    // useEffect(() => {
    //     getOrgs(params);
    // }, []);

    // c1: sử dụng useQuery với axios thuần
    // useQuery({
    //     queryKey: ["ORG"],
    //     queryFn: () =>
    //         axios
    //             .get("https://devapi.myspa.vn/v1/organizations", params)
    //             .then((res) => res.data.context.data),
    //     refetchOnWindowFocus: false,
    //     onSuccess(data) {
    //         setOrgs(data);
    //     },
    // });

    // cách 2: sử dụng useQuery với axios đã configs
    // useQuery({
    //     queryKey: ["org", params.page],
    //     queryFn: () => getOganizations(params),
    //     === set vào state manager ===
    //     onSuccess(data) {
    //         setOrgs(data);
    //     },
    // });
    // console.log(data);

    // c3: sử dụng custom hook
    useFetchQuery({
        api_route: "/organizations",
        params: params,
        refetch: false,
        onSave(res: any) {
            // truyền data value vào state manager
            setOrgs(res);
        },
    });

    return <div className="App">home page</div>;
}

export default App;
