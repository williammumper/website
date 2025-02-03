import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>My Personal Website</title>
        <meta name="description" content="Welcome to my personal website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center p-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Website</h1>
        <p className="text-lg text-gray-600 mt-4">
          Hi, I'm William. This is my personal space on the web.
        </p>
        <p className="text-lg text-gray-600">
          Check out my work, projects, and thoughts here.
        </p>
        <a
          href="https://github.com/yourusername"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          View My GitHub
        </a>
      </main>
    </div>
  );
}