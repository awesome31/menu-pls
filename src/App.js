import "./App.css";
import HorizontalMenu from "./components/horizontal-menu";

function App() {
  return (
    <div className="w-screen h-screen p-12">
      <HorizontalMenu
        hItems={[
          {
            text: "Format me",
            itemList: [
              {
                text: "Do not Format me",
                itemList: [
                  {
                    text: "Please Do not Format me",
                    itemList: [],
                  },
                  {
                    text: "Please Do not Format me",
                    itemList: [],
                  },
                ],
              },
            ],
          },
          {
            text: "Menu",
            itemList: [
              {
                text: "Menu1",
                itemList: [
                  {
                    text: "Menu2",
                    itemList: [],
                  },
                ],
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
