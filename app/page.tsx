export default function Home() {
  return (
    <main className="">
      <div className="h-screen flex flex-col items-center justify-center">
        <span className="flex items-center justify-center text-lg"><a href="http://github.com/devsujay19/astracss" target="_blank" className="text-blue-400 hover:underline">Astra CSS</a>&nbsp;is still in development...</span>
        <p>View current status at:</p>
        <a className="text-blue-400 hover:underline" href="http://astracss-status.vercel.app">https://astracss-status.vercel.app</a>
      </div>
    </main>
  );
};