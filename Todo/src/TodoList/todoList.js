import TodoItem from "./TodoItem";


function TodoList({todos, onDelete, onChange}){
    return(
        <div>
            {
                // Ստեղ հատ հատ բոլոր արժեքների վրայով ֆռում ենք ու տալիս տալիս ենք են արժեքները որոնք մյուս պապկայում պետք կգան՝ ու 
                // սա վերադարձնումա մի նոր զանգված որնել գնումա մտնումա գլավնի ֆայլը App.js-ը
                todos.map((todo)=>{
                    return(
                        <TodoItem  
                            key={todo.id} 
                            todo={todo} 
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList;