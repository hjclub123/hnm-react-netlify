import React, {useEffect, useState} from "react";
import ProductCard from "../component/ProductCard";
import {Alert, Col, Container, Row} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useSearchParams();
    let [error, setError] = useState("");

    const getProducts = async () => {
        let keyword = query.get("q") || "";
        let url = `https://my-json-server.typicode.com/hjclub123/hnm-react-netlify/products?q=${keyword}`;
        let response = await fetch(url);
        let data = await response.json();
        if (data.length < 1) {
            if (keyword !== "") {
                setError(`${keyword}와 일치하는 상품이 없습니다`);
            } else {
                throw new Error("결과가 없습니다");
            }
        }
        setProducts(data);
    }

    /**
     * query 값이 바뀌면 호출된다.
     */
    useEffect(() => {
        getProducts().catch(error => {
            console.error(error);
            setError(error.message);
        })
    }, [query]);

    return (
        <div>
            <Container> {/* 아이템이 가운데로 모이게 해 줌 */}
                {error ? (
                    <Alert variant="danger" className="text-center">
                        {error}
                    </Alert>
                ) : (
                <Row>
                    {products.length > 0 &&
                        products.map((product) => (
                        // 큰 화면에서 한줄에 card 4개 구성, 중간 사이즈는 2개씩 구성
                        <Col lg={3} md={6} sm={12} key={product.id}>
                            <ProductCard item={product} />
                        </Col>
                    ))}
                </Row>
                )}
            </Container>
        </div>
    );
};

export default ProductAll;