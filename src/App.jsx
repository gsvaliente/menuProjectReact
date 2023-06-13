import { useState } from 'react';
import { Categories, Menu, Title } from './components';
import data from './data';

const tempCategories = data.map((item) => item.category);
const tempSet = new Set(tempCategories);
const allCategories = ['all', ...tempSet];

// const allCategories = ['all', ...new Set(data.map((item) => item.category))];
// console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const handleCategoryClick = (category) => {
    if (category === 'all') {
      return setMenuItems(data);
    }
    const newList = data.filter((item) => item.category === category);
    setMenuItems(newList);
  };

  return (
    <main>
      <section className="menu">
        <Title text={'Our Menu'} />
        <Categories
          categories={categories}
          handleCategoryClick={handleCategoryClick}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
