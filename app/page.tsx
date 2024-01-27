import HeroCarouel from "@/components/HeroCarouel";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { getAllProducts } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const Home = async () => {

  const allProducts =  await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 md:py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Start Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                width={16}
                height={16}

                alt="logo"
              />
            </p>
            <h1 className="head-text">
              Ab Prices Check Kariye Smartly with
              <span className="text-primary"> Price Check Kro</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <SearchBar />
          </div>
          <HeroCarouel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map(
            (product) => (
              <ProductCard key={product._id} product={product}/>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
