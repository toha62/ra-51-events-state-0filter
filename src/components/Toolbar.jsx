export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      <button 
        className={selected === filters[0] ? 'button_pressed' : ''}
        onClick={() => onSelectFilter()}
      >
        {filters[0]}
      </button>
      <button 
        className={selected === filters[1] ? 'button_pressed' : ''}
        onClick={() => onSelectFilter()}
      >
        {filters[1]}
      </button>
      <button 
        className={selected === filters[2] ? 'button_pressed' : ''}
        onClick={() => onSelectFilter()}
      >
        {filters[2]}
      </button>
      <button 
        className={selected === filters[3] ? 'button_pressed' : ''}
        onClick={() => onSelectFilter()}
      >
        {filters[3]}
      </button>      
    </div>
  );
}