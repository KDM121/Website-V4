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
            <a
              className="absolute top-0 left-0 m-4 btn-accent py-2 px-4 rounded-full"
              href="/support"
            >
              Support
            </a>
            <a
              href="https://github.com/KDM121/"
              className="absolute top-0 right-0 m-4 py-2 px-4 btn-rounded btn-ghost rounded-full"
            >
              <img src="/github.png" className="w-9 h-9"></img>
            </a>
            <div className="max-w-md">
              <h1 className="text-7xl font-bold pb-3">Hello,</h1>
              <h1 className="text-5xl font-bold pb-3">Website.</h1>
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
                    <p>Useful commands and docker composes</p>
                    <div className="card-actions justify-end">
                      <a
                        className="btn btn-primary"
                        href="https://wiki.kieranmcdonnell.com/"
                      >
                        Increase Brain
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Contact</h2>
                    <p>5% Chance of response</p>
                    <div className="card-actions justify-end">
                      <a
                        className="btn btn-primary"
                        href="mailto:website@mcdonnell.cc"
                      >
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
                        apt remove Web-UI
                      </button>
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
            <a className="link link-hover" href="/support">
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
            <a className="link link-hover" href="mailto:website@mcdonnell.cc">
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
