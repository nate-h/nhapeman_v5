"use client";

import Image from "next/image";
import { books } from "@/lib/data";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Books() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("scroll", checkScroll);
    }

    window.addEventListener("resize", checkScroll);

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="books" className="w-full relative py-20">
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Influential Career Reads
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          Beyond writing code, software engineering depends on a broad set of skills: communication,
          persuasion, initiative, leadership, resilience, developing other leaders, aligning
          incentives, and staying agile without falling into bureaucracy. Books like Turn the Ship
          Around and No Rules Rules have shaped me in those areas. Others have pushed me to
          contribute to anything that strengthens my country, such as Skunk Works or Apple in China.
        </p>

        {/* Horizontal Scrolling Container */}
        <div className="bg-gradient-to-br from-slate-800/90 to-emerald-900/50 backdrop-blur-md rounded-xl p-8 border border-emerald-500/40 hover:border-teal-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30">
          <div className="relative">
            {/* Left Scroll Button */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white p-4 rounded-full shadow-xl shadow-emerald-500/50 hover:shadow-emerald-400/70 transition-all hover:scale-110"
                aria-label="Scroll left"
              >
                <FaChevronLeft className="text-lg" />
              </button>
            )}

            {/* Right Scroll Button */}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white p-4 rounded-full shadow-xl shadow-emerald-500/50 hover:shadow-emerald-400/70 transition-all hover:scale-110"
                aria-label="Scroll right"
              >
                <FaChevronRight className="text-lg" />
              </button>
            )}

            {/* Gradient Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-800/90 to-transparent z-10 pointer-events-none"></div>

            {/* Gradient Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-800/90 to-transparent z-10 pointer-events-none"></div>

            {/* Scrollable Books */}
            <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6 px-4">
                {books.map((book, index) => {
                  const searchQuery = `${book.title} ${book.author}`.replace(/\s+/g, "+");
                  const googleBooksUrl = `https://www.google.com/search?tbo=p&tbm=bks&q=${searchQuery}`;
                  const bookNumber = index + 1;
                  const totalBooks = books.length;

                  return (
                    <a
                      key={book.coverUrl}
                      href={googleBooksUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-40 group cursor-pointer block"
                    >
                      {/* Book Cover */}
                      <div className="relative aspect-[2/3] mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-500/20 group-hover:border-cyan-400/60 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-emerald-500/30">
                        {/* Book Number Badge */}
                        <div className="absolute top-2 right-2 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                          {bookNumber}/{totalBooks}
                        </div>
                        {book.coverUrl ? (
                          <Image
                            src={book.coverUrl}
                            alt={book.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center p-4 text-center">
                            <p className="text-emerald-300 text-sm font-semibold leading-tight">
                              {book.title}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Book Info */}
                      <div className="text-center">
                        <h3 className="text-sm font-semibold text-cyan-300 mb-1 line-clamp-2 group-hover:text-emerald-300 transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-1">{book.author}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
