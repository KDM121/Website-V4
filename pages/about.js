import Head from "next/head";
import { Inter } from "next/font/google";
import { Link } from "react-scroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>About.</title>
        <meta name="description" content="Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold">Hello</h1>
              <p className="py-6">
                I am a technology enthusiast who enjoys messing around with
                hardware and software. I have taught myself docker
                containerization, Proxmox and Linux through self-hosting. I’m
                also learning networking through the use of self-hosting
                OPNsense. The hardware I am currently working on is a triple
                node Proxmox cluster of mini PCs and an old Dell PowerEdge R620
                with around 15 thin clients. I am also learning basic JavaScript
                web development – with which I wrote this site. Future plans are
                to learn Kuberenetes clustering and backend web development.
              </p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer footer-center p-10 bg-slate-800 text-base-content rounded">
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
