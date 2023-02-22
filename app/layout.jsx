import "./globals.css";
import Header from "./Header/page";
import Hero from "./Hero/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <Header/>
        {children}
      </body>
    </html>
  );
}
