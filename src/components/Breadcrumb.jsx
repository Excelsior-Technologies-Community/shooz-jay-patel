import React from "react";
import { Breadcrumb as BSBreadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb-wrapper">
      <BSBreadcrumb>
        {items.map((item, index) => (
          <BSBreadcrumb.Item 
            key={index}
            active={item.active}
            linkAs={Link}
            linkProps={{ to: item.path || "#" }}
            className="breadcrumb-item"
          >
            {item.label}
          </BSBreadcrumb.Item>
        ))}
      </BSBreadcrumb>
    </div>
  );
}

export default Breadcrumb;
