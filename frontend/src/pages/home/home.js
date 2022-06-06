import React, { useEffect, useState } from 'react'
import UserService from "../../services/user.service"
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const fetchGetAllProduct = async () => {
    await setIsloading(true);
    await UserService.getProducts()
        .then((response) => setDataProducts(response.data))
        .catch((error) => {
          console.log(error);
        })
    await setIsloading(false);
  };

  useEffect(() => {
    fetchGetAllProduct();
  }, []);
  return (
    <div>
      <h1> Feyn Astraea Shop</h1>
      {isLoading ? (
        <ReactLoading
          type="spinningBubbles"
          color="#0D6EFD"
          className="m-auto mt-5"
    />
    ) : (
      <div className="d-flex flex-wrap">
                    {dataProducts.map((product) => (
                        <Link
                            to={`/detail-product/${product.id}`}
                            className="text-decoration-none"
                        >
                            {/* <CardComponent
                                title={product.name}
                                price={product.price}
                                image={product.image}
                            /> */}
                        </Link>
                    ))}
                </div>
      )}
    </div>
  );
};

export default Home