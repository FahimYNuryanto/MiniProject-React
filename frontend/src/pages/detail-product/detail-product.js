import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UserService from "../../services/user.service"
import ReactLoading from "react-loading"
import FigureComponent from "../../components/figure/figure"

const DetailProduct = () => {
  const [dataProduct, setDataProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const fetchProductById = async () => {
    await setIsLoading(true);
    await UserService.getOneProduct(id)
      .then((response) => setDataProduct(response.data))
      .catch((error) => console.log(error));
    await setIsLoading(false);
  };

  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <div>
      {isLoading ? (
        <ReactLoading
            type="spinningBubbles"
            color="#0D6EFD"
            className="m-auto mt-5"
        />
      ) : (
        <Row>
          <Col md="2">
            <FigureComponent dataProduct={dataProduct} />
          </Col>
          <Col md="10">
              <p>Price : {dataProduct.price}</p>
              <p>Quantity : {dataProduct.quantity}</p>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default DetailProduct