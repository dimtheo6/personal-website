export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col w-screen max-md:gap-5 max-md:px-10 md:px-20 lg:px-40 2xl:px-96"
    >
      <header className="flex  justify-between">
        <div className="empty md:w-1/2 max-md:w-0"></div>
        <div className="flex items-center md:w-1/2 max-md:w-full gap-4">
          <h1 className="text-2xl">About me</h1>
          <hr className={`flex-1 h-[2px] bg-black  `}></hr>
        </div>
      </header>
      <div className="about_container flex  items-center max-md:flex-col ">
        <div className="flex md:w-1/2 justify-evenly items-center">
          <img
            src="/profile.webp"
            alt="profile image"
            className="h-72 w-72 rounded-3xl"
          />
        </div>

        <p className="md:w-1/2 py-5 leading-7 text-lg">
          Hi, I&apos;m Dimitris — a front-end developer based in Greece, working
          mainly with React, Next.js, and TypeScript. I currently work in IT
          support, where I spend my days solving problems for real users —
          experience I bring directly into how I think about front-end work.
          <br />
          <br />
          Outside of that, I build full-featured projects like an e-commerce app
          with Stripe payments, Firebase authentication, and an admin dashboard,
          and a game-browsing app built on a public API. I'm looking for my
          first role as a front-end developer, where I can keep building things
          people actually use.
        </p>
      </div>

      <div>
        <h1></h1>
      </div>
    </section>
  );
}
