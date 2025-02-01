export function Todos({todos}){
    return <div>
        {todos.map((todo, index) => {
            return <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.complete == true ? "completed" : "Mark as complete"}</button>
            </div>
        })}
    </div>
}