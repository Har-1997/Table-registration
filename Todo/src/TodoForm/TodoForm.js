import {useState} from "react";
import "./TodoForm.css"

function TodoForm({onAdd}){

    const [text, setText] = useState("");

    return(
        <form className="addFormTop" onSubmit={(e)=> {
            // Ստեղ ասվումա հենց ֆոռմեն սեղմվեց ուրեմն բրաուզեր դու գործ չունես ես իմ onAdd ֆունկցիան եմ աշխատացնում
            // ու դրա հետ մեկտեղ մենք էլի ֆունկցիան կանչում ենք դատարկ արժեքով որ ինփութը դատարկվի դե եսել
            // միաժամանակ են ֆունկցիայի հետ աշխատումա ոնց հասկացա ու երբ հասնումա ես հատվածին App.js-ում ինփութը ուժե
            // դատարկ թարմացվածա լինում։
            e.preventDefault();
            onAdd(text);
            setText("");

        }}>
            <input type='text' className="inpAdd" value={text} onChange={(e) => {
                // Ամեն անգամ երբ ինփութի մեջ բանենք գրում ինքը դա թարմացնումա useState ֆունկցիայով ու text զանգվածի արժեքը լինումա
                // ետ թարմացված արժեքը:
                setText(e.target.value); 
            }} />
            <button className="addBtn">Add</button>
        </form>
    )
}

export default TodoForm;