/**
 * @typedef {object} ItemListProps
 * @property {any[]} items[]
 */

import ItemMenu from "../item-menu";

/**
 *
 * @param {ItemListProps} props
 */
const ItemList = (props) => {
  const { items } = props;

  const renderItem = (item) => {
    return (
      <div key={item.text}>
        <ItemMenu {...item} />
      </div>
    );
  };

  return <div className="w-[200px]">{items.map(renderItem)}</div>;
};

export default ItemList;
