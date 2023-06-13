import { SingleItem } from './SingleItem';

export const Menu = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};
