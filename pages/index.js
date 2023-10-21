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
        <div className="hero min-h-screen bg-gradient-to-b from-base-200 to-slate-800">
          <div className="hero-content text-center">
            <a className="absolute top-0 right-0 m-4  btn-accent py-2 px-4 rounded-full">
              Remote
            </a>
            <div className="max-w-md">
              <h1 className="text-7xl font-bold pb-3">Hello there</h1>
              <h1 className="text-5xl font-bold pb-3">Welcome to my website</h1>
              <Link
                to="Overview"
                smooth={true}
                duration={750}
                className="btn btn-ghost border-2 border-white bg-clear btn-circle text-4xl"
              >
                ⇩
              </Link>
            </div>
          </div>
        </div>
        <div>
          {/*Section 1*/}
          <h1 id="Overview"></h1>
          <div className="hero min-h-screen bg-gradient-to-b from-slate-800 to-slate-700">
            <div className="hero-content text-center">
              <div className="grid gap-4 grid-cols-2">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Projects</h2>
                    <p>These are the projects that I am working on currently</p>
                    <div className="card-actions justify-end">
                      <a className="btn btn-primary" href="/projects">
                        Take a Look
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Homelab</h2>
                    <p>Here are the services that I run on my Homelab</p>
                    <div className="card-actions justify-end">
                      <a className="btn btn-primary" href="/homelab">
                        See What I'm running
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">About</h2>
                    <p>Who am I? Do you know?</p>
                    <div className="card-actions justify-end">
                      <a className="btn btn-primary" href="/about">
                        Find out
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Wiki</h2>
                    <p>My brain on a wiki and my docker composes</p>
                    <div className="card-actions justify-end">
                      <a
                        className="btn btn-primary"
                        href="https://wiki.kieranmcdonnell.com/"
                      >
                        Gain Knowledge
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Contact</h2>
                    <p>I will 100% not respond to you</p>
                    <div className="card-actions justify-end">
                      <a className="btn btn-primary" href="/contact">
                        Try anyway
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Terminal</h2>
                    <p>Use the superior interface method</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        apt remove Web-Interface
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer footer-center p-4 text-base-content rounded bg-slate-700">
          <nav>
            <div className="grid grid-flow-col gap-4">
              <div>
                <img src="/github.svg" alt="github" />
              </div>
            </div>
          </nav>
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover" href="/">
              Home
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
            <a className="link link-hover" href="/contact">
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
