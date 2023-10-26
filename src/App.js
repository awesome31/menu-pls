import "./App.css";
import HorizontalMenu from "./components/horizontal-menu";
import useMenu from "./hooks/use-menu";

function App() {
  const { menuData } = useMenu();

  return (
    <div className="w-screen h-screen p-24 justify-start">
      <div className="text-xl font-bold">Menu task</div>
      <div className="h-4" />
      <HorizontalMenu hItems={menuData} />
    </div>
  );
}

export default App;
