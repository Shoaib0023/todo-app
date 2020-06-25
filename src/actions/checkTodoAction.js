export default function checkTodoAction (id) {
    return {
        type: "CHECK_TODO" ,
        payload: id
    }
}
