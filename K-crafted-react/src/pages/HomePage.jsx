import { useState, useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import productsData from "../assets/products-data.json";

const HomePage = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]); // State for displayed products
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading products
  const loadMoreRef = useRef(); // Ref for the load more element

  const productsPerPage = 10; // Number of products to display per load

  useEffect(() => {
    // Load initial products
    setDisplayedProducts(productsData.slice(0, productsPerPage));
  }, []);

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        loadMoreProducts();
      }
    });

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [loading]);

  const loadMoreProducts = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulating network delay for loading more products
      const nextProducts = productsData.slice(
        displayedProducts.length,
        displayedProducts.length + productsPerPage
      );
      setDisplayedProducts((prev) => [...prev, ...nextProducts]);
      setLoading(false);
    }, 500);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="py-2 px-2 md:py-0 md:px-8">
        <h1 className="m-6 text-6xl font-bold text-center mb-6 font-cormorant">
          Gallery
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          id="products-grid"
        >
          {displayedProducts.map((product) => (
            <ProductCard key={product.SKU} onClick={() => openModal(product)}>
              <div className="bg-white rounded-sm shadow-md flex flex-col cursor-pointer w-full max-w-[300px] mx-auto">
                <div className="relative h-72 overflow-hidden">
                  <div className="image-slider">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-sm"
                      src={product.images[0]}
                      alt={product.TITLE}
                    />
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <div className="font-poppins font-medium text-md mt-2 mb-2 line-clamp-2 leading-tight">
                    {product.TITLE}
                  </div>
                  <div className="text-sm text-gray-500 bg-green-500 text-white px-2 py-1 rounded-full w-fit">
                    Free Delivery
                  </div>
                </div>
              </div>
            </ProductCard>
          ))}
        </div>
        {/* Load more indicator */}
        <div
          ref={loadMoreRef}
          className="h-16 flex items-center justify-center"
        >
          {loading && <p className="text-2xl">Loading more products...</p>}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
};

export default HomePage;
