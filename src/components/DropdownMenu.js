import React, { useState, useEffect,useRef } from "react";
import { useDispatch } from "react-redux";
import { toggle, dropdownState$ } from "../store/dropdownSlice";
import "../styles/App.scss";
import { useTranslation } from "react-i18next";

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(dropdownState$.getValue().isOpen);
  const { t } = useTranslation();
  const menuItems = ["BEST SELLERS", "TOPS","T-SHIRTS", "DRESSES", "SKIRTS", "PANTS", "JACKETS", "COATS"];
  const dropdownRef = useRef(null);

  useEffect(() => {
    const subscription = dropdownState$.subscribe((state) => {
      setIsOpen(state.isOpen);
    });
    

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
     
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      subscription.unsubscribe();
    };
  }, []);

  return (
    <li className="nav-item" ref={dropdownRef}>
      <div className="dropdown">
 
          <svg
            className="dropdown-icon"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "24px", height: "24px", fill: "white" }}
            onClick={() => dispatch(toggle())}
          >
            <path
              d="m11.6 11c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-2.092 0-6.908 0-9zm9.4 6c0-.552-.448-1-1-1h-6c-.538 0-1 .477-1 1v3c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm0-13c0-.552-.448-1-1-1-1.537 0-4.463 0-6 0-.552 0-1 .448-1 1v9.6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1 0-2.194 0-7.406 0-9.6zm-9.4 0c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v3.6c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-1.017 0-2.583 0-3.6z"
              fillRule="nonzero"
            />
          </svg>
      </div>
      <div
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
        style={{
          position: "fixed",
          padding: "60px",
          top: 0,
          left: 0,
          width: "80vw",
          height: "100vh",
          backgroundColor: "#DFD3C3",
          zIndex: 1000,
          display: isOpen ? "flex" : "none",
        }}
      > 
        {isOpen && (
          <div  style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <ul>
            {menuItems.map((item, index) => (
              <li className="dropdown-items" key={index}>{t(item)}</li>
            ))}
          </ul>
          </div>
        )}
        <ul>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <img src={require("../assets/images/bamboo_left.jpg")} alt="bamboo_left" style={{ width:"25vw", height:"auto",paddingRight:"20px" }} ></img>
          <img src={require("../assets/images/bamboo_right.jpg")} alt="bamboo_right" style={{width:"25vw", height:"760px" }}></img>

        </div>
        </ul>
      </div>
    </li>
  );
};

export default DropdownMenu;
