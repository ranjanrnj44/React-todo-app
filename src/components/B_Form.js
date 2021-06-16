import React, {useState} from 'react'

function Form(props) {

    let [name, setName] = useState('');

    //prevent form submission
    let handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTask(name);
        setName('');
    }
    let handleChange = (e) => {
        setName(e.target.value);
    }

    return (
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
}

export default Form;
