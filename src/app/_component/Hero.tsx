
function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            All Your Digital Products

            <span className="sm:block"> Is one Click Away. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-black dark:text-white">
            Start Exploring State of the Art Assets Now!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:text-orange-500 hover:bg-transparent Dark:hover:text-white focus:outline-none active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-orange-600 px-12 py-3 text-sm font-medium text-orange-600 dark:text-white hover:text-white hover:bg-orange-600 focus:outline-none active:bg-orange-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero