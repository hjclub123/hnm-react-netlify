import React from "react";
import {Navigate} from "react-router-dom";
import ProductDetail from "../page/ProductDetail";
import PropTypes from "prop-types";

const PrivateRoute = ({ authenticate }) => {
    return authenticate === true ? <ProductDetail /> : <Navigate to = "/login" />;
};

PrivateRoute.propTypes = {
    authenticate: PropTypes.bool.isRequired,
}

export default PrivateRoute;