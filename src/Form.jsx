function Form() {
  return (
    <section className="form-container">
      <h2 className="visually-hidden">Choose Your Pronouns</h2>
      <form>
        <div className="form-control">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-input" id="name" name="name" type="text" placeholder="Name" />
        </div>
        <fieldset className="form-control form-fieldset">
          <legend className="form-label">Pronouns</legend>
          <div className="form-input-group">
            <label className="visually-hidden" htmlFor="subjective">Subjective pronoun</label>
            <input className="form-input" id="subjective" name="subjective" type="text" placeholder="she, he, they, etc." />
            <span aria-hidden="true">/</span>
            <label className="visually-hidden" htmlFor="objective">Objective pronoun</label>
            <input className="form-input" id="objective" name="objective" type="text" placeholder="her, him, them, etc." />
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
