export const InputTodo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div className='input-area'>
      <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}></input>
      <button disabled={disabled} onClick={onClickAdd}>追加</button>
    </div>
  )
}
