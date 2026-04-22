import React from "react";


const CategoryList = ({ activeTab, onTabClick }) => {
  const categories = [
    { name: "Athletic Footwear", link: "/collections/athletic-footwear", count: 8 },
    { name: "Boots for Every Occasion", link: "/collections/boots-for-every-occasion", count: 8 },
    { name: "Luxury Leather Shoes", link: "/collections/luxury-leather-shoes", count: 8 },
    { name: "Sandals & Slides", link: "/collections/summer-sandals-slides", count: 8 },
    { name: "Sneakerhead's Haven", link: "/collections/frontpage", count: 10 },
  ];

  return (
    <div>
      <ul style={styles.list}>
        {categories.map((item, index) => {
          const isActive = activeTab === item.name;
          return (
            <li key={index} style={styles.listItem}>
              <a
                href={item.link}
                style={{
                  ...styles.link,
                  borderBottom: isActive ? "2px solid #111" : "2px solid transparent",
                  paddingBottom: "4px",
                  fontWeight: isActive ? "600" : "500",
                }}
                onClick={(e) => {
                  if (onTabClick) {
                    e.preventDefault();
                    onTabClick(item.name);
                  }
                }}
              >
                {item.name}
                <span style={styles.count}> ({item.count})</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// ✅ Inline CSS (no separate file needed)
const styles = {
  list: {
    listStyle: "none",
    padding: "20px 0",
    margin: 0,
    textAlign: "center",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  listItem: {
    display: "inline-block",
    margin: "0 20px",
  },
  link: {
    textDecoration: "none",
    color: "#111",
    fontWeight: "500",
    fontSize: "15px",
  },
  count: {
    color: "#999",
    marginLeft: "4px",
    fontSize: "14px",
  },
};

export default CategoryList;