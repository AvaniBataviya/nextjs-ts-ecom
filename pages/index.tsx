import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
      </Head>
      <h1>Home Page</h1>
    </div>
  );
}
