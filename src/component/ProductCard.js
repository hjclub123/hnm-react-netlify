import React from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showDetail = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div>
            {
                item && (
                    <div className="card" onClick={() => showDetail(item.id)}>
                        <img src={item?.img} alt="..." />
                        <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
                        <div>{item?.title}</div>
                        <div>₩{item?.price}</div>
                        <div className="new-product">{item?.new ? "신제품" : ""}</div>
                    </div>
                )
            }
        </div>
    );
};

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductCard;