import { useState } from "react";

const useMenu = () => {
  const [menuData, setMenuData] = useState([
    {
      text: "File",
      itemList: [
        {
          text: "New",
          itemList: [],
        },
        {
          text: "Open",
          itemList: [],
        },
        {
          text: "Download",
          itemList: [
            {
              text: "Download as PDF",
              itemList: [],
            },
          ],
        },
      ],
    },
    {
      text: "Edit",
      itemList: [
        {
          text: "Undo",
          itemList: [],
        },
        {
          text: "Redo",
          itemList: [],
        },
      ],
    },
    {
      text: "View",
      itemList: [
        {
          text: "Mode",
          itemList: [
            {
              text: "Editing",
              itemList: [],
            },
            {
              text: "Collbaration",
              itemList: [],
            },
          ],
        },
        {
          text: "Show outline",
          itemList: [],
        },
        {
          text: "Show ruler",
          itemList: [],
        },
        {
          text: "Show printout",
          itemList: [],
        },
      ],
    },
  ]);

  return {
    menuData,
  };
};

export default useMenu;
