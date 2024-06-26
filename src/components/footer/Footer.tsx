import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[300px] flex h-[422px] w-full flex-col items-center justify-center bg-[#8DD3BB]">
      <div className="flex w-10/12 -translate-y-24 flex-col gap-16">
        <div className="flex justify-between rounded-3xl bg-[#CDEAE1] px-6 max-[1210px]:justify-center">
          <div className="flex flex-col justify-between py-6 max-[1210px]:items-center">
            <p className="flex-col font-mono text-5xl font-semibold text-black opacity-80 max-[1210px]:justify-center">
              Subscribe
              <br />
              Newsletter
            </p>
            <div className="flex flex-col gap-4">
              <div className="gap-2 max-[1210px]:flex max-[1210px]:flex-col max-[1210px]:items-center max-[1210px]:align-middle">
                <p className="text-xl font-bold text-[#112211] opacity-80">
                  The Travel
                </p>
                <p className="leading-5 text-[#112211] opacity-70">
                  Get inspired! Receive travel discounts, tips and behind the
                  scenes stories.
                </p>
              </div>
              <div className="flex h-[56px] w-full gap-4">
                <input
                  className="w-full rounded px-2 placeholder:font-sans placeholder:text-base placeholder:font-light placeholder:leading-5 placeholder:text-[#1C1B1F] placeholder:opacity-80"
                  placeholder="Your email address"
                ></input>
                <button className="rounded bg-[#112211] px-4 py-2 font-mono text-sm text-white delay-75 duration-100 ease-in-out hover:bg-gray-400">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="max-[1210px]:hidden">
            <img src="./mailx.svg" alt="mailx"></img>
          </div>
        </div>
        <div className="flex gap-[140px] max-[1210px]:justify-center">
          <div className="flex flex-col gap-6 max-[1210px]:items-center">
            <img src="./hm.png" alt="logo"></img>
            <div className="flex gap-2 max-[1210px]:gap-4">
              <img src="./facebook.svg" alt="facebook" />
              <img src="./twitter.svg" alt="twitter" />
              <img src="./youtube.svg" alt="youtube" />
              <img src="./instagram.svg" alt="instagram" />
            </div>
          </div>
          <div className="mr-20 flex w-full justify-between gap-6 max-[1210px]:hidden">
            <div className="flex flex-col gap-4 text-[#112211]">
              <div className="font-sans text-base font-semibold">
                <h1 className="">Our Destinations</h1>
              </div>
              <div className="flex flex-col gap-3 font-sans text-sm opacity-70">
                <p>Canada</p>
                <p>Alaska</p>
                <p>France</p>
                <p>Iceland</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-[#112211]">
              <div className="font-sans text-base font-semibold">
                <h1 className="">Our Activities</h1>
              </div>
              <div className="flex flex-col gap-3 font-sans text-sm opacity-70">
                <p>Northern Lights</p>
                <p>Cruising & sailing</p>
                <p>Multi-activities</p>
                <p>Kayaing</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-[#112211]">
              <div className="font-sans text-base font-semibold">
                <h1 className="">Travel Blogs</h1>
              </div>
              <div className="flex flex-col gap-3 font-sans text-sm opacity-70">
                <p>Bali Travel Guide</p>
                <p>Sri Lanks Travel Guide</p>
                <p>Peru Travel Guide</p>
                <p>Bali Travel Guide</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-[#112211]">
              <div className="font-sans text-base font-semibold">
                <h1 className="">About Us</h1>
              </div>
              <div className="flex flex-col gap-3 font-sans text-sm opacity-70">
                <p>Our Story</p>
                <p>Work with us</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-[#112211]">
              <div className="font-sans text-base font-semibold">
                <h1 className="">Contact Us</h1>
              </div>
              <div className="flex flex-col gap-3 font-sans text-sm opacity-70">
                <p>Our Story</p>
                <p>Work with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
