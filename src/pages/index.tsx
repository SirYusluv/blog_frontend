import Head from "next/head";
import add from "@/imgs/add.svg";
import Image from "next/image";
import classes from "./index.module.scss";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog list" />
      </Head>
      <main className="blogs">
        <div className={`${classes["blogs__no-blog"]} center info`}>
          <p>Nothing here yet!!!</p>
          <p>Click the add "+" botton below to start creating blog posts.</p>
        </div>

        <Image
          className={`${classes.add} link`}
          alt="add button"
          src={add}
          width={50}
          height={50}
          onClick={() => router.push("/add")}
        />
      </main>
    </>
  );
}
