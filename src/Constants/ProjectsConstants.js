import Cat from '../img/Cat.jpg';
import Validate from '../img/Validate.png';
import WishYouWereBeer from '../img/WishYouWereBeer.png';
import SuperGalacticAgeCalculator from '../img/SuperGalacticAgeCalculator.png';
import NoMoreCoverLetter from '../img/NoMoreCoverLetter.png';
import Pizzaria from '../img/Pizzaria.png';
import Valor from '../img/Valor.png';

export const PROJECTS = [
  {
    name: 'No More Cover Letter',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Mui', 'React', 'Firebase', 'Firestore'],
    description: 'A good cover letter can set an applicant apart from other candidates. Ideally, the applicant will include keywords/power words from the job posting in their cover letter. They can either manually do this by scanning the job posting and writing them down, or they can use this application to find them programmatically. Once the system has identified them, the user can upload them into the application and it will provide a score based on how many of those words match. This application is currently being utilized by the Coding Bootcamp, Epicodus in their career services department to assist with job placement for students.',
    link: 'https://nomorecoverletter.com/',
    repo: 'https://github.com/JesseDWhite/Job-Tracker',
    image: NoMoreCoverLetter
  },
  // {
  //   name: 'Valor Collegiate Academy',
  //   techStack: ['HTML', 'TailwindCSS', 'JavaScript', 'Node.js', 'Docker', 'React'],
  //   description: 'Valor is an all-in-one management system for teachers and faculty of a charter school. It can help manage staff, students, and schedules. This front-end-only application was developed from a Figma design based on client needs.',
  //   repo: 'https://github.com/JesseDWhite/school-dashboard',
  //   image: Valor
  // },
  {
    name: 'VALIDATE',
    techStack: ['JavaScript', 'Node.js', 'React', 'Formik', 'AWS', 'Amplify', 'DynamoDB', 'Mui', 'GraphQL'],
    description: 'VALIDATE will give small companies and startups the ability to create sophisticated forms that can generate market research for ideas, branding, products, and anything else the user might need.',
    link: 'https://github.com/Indev-Hub/VALIDATEAlpha',
    repo: 'https://github.com/Indev-Hub/VALIDATEAlpha',
    image: Validate
  },
  {
    name: 'Wish You Were Beer',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Bootstrap', 'React', 'Redux'],
    description: 'This application will allow the user to add kegs to their tap list for customers to buy. Each time a customer buys a pint, the total amount of pints remaining will decrease until that tap is out of stock.',
    link: 'https://wish-you-were-beer.herokuapp.com/',
    repo: 'https://github.com/JesseDWhite/wish-you-were-beer',
    image: WishYouWereBeer
  },
  {
    name: 'Super Galactic Age Calculator',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Bootstrap', 'TDD'],
    description: 'Use this application to see how old you would be on other planets! Put your name and current age into the form and you will see your answer on the right side of the page. You will also see what the average life expectancy is on that planet and how you compare.',
    link: 'https://nostalgic-joliot-c01fcb.netlify.app/',
    repo: 'https://github.com/JesseDWhite/super-galactic-age-calculator',
    image: SuperGalacticAgeCalculator
  },
  {
    name: 'Blind Cat Rescue',
    techStack: ['C#', 'NET', 'MySQL', 'Entity Framework Core', 'Swagger'],
    description: 'Blind Cat Rescue takes in all types of animals but has a soft spot for blind cats. Use this API to access their inventory of currently adoptable animals.',
    link: 'https://github.com/JesseDWhite/AnimalShelter.Solution',
    repo: 'https://github.com/JesseDWhite/AnimalShelter.Solution',
    image: Cat
  },
  {
    name: 'Cheesus Crust Pizzeria',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Bootstrap'],
    description: 'Welcome to Cheesus Crust Pizzeria and Baptism Clinic! The user can use this web application to place an order from a local pizza restaurant. Once the order has been complete, the user will receive their order total depending on the options they have selected.',
    link: 'https://jessedwhite.github.io/pizza-parlor/',
    repo: 'https://github.com/JesseDWhite/pizza-parlor',
    image: Pizzaria
  },
];