const Item = ({ children, title }) => {
  return (
    <div>
      {title && <div>{title}</div>}
      {children}
    </div>
  );
};

export default Item;
