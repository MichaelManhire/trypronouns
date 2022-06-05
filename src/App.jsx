function App() {
  return (
    <main>
      <h1>Try Pronouns</h1>
      <section>
        <h2>Choose Your Pronouns</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
          </div>
          <fieldset>
            <legend>Pronouns</legend>
            <div>
              <label htmlFor="subjective">Subjective pronoun</label>
              <input id="subjective" name="subjective" type="text" />
              <label htmlFor="objective">Objective pronoun</label>
              <input id="objective" name="objective" type="text" />
            </div>
          </fieldset>
          <button type="submit">Try It Out</button>
        </form>
      </section>
      <section>
        <h2>Sample Text</h2>
        <p>After you submit the form with your name and pronouns, some generated text will appear below.</p>
        <hr />
        <div />
      </section>
    </main>
  );
}

export default App;
