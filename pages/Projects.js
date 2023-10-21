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
        <script
          src="https://kit.fontawesome.com/3fd1789599.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main>
        <div className="hero min-h-screen bg-gradient-to-b from-base-200 to-slate-800">
          <div className="hero-content text-center">
            <a
              className="absolute top-0 left-0 m-4 btn-accent py-2 px-4 rounded-full"
              href="/"
            >
              Home
            </a>
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello again,</h1>
              <p className="py-6">
                Here are all of the projects that I am working on to teach
                myself new skills. If any are of interest take a look. If they
                are of no interest to you, they don't take a look.
              </p>
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
        {/*main content */}
        <h1 id="Overview"></h1>
        <div className="hero min-h-screen bg-gradient-to-b from-slate-800 to-slate-700">
          <div className="hero-content text-center">
            <div className="grid gap-4 grid-cols-2">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Cube Timer</h2>
                  <p>Self hostable alternative to CStimer. Similar features.</p>
                  <div className="card-actions justify-end">
                    <a className="btn btn-primary" href="/projects">
                      NOT STARTED
                    </a>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Website</h2>
                  <p>This website. Used to learn JS and Tailwind.</p>
                  <div className="card-actions justify-end">
                    <a
                      className="btn btn-primary"
                      href="https://github.com/KDM121/Website-V4"
                    >
                      See the code.
                    </a>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Old site</h2>
                  <p>Previous attempts and iterations</p>
                  <div className="card-actions justify-end">
                    <a
                      className="btn btn-primary"
                      href="https://github.com/KDM121/Website-V3"
                    >
                      See the failed attempts
                    </a>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                  <p></p>
                  <div className="card-actions justify-end">
                    <a className="" href=""></a>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                  <p></p>
                  <div className="card-actions justify-end">
                    <a className="" href=""></a>
                  </div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                  <p></p>
                  <div className="card-actions justify-end">
                    <button className=""></button>
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
