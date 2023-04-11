export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {
        filters.map(filter => (
          <button 
            className={selected === filter ? 'button_pressed' : ''}
            onClick={() => onSelectFilter()}
          >
            {filter}
          </button>
        ))
      }
    </div>
  );
}