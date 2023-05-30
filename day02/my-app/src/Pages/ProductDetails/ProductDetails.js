import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../Axios';
import Header from "./../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import './ProductDetails.css';

const ProductsDetails = () => {
    const { productid } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        try {
            const response = await axiosInstance.get(`/products/${productid}`);
            setProductDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    if (!productDetails) {
        return <p>Loading...</p>;
    }

    const { title, brand, description, price, rating, discountPercentage, category, stock, images } = productDetails;

    return (
        <section>
            <Header/>
            <div className="product-details">
                <div className="product-details__image">
                    <img src={images[0]} alt="product" />
                </div>
                <div className="product-details__info">
                    <h1 className="product-details__title">{title}</h1>
                    <h3 className="product-details__brand">{brand}</h3>
                    <p className="product-details__description">{description}</p>
                    <h3 className="product-details__price">Price: ${price}</h3>
                    <h3 className="product-details__rating">Rating: {rating}</h3>
                    <h3 className="product-details__discount">Discount: {discountPercentage}%</h3>
                    <h3 className="product-details__category">Category: {category}</h3>
                    <h3 className="product-details__stock">Stock: {stock}</h3>
                    <div className="product-details__gallery">
                        <h2>Gallery</h2>
                        <div className="product-details__images">
                            {images.map((image, index) => (
                                <img src={image} alt={`product-${index + 1}`} key={index} className="imgGrid" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
        
    );
};

export default ProductsDetails;