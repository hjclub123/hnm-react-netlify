import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ authenticate, setAuthenticate }) => {
    /**
     * - React 컴포넌트(5) - map() 반복문, 배열 컴포넌트 사용하기
     * https://goddaehee.tistory.com/303
     *
     * key는 요소의 고유한 값이어야 한다. 배열 요소의 고유한 값을 사용하거나 index로 사용한다.
     * 단, index는 배열의 순서가 바뀌면 index도 바뀌기 때문에 권장하지 않는다.
     */
    const menuList = [
        {id: 1, name: "여성"},
        {id: 2, name: "Divided"},
        {id: 3, name: "남성"},
        {id: 4, name: "신생아/유아"},
        {id: 5, name: "아동"},
        {id: 6, name: "H&M HOME"},
        {id: 7, name: "Sale"},
        {id: 8, name: "지속가능성"},
    ];

    const navigate = useNavigate();
    const gotoLogin = () => {
        navigate("/login");
    }

    const search = (event) => {
        if (event.key === "Enter") {
            /**
             * 리액트는 <input> value를 event로 읽어온다.
             */
            navigate(`?q=${event.target.value}`);
        }
    };

    return (
        <div>
            <div className="login-button">
                {authenticate ? (
                    <div onClick={() => setAuthenticate(false)} role="presentation">
                        <FontAwesomeIcon icon={faUser} />
                        <span style={{ cursor: "pointer" }}>로그아웃</span>
                    </div>
                ) : (
                    /**
                     * <div onClick={() => navigate("/login")}>
                     */
                    <div onClick={gotoLogin} role="presentation">
                        <FontAwesomeIcon icon={faUser} />
                        <span style={{ cursor: "pointer" }}>로그인</span>
                    </div>
                )}
            </div>
            <div className="logo-section">
                <img
                    width={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
                    alt="..."/>
            </div>
            <div className="menu-area"> {/* center 로 옮기기 위해서 부모에 적용한다. */}
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li key={menu.id}>{menu.name}</li>
                    ))}
                </ul>
                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyDown={search} placeholder="제품검색"/>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    authenticate: PropTypes.bool.isRequired,
    setAuthenticate: PropTypes.object.isRequired,
}

export default Navbar;