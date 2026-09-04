interface TaskProps {
    task: string;
    isDone: boolean;
}   

function Task({task, isDone}: TaskProps) {

    // if(isDone === true) {
    //     return <li>Completed Task: {task} </li>;
    // }
    // return <li>Pending Task: {task} </li>;

    return isDone ? <li>Completed Task: {task} </li> : <li>Pending Task: {task} </li>;
}

export default Task;