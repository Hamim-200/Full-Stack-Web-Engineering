interface TodoProps {
    task: string;
    time?: string;
}

function Todo({ task, time }: TodoProps) {
    return <li>Task 1 : {task} | Time : {time}</li>;
}


// function Todo({task, time}: {task: string, time?: string}) {
//     return <li>Task 1 : {task} | Time : {time}</li>;
// }


// function Todo({task,time}) {
//     return <li>Task 1 : {task} | Time : {time}</li>;
// }


// function Todo(props) {
//     return <li>Task 1 : {props.task}</li>;
// }


export default Todo;