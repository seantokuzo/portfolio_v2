export const projects = [
  {
    id: 1,
    name: 'Bobby Shmurdle',
    description: 'A Bobby Shmurda themed Wordle clone you can play forever',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/bobby-800sqr-light.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/bobby-800sqr-dark.png',
    link: 'https://bobby-shmurdle.netlify.app/',
    github: 'https://github.com/seantokuzo/bobby-shmurdle',
    stack: ['React', 'CSS3']
  },
  {
    id: 2,
    name: 'My Portfolio',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/portfolio-800sqr-light.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/portfolio-800sqr-dark.png',
    link: 'https://www.seantokuzo.dev/',
    github: 'https://github.com/seantokuzo/portfolio',
    description: 'My portfolio on my portfolio?! Woooah, my brain',
    stack: ['React', 'React Router', 'Sass', 'Green Sock Animation Platform']
  },
  {
    id: 3,
    name: 'Movie Watchlist',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/movie-watchlist-800sqr-light.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/movie-watchlist-800sqr-dark.png',
    link: 'https://shmovie-watchlist.netlify.app/',
    github: 'https://github.com/seantokuzo/shmovie-watchlist',
    description:
      'Build your own movie watchlist. Powered by The Movie Database API',
    stack: ['React', 'CSS3']
  },
  {
    id: 4,
    name: 'Natours',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/natours-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/natours-800sqr.png',
    link: 'https://natours-seantokuzo.herokuapp.com/',
    github: 'https://github.com/seantokuzo/StudyTimer',
    description: 'A fullstack mock e-commerce site for a tour company',
    stack: ['Node.js', 'MongoDB', 'Pug', 'Postman']
  },
  {
    id: 5,
    name: 'Study Timer',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/study-timer-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/study-timer-800sqr.png',
    link: 'https://study-timer-seantokuzo.netlify.app/',
    github: 'https://github.com/seantokuzo/StudyTimer',
    description: 'A nintendo themed study & break session timer.',
    stack: ['React', 'CSS3']
  },
  {
    id: 6,
    name: 'Le Calculator',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/calculator-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/calculator-800sqr.png',
    link: 'https://seantokuzo.github.io/Calculator/',
    github: 'https://github.com/seantokuzo/Calculator',
    description:
      'A simple Javascript calculator with different color themes. Do some maths!',
    stack: ['React', 'CSS3']
  },
  {
    id: 7,
    name: 'Drum Machine',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/drum-machine-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/drum-machine-800sqr.png',
    link: 'https://seantokuzo.github.io/DER-PC3000/',
    github: 'https://github.com/seantokuzo/DER-PC3000',
    description:
      'A mini drum machine with a tiny library of sounds and a few audio controls.',
    stack: ['React', 'CSS3', 'Ableton Live']
  }
  // {
  //   id: 8,
  //   name: 'Trivial Trivia',
  //   imgLight:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/trivial-trivia-800sqr.png',
  //   imgDark:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/trivial-trivia-800sqr.png',
  //   link: 'https://trivial-trivia-seantokuzo.netlify.app/',
  //   github: 'https://github.com/seantokuzo/TrivialTrivia',
  //   description: 'A trivia game to test your trivial knowledge',
  //   stack: ['React', 'CSS3']
  // }
  // {
  //   id: 9,
  //   name: 'Blackjack',
  //   imgLight: 'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/blackjack-800sqr.png',
  //   imgDark: 'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/blackjack-800sqr.png',
  //   link: 'https://seantokuzo.github.io/Blackjack/',
  //   github: 'https://github.com/seantokuzo/Blackjack',
  //   description:
  //     'A simple blackjack game powered by the Deck of Cards API. Play against an automated opponent',
  //   stack: ['html5', 'CSS3', 'javascript']
  // }
]

export type ProjectType = {
  id: number
  name: string
  description: string
  imgLight: string
  imgDark: string
  link: string
  github: string
  stack: string[]
}