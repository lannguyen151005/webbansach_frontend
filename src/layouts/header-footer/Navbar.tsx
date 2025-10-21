import React, { ChangeEvent, useState } from "react";

interface NavbarProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

function Navbar({ keyword, setKeyword }: NavbarProps) {

  const [tempKeyword, setTempKeyword] = useState('');

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setTempKeyword(e.target.value);
  }

  const handleSearch= () =>{
    setKeyword(tempKeyword);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            {/* Dropdown 1 */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genre
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li>
                  <a className="dropdown-item" href="1">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="2">
                    Adventure
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="3">
                    Horror
                  </a>
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
              <a className="nav-link" href="#">
                Contact Us
              </a>
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
                Search
              </button>
            </div>

            {/* Icon giỏ hàng và tài khoản */}
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  <i className="fas fa-shopping-cart fa-lg"></i>
                </a>
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
