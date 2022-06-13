function TextContainer (props) {
  return (
    <section className="text-container">
      <h2 className="visually-hidden">Sample Text</h2>
      <p className="guidance">After entering your name and pronouns, some sample text will appear below:</p>
      <hr />
      <div>
        {props.text}
      </div>
    </section>
  );
}

export default TextContainer;
