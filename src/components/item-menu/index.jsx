/**
 * @typedef {object} ItemMenuProps
 * @property {string} text
 * @property {any[]} itemList
 */

import useItemMenu from "../../hooks/use-item-menu";
import ItemList from "../item-list";

/**
 *
 * @param {ItemMenuProps} props
 */
const ItemMenu = (props) => {
  const { text, itemList } = props;

  const { mouseEnter, onMouseEnter, onMouseLeave } = useItemMenu();

  return (
    <div
      className={`py-2 flex justify-center items-center border relative cursor-pointer`}
      key={text}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="text-black font-bold item-text">
        {text} {itemList.length > 0 ? ">" : ""}
      </div>
      {itemList.length > 0 && mouseEnter ? (
        <div
          className={`border absolute border-red-50 left-[200px] top-0 block`}
        >
          <ItemList items={itemList} />
        </div>
      ) : null}
    </div>
  );
};

export default ItemMenu;
