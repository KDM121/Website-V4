import { Inter } from "next/font/google";
import { Link } from "react-scroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kierans Website</title>
        <meta name="description" content="Kieran's Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon.ico" />
      </Head>
      <main>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-7xl font-bold pb-3">Hello there</h1>
              <h1 className="text-5xl font-bold pb-3">Welcome to my website</h1>
              <Link
                to="Overview"
                smooth={true}
                duration={500}
                offset={-50}
                className="btn btn-ghost border-2 border-white bg-slate-600 btn-circle text-4xl"
              >
                ⇩
              </Link>
            </div>
          </div>
        </div>
        <div>
          {/*Section 1*/}
          <h1 id="Overview"></h1>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div class="grid gap-4 grid-cols-2">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Projects</h2>
                    <p>These are the projects that I am working on currently</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Take a Look</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Homelab</h2>
                    <p>Here are the services that I run on my Homelab</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        See What I'm running
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">About</h2>
                    <p>Who am I? Do you know?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Find out</button>
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
                        apt remove Web-Interface
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
