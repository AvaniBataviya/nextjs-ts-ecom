import Head from "next/head";
import SignInForm from "../src/components/auth/SignInForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
      </Head>
      <SignInForm />
    </div>
  );
}
