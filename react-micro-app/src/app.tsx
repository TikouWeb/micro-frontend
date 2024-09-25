import ReactComponent from "./components/react-component";

function App() {
  console.log(import.meta.env.VITE_BASE_PATH);

  return (
    <>
      <ReactComponent />
    </>
  );
}

export default App;
