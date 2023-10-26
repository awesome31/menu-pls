/**
 * @typedef {object} ItemListProps
 * @property {any[]} items[]
 */

//Circular dependecy.
import ItemMenu from "../item-menu";

/**
 *
 * @param {ItemListProps} props
 */
const ItemList = (props) => {
  const { items } = props;

  const renderItem = (item) => {
    return <ItemMenu {...item} key={item.text} />;
  };

  return <div className="w-[250px]">{items.map(renderItem)}</div>;
};

export default ItemList;
