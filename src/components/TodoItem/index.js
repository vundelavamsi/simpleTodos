// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {title, id} = eachTodo
  //   console.log(title)
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <div className="todo-item-container">
        <p className="title">{title}</p>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
