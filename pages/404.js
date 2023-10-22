import Head from "next/head";
import { Inter } from "next/font/google";
import { Link } from "react-scroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>404.</title>
        <meta name="description" content="Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/3fd1789599.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-9xl font-bold pb-12">404</h1>
              <h1 className="text-5xl font-bold">
                Wait! Where is the content?
              </h1>
              <p className="pt-6">You thought I had created this page?</p>
              <p className="pb-6"> well I haven't...</p>
              <a className="btn btn-primary" href="/">
                Go back home?
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
