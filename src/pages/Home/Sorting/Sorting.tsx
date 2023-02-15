// Core
import { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';

// Stores
import charactersStore from '../../../stores/Characters.store';

// Enums
import Order from '../../../enums/order.enum';

const sortingItems = [
  {
    title: 'A-Z',
    value: Order.Name,
  },
  {
    title: 'Z-A',
    value: Order.NameNegative,
  },
  {
    title: 'modified new',
    value: Order.Modified,
  },
  {
    title: 'modified old',
    value: Order.ModifiedNegative,
  },
];

const Sorting = () => {
  const { orderBySorting, changeOrderSorting } = charactersStore;

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => changeOrderSorting(event.target.value as Order);

  return (
    <div>
      <select onChange={onSelectChange} defaultValue={orderBySorting}>
        {sortingItems.map((sortingItem) => (
          <option value={sortingItem.value} key={sortingItem.value}>
            {sortingItem.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default observer(Sorting);
