import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Badge } from "./Badge";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false); // New state variable for tags

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length <= maxWords) return description;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      if (isFullscreen) {
        setIsFullscreen(false);
      } else {
        onClose();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const FullscreenView = () => (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg z-50 flex flex-col md:flex-row">
      <div className="flex-1 relative">
        <img
          src={product.images[currentImageIndex]}
          alt={product.TITLE}
          className="w-full h-full object-contain"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white hover:bg-opacity-75"
          onClick={toggleFullscreen}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-full md:w-24 h-24 md:h-full bg-white p-2 overflow-x-auto md:overflow-y-auto flex md:flex-col">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.TITLE} - Image ${index + 1}`}
            className={`w-20 h-20 md:w-full md:h-auto object-cover cursor-pointer mr-2 md:mr-0 md:mb-2 ${
              index === currentImageIndex ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );

  const tagList = product.TAGS.split(",").map((tag) =>
    tag.replace(/_/g, " ").trim()
  );
  const visibleTags = showAllTags ? tagList : tagList.slice(0, 4);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {isFullscreen ? (
        <FullscreenView />
      ) : (
        <div className="bg-white rounded-lg w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative">
            <img
              src={product.images[currentImageIndex]}
              alt={product.TITLE}
              className="w-full h-64 md:h-full object-cover cursor-zoom-in"
              onClick={toggleFullscreen}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75"
              onClick={toggleFullscreen}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-8 overflow-y-auto">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 hover:bg-opacity-75"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
            <h2 className="text-base md:text-xl font-poppins font-bold mb-4">
              {product.TITLE}
            </h2>
            <p className="text-gray-600 mb-4">
              {showFullDescription
                ? product.DESCRIPTION
                : truncateDescription(product.DESCRIPTION, 50)}
              <button
                onClick={toggleDescription}
                className="text-blue-500 ml-1"
              >
                {showFullDescription ? "Read Less" : "Read More"}
              </button>
            </p>

            <div className="flex flex-wrap gap-2 mb-4 items-center">
              {visibleTags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}

              {tagList.length > 4 && !showAllTags && (
                <span
                  className="text-blue-500 cursor-pointer text-xs"
                  onClick={() => setShowAllTags(true)}
                >
                  ... More Tags
                </span>
              )}
            </div>

            {showAllTags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tagList.slice(4).map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
                <span
                  className="text-blue-500 cursor-pointer text-xs"
                  onClick={() => setShowAllTags(false)}
                >
                  Less Tags
                </span>
              </div>
            )}
            <div className="text-sm text-gray-500 bg-green-500 text-white px-2 py-1 rounded-full w-fit">
              Free Delivery
            </div>

            <div className="border-t border-gray-300 my-4 mx-2"></div>

            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-gray-700 mb-4">
              To purchase the product or for further inquiries, feel free to
              contact us using the details below.
            </p>

            <Link
              to="tel:+917006121726"
              className="flex font-bold items-center mb-2"
            >
              <PhoneIcon className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700">+91 7006121726</span>
            </Link>

            <Link
              to="mailto:salimasgar124@gmail.com"
              className="flex font-bold items-center"
            >
              <EnvelopeIcon className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700">salimasgar124@gmail.com</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
