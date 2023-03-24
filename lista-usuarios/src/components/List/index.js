
import './List.css'
import Item from '../../components/Item/index.js';

export const List=({ items = [], onItemClick }) =>{
  const handleItemClick = (item) => {
    onItemClick && onItemClick(item);
  }

  const map = items.map((item) => {
    return (
      <Item key={item.id} item={item} onItemClick={handleItemClick} />
    )
  });

  return (
    <div className='list-user'>
      <h2>Lista de Usuários</h2>
      <ul>
        {map}
      </ul>
    </div>
  );
}

