import React, {useState} from 'react';
import './App.css';
import Menu from './Menu';
import Categories from './Categories';
import items from './Data';

const allCategories = ['all', ...new Set(items.map((item)=>item.category)) ]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
 

  const filterItem = (category) => {
    if(category === 'all'){
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h3 className="heading">our menu</h3>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem = {filterItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
