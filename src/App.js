

function App() {
  return (
    <div className="todoapp">
      <h1>TodoApp</h1>
      <form>
        <h2 className='label-wrapper'>
          <label htmlFor='new-todo-input' className='new-todo-label'>What Needs to be done?</label>
        </h2>
        <input type="text" name="text" id='new-todo-input' className='input-todo _lg'/>
        <button type='submit' className='btn btn-primary _lg'>Add Task</button>
      </form>
      <div className='list-filters'>
        <button>Add</button>
        <button>Add</button>
        <button>Add</button>
      </div>
    </div>
  );
}

export default App;
