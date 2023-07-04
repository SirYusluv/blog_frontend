import Head from "next/head";
import { FormEvent } from "react";
import classes from "./add.module.scss";

export default function Add() {
  function blogPostSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Add blog</title>
        <meta name="description" content="Add a blog post" />
      </Head>

      <form className={classes["form"]} onSubmit={blogPostSubmitHandler}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={classes["form__input"]}
        />
        <textarea
          name="detail"
          placeholder="detail or blog post"
          className={classes["form__input"]}
        ></textarea>

        <figcaption>
          {/* this usage was giving hydration error here, not sure why */}
          {/* <caption>Choose blog image</caption> */}
          <p>Choose blog image</p>
          <input type="file" name="file" />
        </figcaption>
        <input type="submit" value="Post Blog" />
      </form>
    </>
  );
}
