import React, {useEffect, useState} from "react";
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = query.get("q") || "";
        let url = `https://my-json-server.typicode.com/hjclub123/hnm-react-netlify/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProducts(data);
    }

    /**
     * query 값이 바뀌면 호출된다.
     */
    useEffect(() => {
        getProducts().catch(error => {
            console.error(error);
        })
    }, [query]);

    return (
        <div>
            <Container> {/* 아이템이 가운데로 모이게 해 줌 */}
                <Row>
                    {products.length > 0 &&
                        products.map((product) => (
                        // 큰 화면에서 한줄에 card 4개 구성, 중간 사이즈는 2개씩 구성
                        <Col lg={3} md={6} sm={12} key={product.id}>
                            <ProductCard item={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;