import styles from "./index.module.css";
/**
 * @typedef {object} ItemMenuProps
 * @property {string} text
 * @property {any[]} itemList
 */

import ItemList from "../item-list";

/**
 *
 * @param {ItemMenuProps} props
 */
const ItemMenu = (props) => {
  const { text, itemList } = props;

  console.log(styles);

  return (
    <div
      className={`py-2 flex justify-center items-center border relative ${styles.main} cursor-pointer`}
      key={text}
    >
      <div className="text-black font-bold item-text">{text}</div>
      {itemList.length > 0 ? (
        <div
          className={`border ${styles.itemMenu} absolute border-red-50 left-[250px] top-0 hidden`}
        >
          <ItemList items={itemList} />
        </div>
      ) : null}
    </div>
  );
};

export default ItemMenu;
