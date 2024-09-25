const ReactComponent = ({ todosCount }) => (
  <div style={{ border: "5px solid blue", padding: "10px" }}>
    <h2>React Microfrontend</h2>
    <p>This is a component from the React microfrontend</p>
    <p>
      Todos count : <b>{todosCount}</b>
    </p>
  </div>
);

export default ReactComponent;
