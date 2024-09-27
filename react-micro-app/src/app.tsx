import ReactComponent from "./components/dashboard";

function App() {
  console.log(import.meta.env.VITE_BASE_PATH);

  return (
    <>
      <ReactComponent />
    </>
  );
}

export default App;
