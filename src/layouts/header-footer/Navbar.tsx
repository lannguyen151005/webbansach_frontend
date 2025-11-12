import React, { ChangeEvent, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../cart/components/CartItem";
import { useCartStore } from "../store/CartStore";
import './Navbar_modules.css'
import numberFormat from "../util/NumberFormat";

interface NavbarProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

function Navbar({ keyword, setKeyword }: NavbarProps) {

  const cartStore = useCartStore()

  const [tempKeyword, setTempKeyword] = useState('');

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempKeyword(e.target.value);
  }

  const handleSearch = () => {
    setKeyword(tempKeyword);
  }

  const getCartTotal = () => {
    return cartStore.list.reduce(
      (sum, product) => sum + (product.book.price ?? 0) * product.quantity,
      0
    );
  };

  const deleteProduct = (id:number) => {
    return cartStore.delete({bookId: id});
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          Alan.vn
        </a>

        {/* Nút toggle hiển thị khi thu nhỏ màn hình */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nội dung collapse */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Các liên kết bên trái */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
                onClick={
                  () => {
                    setKeyword("");
                    setTempKeyword("");
                  }
                }
              >
                Home
              </NavLink>
            </li>

            {/* Dropdown 1 */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown1"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genre
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li>
                  <Link className="dropdown-item" to="/1">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/2">
                    Adventure
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/3">
                    Horror
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown 2 */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sale Regulations
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li>
                  <a className="dropdown-item" href="#">
                    Policy 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Policy 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to={"/checkout"} className="nav-link" >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Ô tìm kiếm */}
          <div className="d-flex">
            <div className="d-flex me-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={onSearchInputChange}
                value={tempKeyword}
              />
              <button className="btn btn-outline-light" type="button" onClick={handleSearch}>
                <Search />
              </button>
            </div>

            {/* Icon giỏ hàng và tài khoản */}
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3 dropdown shadow-lg">
                <a className="nav-link dropdown-toggle" id="navbarDropdown1" data-bs-auto-close="outside" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i className="fas fa-shopping-cart fa-lg"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end shadow cart-dropdown" aria-labelledby="navbarDropdown3">
                  <div className="cart-container">
                    {/* Header */}
                    <div className="cart-header">
                      CART
                    </div>

                    {/* Danh sách sản phẩm - có thể cuộn */}
                    {/* onClick={e => e.stopPropagation()} ở container bao quanh các nút =>  dropdown không tự đóng.*/}
                    <div className="cart-items" onClick={(e) => e.stopPropagation()}>
                      {cartStore.list.length > 0 ? (
                        cartStore.list.map((prod, index) => (
                          <div key={index}>
                            <CartItem book={prod.book} quantity={prod.quantity} deleteProduct={deleteProduct} />
                          </div>
                        ))
                      ) : (
                        <div className="text-center text-muted py-3">
                          <div className="d-flex flex-column">
                            <h1><i className="fas fa-shopping-cart fa-lg cart-icon"></i></h1>
                            <span>No items in your cart.</span>
                          </div>
                        </div>
                      )}
                    </div>


                    {/* Tổng tiền */}
                    <div className="cart-total text-secondary px-3">
                      TOTAL: {numberFormat(getCartTotal())}đ
                    </div>

                    {/* Nút hành động cố định */}
                    <div className="cart-actions">
                      <Link to={"/checkout"}>
                        <button className="btn cart-btn">VIEW CART</button>
                      </Link>
                      <Link to={"/checkout"}>
                        <button className="btn cart-btn">PAY NOW</button>
                      </Link>
                    </div>
                  </div>
                </ul>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-user fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
