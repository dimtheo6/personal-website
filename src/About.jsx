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
          Hello, I&apos;m Dimitris, a passionate and motivated software
          developer with a degree in informatics, specializing in front-end web development.
          My journey in development began with a deep
          fascination for technology and problem-solving, which led me to focus
          on front-end web development.
          <br />
          <br />
          With experience in building dynamic and responsive web applications, I
          thrive on creating intuitive user experiences and scalable solutions.
          My academic background provided me with a strong foundation in
          software development principles, which I apply daily to build clean,
          efficient, and modern code.
        </p>
      </div>

      <div>
        <h1></h1>
      </div>
    </section>
  );
}
