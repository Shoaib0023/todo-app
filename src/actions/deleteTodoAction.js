
export default function deleteTodoAction(id) {
    return {
        type: "DELETE_TODO",
        payload: id
    }
}