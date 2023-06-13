export const Categories = ({ categories, handleCategoryClick }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="btn"
            type="button"
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
