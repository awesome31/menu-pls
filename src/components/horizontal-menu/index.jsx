import ItemList from "../item-list";
import styles from "./index.module.css";

const HorizontalMenu = (props) => {
  const { hItems } = props;

  const renderItem = (item) => {
    const { text, itemList } = item;
    const newGroupName = text.split(" ").join("-");

    return (
      <div
        className={`h-14 flex justify-center items-center border relative ${styles.main} border px-4 flex justify-center cursor-pointer`}
      >
        <div className="text-black font-bold item-text">{text}</div>
        {itemList.length > 0 ? (
          <div
            className={`border absolute border-red-50 top-14 hidden ${styles.itemMenu}`}
          >
            <ItemList items={itemList} />
          </div>
        ) : null}
      </div>
    );
  };

  return <div className="flex flex-row">{hItems.map(renderItem)}</div>;
};

export default HorizontalMenu;
