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
              <h1 className="text-5xl font-bold">Hello there,</h1>
              <p className="py-6">
                Here is what I run at home to replace cloud services and to
                ensure I don't rely on big corportations. Also where I store my
                legal linux ISO's .
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
        <div className="hero min-h-screen bg-gradient-to-b from-slate-800 to-slate-700 pb-24">
          <div className="hero-content text-center">
            <div className="grid gap-4 grid-cols-3">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Nextcloud</h2>
                  <p>
                    Personal cloud to store files & photos for local and remote
                    access
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">TrueNAS</h2>
                  <p>
                    NAS for backups of PC's and Nodes (and some linux ISO's).
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Proxmox</h2>
                  <p>My hypervisor of choice for my cluster of computers.</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Portainer</h2>
                  <p>
                    web interface to manage docker containers and environments
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Homarr</h2>
                  <p>Dashboard I use to access my services.</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">IT-Tools</h2>
                  <p>
                    A whole suite of useful tools instead of relying on dodgy
                    sites.
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Metube</h2>
                  <p>Download music and videos for offline playback.</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Nginx Proxy Manager</h2>
                  <p>
                    Reverse proxy manager to access internal services
                    externally.
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Pi-Hole</h2>
                  <p>Network wide adblocker with DoH.</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">speedtest-tracker</h2>
                  <p>See when the speed of the internet dips and peaks.</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">uptime-kuma</h2>
                  <p>See whats online and whats offline.</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Bookstack</h2>
                  <p>
                    Wiki of useful stuff that i think is useful including
                    compose files.
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">OPNsense</h2>
                  <p>Self hosted router for VLANS and networking.</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Kasm</h2>
                  <p>instant containers span up for viruses and testing.</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Home Assistant</h2>
                  <p>Home assistant for home assistanty stuff.</p>
                  <div className="card-actions justify-end"></div>
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
