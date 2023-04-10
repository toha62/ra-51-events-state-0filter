import Toolbar from './components/Toolbar';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
    <div className="container">
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected="All"
        onSelectFilter={(filter) => {console.log(filter);}}
      />
    </div>    
  )
}

export default App
