import Head from "next/head";
import { Inter } from "next/font/google";
import { Link } from "react-scroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Website.</title>
        <meta name="description" content="Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          {/*Section 1*/}
          <h1 id="Overview"></h1>
          <div className="hero min-h-screen bg-gradient-to-b from-slate-800 to-slate-700">
            <a
              className="absolute top-0 left-0 m-4 btn-accent py-2 px-4 rounded-full"
              href="/"
            >
              Home
            </a>
            <div className="hero-content text-center">
              <div className="grid gap-4 grid-cols-1">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">RustDesk</h2>
                    <p>Remote connect into desktop.</p>
                    <div className="card-actions justify-end">
                      <a className="btn btn-primary" href="/projects">
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer footer-center p-10 bg-slate-700 text-base-content rounded">
          <nav className="grid grid-flow-col gap-4 text-md">
            <a className="link link-hover" href="/remote">
              Remote
            </a>
            <a className="link link-hover" href="/projects">
              Projects
            </a>
            <a className="link link-hover" href="/homelab">
              Homelab
            </a>
            <a className="link link-hover" href="/about">
              About
            </a>
            <a
              className="link link-hover"
              href="https://wiki.kieranmcdonnell.com"
            >
              Wiki
            </a>
            <a className="link link-hover" href="/mailto:website@mcdonnell.cc">
              Contact
            </a>
            <a className="link link-hover" href="/">
              Terminal
            </a>
          </nav>
        </footer>
      </main>
    </>
  );
}
