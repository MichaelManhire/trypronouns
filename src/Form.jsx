import { useState } from 'react';

function Form (props) {
  const [name, setName] = useState('');
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');

  const handleSubmit = (event) => {
    const data = { name, subjective, objective };

    event.preventDefault();
    props.onSubmit(data);
  }

  return (
    <section className="form-container">
      <h2 className="visually-hidden">Choose Your Pronouns</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-input"
                 id="name"
                 name="name"
                 type="text"
                 value={name}
                 placeholder="Name"
                 required
                 onChange={event => setName(event.target.value)} />
        </div>
        <fieldset className="form-control form-fieldset">
          <legend className="form-label">Pronouns</legend>
          <div className="form-input-group">
            <label className="visually-hidden" htmlFor="subjective">Subjective pronoun</label>
            <input className="form-input"
                   id="subjective"
                   name="subjective"
                   type="text"
                   value={subjective}
                   placeholder="she, he, they, etc."
                   required
                   onChange={event => setSubjective(event.target.value)} />
            <span aria-hidden="true">/</span>
            <label className="visually-hidden" htmlFor="objective">Objective pronoun</label>
            <input className="form-input"
                   id="objective"
                   name="objective"
                   type="text"
                   value={objective}
                   placeholder="her, him, them, etc."
                   required
                   onChange={event => setObjective(event.target.value)} />
          </div>
        </fieldset>
        <div className="form-button-wrapper">
          <button className="button" type="submit">Try It Out</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
