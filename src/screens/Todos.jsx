import { useGetAllTodosQuery, useLazyGetAllTodosQuery } from "../redux/services/todoServices"

export const Todos = () => {

    const { data, isLoading, isError } = useGetAllTodosQuery(null, { refetchOnMountOrArgChange: true });


    // const [getAllTodos, { data, isLoading, isError }] = useLazyGetAllTodosQuery();

    return <div>
        <h1>All Todos</h1>

        {isLoading && <p>Fetching........</p>}
        {isError && <p>Errot comes</p>}

        <table>
            <thead>
                <tr>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {data?.map(todo => {
                    return <tr key={todo.id}><td>{todo.title}</td></tr>
                })}
            </tbody>
        </table>
    </div>
}