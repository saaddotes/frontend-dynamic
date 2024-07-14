import Navbar from "@/components/navbar";
import getStrapiData from "./services/fetchData";

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page")
  const baseUrl = 'http://localhost:1337';
  const { title, description, heroSection: { heroTitle, heroDescription, heroBtn, heroBackground } } = strapiData;

  return (

    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <header className="fixed top-0 left-0 right-0 z-10 p-4 md:p-8 lg:p-12">
    //     <div className="container flex justify-between">
    //       <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h1>
    //       <p className="text-xl md:text-2xl lg:text-3xl ">{description}</p>
    //     </div>
    //   </header>
    //   <section className="px-4 py-8 md:px-8 lg:px-16">
    //     <h2 className="text-3xl font-bold pb-6 md:text-4xl lg:text-5xl">
    //       {heroTitle}
    //     </h2>
    //     <p className="text-xl pb-6 md:text-2xl lg:text-3xl">
    //       {heroDescription}
    //     </p>
    //     <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded">
    //       {heroBtn?.text}
    //     </button>
    //   </section>
    //   <section className="relative h-screen bg-gray-100 bg-center bg-no-repeat bg-cover"
    //     style={{ backgroundImage: `url(${baseUrl}${heroBackground?.url})` }}>
    //     <div className="absolute inset-0 bg-black/50">
    //       <div className="flex flex-col h-full justify-center px-4 text-white md:px-8 lg:px-16">
    //         <h1 className="text-5xl font-bold pb-4 md:text-6xl lg:text-7xl">{heroTitle}</h1>
    //         <p className="text-xl pb-6 md:text-2xl lg:text-3xl">{heroDescription}</p>
    //         <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded">{heroBtn?.text}</button>
    //       </div>
    //     </div>
    //   </section>

    // </main>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar />
      <header
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${baseUrl}${heroBackground})` }}
      >
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-60 p-8 rounded-lg text-white mx-4">
          <h1 className="text-4xl font-bold mb-4">{heroTitle}</h1>
          <p className="text-lg mb-8 text-center">{heroDescription}</p>
          <a
            href="#"
            className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md"
          >
            {heroBtn.linkText}
          </a>
        </div>
      </header>
      <main className="w-full max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">{heroTitle}</h2>
        <p className="text-lg mb-8 text-center">{heroDescription}</p>
      </main>
    </div>
  );

}
