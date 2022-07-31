import './TodoFooter.css';

function TodoFooter ({todos, onClearCompleted}){
    // Վերցնում ենք բոլոր նշվածների զանգվածի երկարությունը դե որը որ true isCompleted-ը զնաչիտ նշվածա
    // ու սա տեղադրում ենք span-ի մեջ 
    const completedSize = todos.filter((todo)=> todo.isCompleted).length;
    return(
        <div className='footerInfoAndBtn'>
            <span>{completedSize}/{todos.length} Completed</span>
            {/* Դե սաել հենց սեղմում ենք ֆունկցիայա աշխատացնում ու չերեզ App.js ջնջումա սաղ նշվածները */}
            <button className='clearSpan' onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoFooter;