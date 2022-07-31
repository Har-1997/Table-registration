import './App.css';
import {useState} from "react";
import TodoList from './TodoList/todoList';
import TodoForm from './TodoForm/TodoForm';
import TodoFooter from './TodoFooter/TodoFooter';

//  Սաղ իմպորտա արած կստածի ստեղ սաղ դասավորած են իրանց պապկայի մեջ իրանց առանձին css-ով
// ետա համարվում ճիշտ տարբերակ դե մեծ պրոեկտի ժամանակ որ վապշե առանձին հարմար կլինի։

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ]);

  // Դե ստեղ սաղ ինֆորմացիան նկարում ենք կոմպոնենտներով ու իրանց մեջել ֆունկցիաներ ենք գրում ու ետ ֆունկցիաները իրա
  // իմպորտ արած պապկից ենք կանչում կոնկրետ արժեքով դե ետել վերցնումա արժեքը ու ես App.js-ում սաղ թարմացնում useState ֆունկցիայով։

  // Ստեղ ես խառնեվեցի են պահից որ ուրիշ պապկայում ֆունկցիան կանչում ենք ու ետ ֆունկցիանել գրվածա ես ֆայլում ու գալիս ես app.js-ի ֆայլ
  // որպես արժեք ու աշխատումա ետ ոնց ու ջոկեցի որ սաղ իմպորտ ենք անում այսինքն սաղ հաշվի ես App.js ֆայլում ենք գցում ու ետ
  // ֆունկցիան ուղղակի կանչում ես նույն ֆայլում։
  
  return (
    <div className="App">
      <div className='todoForma'>
        <TodoForm onAdd={(text)=> {
          // ստեղ ինչա կատարվում ուրեմն ռեաքթը որ տենումա դու ֆունկցիան կանչելես նույն արժեքով ուրեմն ետ դեպքում չի աշխատացնում ասումա
          // ենա կա էլի դրա համար մենք մի նոր զանգված ենք ստեղծում և դրանովել կանչում ենք իսկ ստեղ ես ...todos երեք կետը ինչի համարա
          // ուրեմն սա նշանակումա որ զանգվածը բացվի ու իրա արժեքները լցվեն ես նոր զանգվածի մեջ այսինքն են հին զանգվածը արանքից կորումա
          // ու վերջում մի նոր արժեք ենք ավելացնում։
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false
            }
          ])
        }} />
        <TodoList  
          todos = {todos}
          onDelete={(todo)=>{
            // Դե ստեղ ֆունկցիային արժեքա գալիս TodoList/TodoItem ֆայլից ու ետ արժեքովել ֆիլտրացնում ենք ու վերցնում ենք են 
            // արժեքները որոնք որ = չեն տվյալ արժեքի id-ին։
            setTodos(todos.filter((t)=> t.id !== todo.id));
          }}
          onChange={(newTodo)=> {
            // Եսել նրա նման միանգամից կոդը գրում ենք կանչող ֆունկցիայի մեջ ավելի վերադարձնում ենք մի նոր զանգված որի մեջ
            // փոփխված արժեքնել կա դե ստեղել էլի այլ պապկայից ստանում ենք արժեք քլիքի ժամանակ ու ետ արժեքովել ստուգում ենք 
            // դե ընդեղ արդեն newTodo փոփխած բերել ենք ստեղել սաղի վրայով ֆռում ենք ու իդ-ով համամատելով ասումենք եթե հավասար են
            // վերադարձրու ետ եթե չէ սովորական արժեքը վերադարձրու։
            setTodos(
              todos.map((todo)=>{
                if (todo.id === newTodo.id) {
                  return newTodo;
                }
                return todo;
              })
            );
          }}
        
        />
        <TodoFooter todos={todos} onClearCompleted = {()=>{
          // Ստեղ ստուգում ենք ֆիլտրով ու վերադարձնում ենք են արժեքները որոնք որ նշված չեն այսինքն false-ա isCompleted-ը։
          setTodos(todos.filter((todo)=> !todo.isCompleted)); 
        }} />
      </div>    
    </div>
  );
}

export default App;
