import React from "react";

function Quotes({quote, author}) {
  return (
    <figure className="my-12">
      <blockquote className="bg-teal-600 dark:bg-black pl-12 pr-8 py-12 rounded-3xl relative">
        <p
         
          className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:content-['\201C'] before:translate-x-2 before:translate-y-2 
      
      after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:content-['\201D'] after:-translate-x-2 after:-translate-y-2
      "
        >
        {quote}
        </p>
      </blockquote>
      <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
        &#8212;{author}
      </figcaption>
    </figure>
  );
}

export default Quotes;
