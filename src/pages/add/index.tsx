import Head from "next/head";
import { FormEvent, useContext, useRef, useState } from "react";
import classes from "./add.module.scss";
import { API_URL } from "@/util";
import { AlertDialogContext } from "@/store/context";

export default function Add() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const detailRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const { dialogMessage: _, setDialogMessage } = useContext(AlertDialogContext);

  async function blogPostSubmitHandler(e: FormEvent<HTMLFormElement>) {
    if (isLoading) return;
    e.preventDefault();

    const title = titleRef.current?.value;
    const detail = detailRef.current?.value;
    const imageFiles = imageRef.current?.files;

    if (!title || !detail || !imageFiles || !imageFiles.length)
      return setDialogMessage("Every field value must be provided.");

    setIsLoading(true);

    const imageFile = imageFiles[0];
    const formData = new FormData();
    formData.append("title", title);
    formData.append("detail", detail);
    formData.append("file", imageFile);

    const blogResJSON = await fetch(`${API_URL}/blog`, {
      method: "POST",
      body: formData,
    });
    const blogRes = await blogResJSON.json();

    setDialogMessage(blogRes.message);

    titleRef.current.value = "";
    detailRef.current.value = "";
    imageRef.current.files = null;

    setIsLoading(false);
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
          ref={titleRef}
        />
        <textarea
          name="detail"
          placeholder="detail or blog post"
          className={`${classes["form__input"]} ${classes["form__textarea"]}`}
          ref={detailRef}
        ></textarea>

        <figcaption>
          {/* this usage was giving hydration error here, not sure why */}
          {/* <caption>Choose blog image</caption> */}
          <p className={classes["form__caption"]}>Choose blog image</p>
          <input type="file" name="file" accept="image/*" ref={imageRef} />
        </figcaption>
        <input
          type="submit"
          value="Post Blog"
          className={`btn ${classes["form__btn"]} ${
            isLoading ? "loading" : ""
          }`}
        />
      </form>
    </>
  );
}
