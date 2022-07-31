import './TodoItem.css';

function TodoItem({todo, onChange, onDelete}){
    return(
        // Հետո ստեղծում ենք մեր ուզած կանստրուկցիան jsx-ով 
        <div className='listDiv'>
            <label className='textList'>
                <input type="checkbox" className='checkInp' checked = {todo.isCompleted} onChange={(e)=>{
                    // e.target.checked;
                    // Ստեղ ֆունկցիա ենք աշխատացնում ու կոնկրետ նայում ենք checked-ը true-յա թե false-ա ու ես որպես 
                    // զանգված ուղարկում ենք App.js դե todoList.js -ի միջով անցնելով։
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }} />
                {todo.text}
                <button className='closer' onClick={()=> {
                    console.log(todo)
                    // Դե սա սեղմելուց ուղարկում ենք կոնկրետ արժեքը այսինքն ինքը կոդը գրելուց ես ինֆոն պահումա ու երբ սեղմում ենք 
                    // կոնկրետ արժեքը իրա todo-ով տալիսա երևի տենցա էլի ու եսել գնումա իրա ինֆոյով գլավնի էջ ֆունկցիան կատարելու։
                    onDelete(todo)
                }}>x</button>
            </label>
        </div>
    )
}


export default TodoItem;