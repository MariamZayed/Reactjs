import { Link } from "react-router-dom";
import axiosInstance from "../../Axios";
import { Fragment, useEffect, useState } from "react";
import "./ProductsList.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductsList = () => {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        getProductsList();
    }, []);

    const getProductsList = async () => {
        await axiosInstance
            .get("/products")
            .then((res) => {
                console.log(res);
                setProductsList(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <section>
            <div className="container m-auto">
                <div className="row">
                    {productsList.map((product) => (
                        <div key={product.id} className="col-4 my-2">
                            <div className="card custom-card">
                                <img
                                    src={product.thumbnail}
                                    className="product-img card-img-top"
                                    alt="Card Image"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.category}</p>
                                    <Link to={`/product-details/${product.id}`}>
                                        <button className="btn btn btn-primary">
                                            Product Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsList;
