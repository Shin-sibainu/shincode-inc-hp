import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-transparent lg:pb-12 mb-10 mt-2">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col">
        <header className="flex items-center justify-between py-4 md:py-8">
          <Link
            href="/"
            className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
            aria-label="logo"
          >
            <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="h-auto w-6 text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            ShinCode
          </Link>

          <nav className="hidden gap-12 lg:flex">
            <a
              href="#product"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              プロダクト
            </a>

            <a
              href="#skills"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              技術スタック
            </a>
            <a
              href="#questions"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              よくある質問
            </a>
            <a
              href="#contact"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              お問い合わせ
            </a>
          </nav>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            メニュー
          </button>

          {isMenuOpen && (
            <nav
              className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              } z-50 lg:hidden`}
            >
              <div className="px-6 py-8">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="mb-8 flex items-center justify-end bg-slate-300 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <a
                  href="#product"
                  className="mb-5 block text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  プロダクト
                </a>

                <a
                  href="#skills"
                  className="mb-5 block text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  技術スタック
                </a>
                <a
                  href="#questions"
                  className="mb-5 block text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  よくある質問
                </a>
                <a
                  href="#contact"
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                >
                  お問い合わせ
                </a>
              </div>
            </nav>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
