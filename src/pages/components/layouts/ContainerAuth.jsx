/* eslint-disable react/prop-types */
const ContainerAuth = ({children}) => {
  return (
    <main className="bg-dark text-white text-xl font-urbanist h-screen grid items-center px-4 bg-[url(/img/manchaMobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/img/manchaDesktop.png)] transition-all">
    {/* banner imagen */}
    <section className="grid md:grid-cols-[auto_400px] gap-10 md:justify-center">

    {children}
    
    </section>
    </main>
  )
}
export default ContainerAuth