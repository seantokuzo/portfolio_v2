const Home: React.FC = () => {
  return (
    <section className="section home">
      <h1 className="home__title">Hello</h1>
      <h3 className="home__subtitle">
        I'm <span className="home__subtitle-span">Sean Simpson</span>
      </h3>
      <div className="home__pfp">
        <i className="fa-solid fa-user-secret home__pfp-fake"></i>
      </div>
      <h3 className="home__subtitle">
        a <span className="home__subtitle-span">Front End Developer</span> based
        in San Diego. I specialize in building responsive, performant and
        accessible websites and applications.
      </h3>
    </section>
  )
}

export default Home
