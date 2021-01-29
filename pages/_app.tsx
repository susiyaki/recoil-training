import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto bg-gray-100">
      <div className="container mx-auto h-screen">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
