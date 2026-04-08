import React from "react";
import "./AnnouncementBar.css";

const announcements = [
  "Enjoy 20% off your entire order with code SHOEFRESH20",
  "Get 15% off your first purchase when you sign up",
  "Free shipping on orders above â‚¹999",
];

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        {announcements.map((text, index) => (
          <div className="announcement-item" key={index}>
            <span>{text}</span>
            <a href="#">Dismiss</a>
          </div>
        ))}

        {/* duplicate for infinite scroll */}
        {announcements.map((text, index) => (
          <div className="announcement-item" key={"dup-" + index}>
            <span>{text}</span>
            <a href="#">Dismiss</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnnouncementBar;
