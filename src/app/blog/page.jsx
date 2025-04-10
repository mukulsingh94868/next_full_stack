import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";
  console.log(`API URL: ${apiUrl}`);
  const res = await fetch(`${apiUrl}api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.slice(0, 10).map((item, index) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item._id || index}>
          <div className={styles.imageContainer}>
            <Image
              src="/pixel.jpeg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;