/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-img-element */
// pages/index.js
/* https://flowrift.com/w/ */
// https://chot-inc.com/contact
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-110px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-110px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-110px" });
  const isInView4 = useInView(ref4, { once: true, margin: "-110px" });
  const isInView5 = useInView(ref5, { once: true, margin: "-110px" });

  const [formSubmitted, setFormSubmitted] = useState(true);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    emailjs
      .send("service_co4320p", "template_xne9yqe", data, "_3C4XqSTeKsFjAnJx")
      .then(
        (result) => {
          // console.log(result.text);
          reset();
          setFormSubmitted(true);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Head>
        <title>ShinCode.inc</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />

      <main className="container mx-auto my-16">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
          className="mx-auto max-w-screen-2xl px-4 md:px-8"
        >
          <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-10 lg:pb-24">
              <h1 className="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
                ShinCode.inc
              </h1>

              <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                HP/Web制作/Webアプリ開発会社です。
                <br />
                あなたのビジョンをWebで実現します。
              </p>
            </div>

            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
                <img
                  src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550"
                  loading="lazy"
                  alt="Photo by Kaung Htet"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550"
                  loading="lazy"
                  alt="Photo by Manny Moreno"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Link
              href="#product"
              className="block rounded-lg bg-indigo-500 px-7 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              実績・プロダクト一覧
            </Link>
          </div>
        </motion.section>

        <section
          id="product"
          ref={ref1}
          style={{
            transform: isInView1 ? "none" : "translateX(200px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="bg-white py-6 sm:py-12 lg:py-20 mt-10 rounded-t-xl"
        >
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl xl:mb-6">
              開発実績とプロダクト一覧
            </h2>
            <p className="mb-5 mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              会社HPやSNSアプリ開発等、幅広い領域のWeb開発を承っております。下記お問い合わせフォームからご相談も承ります。
            </p>
            <div className="mt-4 mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  HP
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  SNS
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  追加予定
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  追加予定
                </span>
              </a>
            </div>

            <div className="flex items-start justify-between gap-8 sm:items-center">
              <p className="max-w-screen-sm text-sm text-gray-500 lg:text-base">
                案件を受注次第新しく追加していく予定でございます。
              </p>

              <a
                href="#"
                className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                もっと見る
              </a>
            </div>
          </div>
        </section>

        <section
          ref={ref2}
          style={{
            transform: isInView2 ? "none" : "translateX(-200px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="bg-white py-6 sm:py-12 lg:py-20"
        >
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl xl:mb-6">
              プログラミング教育コンテンツ一覧
            </h2>
            <p className="mb-5 mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              YoutubeとUdemyでフルスタック技術を教育コンテンツとして販売しております。社員の教育コンテンツのご相談も承ります。
            </p>
            <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="./three-udemy-thumbnail.png"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Three.js
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="./notion-udemy.png"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Notion Clone
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="./notion-blog-udemy-2.png"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Notion Blog
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="./mern-stack-sns-udemy.png"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  SNS with MERN
                </span>
              </a>
            </div>

            <div className="flex items-start justify-between gap-8 sm:items-center">
              <p className="max-w-screen-sm text-sm text-gray-500 lg:text-base">
                Youtube +
                Udemyにてプログラミング教育コンテンツを発信しています。発信している技術スタックは弊社で全て利用可能です。
              </p>

              <a
                href="#"
                className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                もっと見る
              </a>
            </div>
          </div>
        </section>

        <section
          className="bg-white py-6 sm:py-8 lg:py-12"
          ref={ref3}
          style={{
            transform: isInView3 ? "none" : "translateX(200px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          id="skills"
        >
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                使用可能な技術スタック
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                フロントエンドからバックエンドまで幅広く対応しております。
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-14">
              <div className="flex flex-col items-center">
                <img src="./html.png" alt="html" className="w-1/4" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  HTML
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img src="./css.png" alt="css" className="w-1/4" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  CSS
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img src="./js.png" alt="js" className="w-1/5" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  Javascript
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img src="./ts.png" alt="ts" className="w-1/5" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  Typescript
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img src="./nodejs.png" alt="nodejs" className="w-1/5" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  Node.js
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img src="./react.png" alt="react" className="w-1/4" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  React
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <img src="./nextjs.svg" alt="nextjs" className="w-1/5" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  Next.js
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img src="./threejs.png" alt="threejs" className="w-1/4" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  Three.js
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <img src="./prisma.png" alt="threejs" className="w-1/5" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  Prisma
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <img src="./tailwindcss.png" alt="threejs" className="w-1/4" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  TailwindCSS
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <img src="./jwt.png" alt="threejs" className="w-1/4" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  JWT
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <img src="./graphql.png" alt="threejs" className="w-1/4" />

                <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                  GraphQL
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-white py-6 sm:py-20 lg:py-20"
          ref={ref4}
          style={{
            transform: isInView4 ? "none" : "translateX(-200px)",
            opacity: isInView4 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          id="quesitions"
        >
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                よくある質問
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                よくお問い合わせいただく質問の代表例です。分からない質問に関してはメールにてご連絡くださいませ。
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
              <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
                <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
                  フロントエンド開発はできますか？
                </h3>
                <p className="text-gray-500">
                  はい、フロントエンドに関する知識を豊富に備えておりますので開発可能です。ReactやNext.jsを使って高速で動くWeb制作が可能です。
                </p>
              </div>

              <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
                <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
                  ヘッドレスCMSの導入はできますか？
                </h3>
                <p className="text-gray-500">
                  はい、本HPのブログもCMSを利用して構築しております。ヘッドレスCMSの導入のご相談等も可能です。
                </p>
              </div>

              <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
                <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
                  開発費用の概算ってどのくらいですか？
                </h3>
                <p className="text-gray-500">
                  納期やプロジェクトの大きさによって異なります。会社HP制作であれば2ヶ月納期で100~200万円程度で引き受けることが可能です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-white py-6 sm:py-8 lg:py-12"
          ref={ref5}
          style={{
            transform: isInView5 ? "none" : "translateX(200px)",
            opacity: isInView5 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          id="contact"
        >
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                お問い合わせ
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                開発の発注やその他ご相談に関しては以下のフォームからご連絡ください！ShinCodeが対応いたします。
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
            >
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  姓
                </label>
                <input
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="mt-1 text-red-500 block">
                    姓は必須です。
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  名
                </label>
                <input
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  {...register("lastName", { required: true })}
                />
                {errors.firstName && (
                  <span className="mt-1 text-red-500 block">
                    名は必須です。
                  </span>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  会社名（任意）
                </label>
                <input
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  {...register("company", { required: false })}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  メールアドレス
                </label>
                <input
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="mt-1 text-red-500 block">
                    メールアドレスは必須です。
                  </span>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  お問い合わせ内容
                </label>
                <input
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  {...register("subject", { required: true })}
                />
                {errors.subject && (
                  <span className="mt-1 text-red-500 block">
                    お問い合わせ内容は必須です。
                  </span>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  詳細内容
                </label>
                <textarea
                  className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <span className="mt-1 text-red-500 block">
                    詳細内容は必須です。
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between sm:col-span-2">
                <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                  送信
                </button>
              </div>
              {formSubmitted && (
                <span className="text-green-500 whitespace-nowrap">
                  お問い合わせありがとうございます！返信まで今しばらくお待ちください。
                </span>
              )}
            </form>
          </div>
        </section>

        <footer className="bg-white rounded-b-xl">
          <div className="pt-12 lg:pt-16">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-16 grid grid-cols-3 gap-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
                <div className="col-span-full lg:col-span-2">
                  <div className="mb-4 lg:-mt-2">
                    <Link
                      href="/"
                      className="text-black-800 inline-flex items-center gap-2 text-xl font-bold md:text-2xl"
                      aria-label="logo"
                    >
                      <svg
                        width="95"
                        height="94"
                        viewBox="0 0 95 94"
                        className="h-auto w-5 text-indigo-500"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                      </svg>
                      ShinCode.inc
                    </Link>
                  </div>

                  <p className="mb-6 text-gray-500 sm:pr-8">
                    WebサイトやWebアプリ制作を承ります。
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                    >
                      <svg
                        className="h-5 w-5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>

                    <a
                      href="https://github.com/Shin-sibainu"
                      target="_blank"
                      className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                    >
                      <svg
                        className="h-5 w-5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                    会社
                  </div>

                  <nav className="flex flex-col gap-4">
                    <div>
                      <a
                        href="#"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Youtube
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Twitter
                      </a>
                    </div>
                  </nav>
                </div>

                <div>
                  <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                    サポート
                  </div>

                  <nav className="flex flex-col gap-4">
                    <div>
                      <a
                        href="#contact"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        お問い合わせ
                      </a>
                    </div>

                    <div>
                      <a
                        href="#question"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        よくあるご質問
                      </a>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="border-t py-8 text-center text-sm text-gray-400">
                © 2023 - Present SpeedFolio. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
