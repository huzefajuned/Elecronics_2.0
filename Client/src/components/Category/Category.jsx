import React from "react";
import styles from "../Category/Category.module.css";

const Category = () => {
  const categoryData = [
    {
      category: "Ear-Phones",
      url: "https://img.joomcdn.net/e01c27b3160989e66fb18ab53f3b88ba64a08cc8_original.jpeg",
    },
    {
      category: "Data Cables",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lH5mnMTeOyYdgOZfk3sog8OymHPiz_v7PQ&usqp=CAU",
    },
    {
      category: "EarBuds",
      url: "https://5.imimg.com/data5/FL/UP/DF/SELLER-67203831/i7-tws-earpod-250x250.jpg",
    },
    {
      category: "Ear-Phones",
      url: "https://img.joomcdn.net/e01c27b3160989e66fb18ab53f3b88ba64a08cc8_original.jpeg",
    },

    {
      category: "Ear-Phones",
      url: "https://img.joomcdn.net/e01c27b3160989e66fb18ab53f3b88ba64a08cc8_original.jpeg",
    },
    {
      category: "EarBuds",
      url: "https://5.imimg.com/data5/FL/UP/DF/SELLER-67203831/i7-tws-earpod-250x250.jpg",
    },
    {
      category: "Ear-Phones",
      url: "https://img.joomcdn.net/e01c27b3160989e66fb18ab53f3b88ba64a08cc8_original.jpeg",
    },
    {
      category: "Data Cables",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lH5mnMTeOyYdgOZfk3sog8OymHPiz_v7PQ&usqp=CAU",
    },
    {
      category: "EarBuds",
      url: "https://5.imimg.com/data5/FL/UP/DF/SELLER-67203831/i7-tws-earpod-250x250.jpg",
    },
    {
      category: "Ear-Phones",
      url: "https://img.joomcdn.net/e01c27b3160989e66fb18ab53f3b88ba64a08cc8_original.jpeg",
    },
    {
      category: "Data Cables",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lH5mnMTeOyYdgOZfk3sog8OymHPiz_v7PQ&usqp=CAU",
    },
    {
      category: "EarBuds",
      url: "https://5.imimg.com/data5/FL/UP/DF/SELLER-67203831/i7-tws-earpod-250x250.jpg",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        {categoryData.map((result) => {
          return (
            <>
              <div className={styles.card}>
                <img src={result.url} alt="category__image" />
                {/* <h4>{result.category}</h4> */}
              </div>
            </>
          );
        })}
      </div>
      {/* <div className={styles.buttons}>
        <button>Prev</button>
        <button>Nxt</button>
      </div> */}
    </>
  );
};

export default Category;
