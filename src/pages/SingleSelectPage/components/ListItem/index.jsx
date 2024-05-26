export const ListItem = ({ item, selected, onSelect }) => {
  const handleClick = () => {
    onSelect(item.id, !selected);
  };

  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={handleClick}
    >
      {item.name} {item.nutrients.energy.value} {item.nutrients.energy.unit}
    </div>
  );
};
