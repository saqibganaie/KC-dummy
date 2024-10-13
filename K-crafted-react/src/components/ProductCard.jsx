const ProductCard = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>;
};

export default ProductCard;
