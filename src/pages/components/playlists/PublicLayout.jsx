const PublicLayout = ({children}) => {
  return (
    <section className="bg-dark text-white text-xl font-urbanist h-screen grid  bg-[url(/img/manchaMobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/img/manchaDesktop.png)] transition-all grid-rows-[auto,1fr]">
      <header className="bg-primary-dark flex  p-4 px-4 justify-center">
        <h1 className="font-semibold text-lg ">GIFT MUSIC</h1>

      </header>
      <section className="py-14 px-4 overflow-y-auto">
        <main className="w-[min(520px,_100%)] mx-auto bg-primary-dark py-8 px-6 sm:px-14 rounded-3xl">
            {children}
        </main>
      </section>
    </section>
  )
}
export default PublicLayout