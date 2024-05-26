import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = ({ filter }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        filter === 'vlaknina'
          ? 'http://localhost:4000/api/items?filter=nutrients.fiber.value:gt:2'
          : filter === 'bilkoviny'
          ? 'http://localhost:4000/api/items?filter=nutrients.proteins.value:gt:1.5'
          : filter === 'tuky'
          ? 'http://localhost:4000/api/items?filter=nutrients.fats.value:lt:1.3'
          : 'http://localhost:4000/api/items',
      );
      const json = await response.json();
      setItems(json.data);
    };

    fetchItems();
  }, [filter]);

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};
