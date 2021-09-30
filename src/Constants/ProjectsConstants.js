import Cat from '../img/Cat.jpg';
import Validate from '../img/Validate.png';
import WishYouWereBeer from '../img/WishYouWereBeer.png';
import SuperGalacticAgeCalculator from '../img/SuperGalacticAgeCalculator.png';
import NoMoreCoverLetter from '../img/NoMoreCoverLetter.png';
import Pizzaria from '../img/Pizzaria.png';

export const PROJECTS = [
  {
    name: 'No More Cover Letter',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Bootstrap', 'React', 'Redux', 'Firebase'],
    description: 'This application was meant to streamline and de-mistify the process of writing a cover letter for a job application. A good cover letter can really set you apart from other candidates in the applicant pool and a great way to spice up your cover letter, is to include keywords/power words from the job posting into your cover letter. You can manually do this by scanning the job posting and writing them down as you go, or you can use this application to find them for you. Once this system has identified them, include them in your cover letter, upload it into this application and it will give you a letter grade for how many of those words are a match and if you should apply!',
    link: 'https://no-more-cover-letter.firebaseapp.com/',
    repo: 'https://github.com/JesseDWhite/no-more-cover-letter',
    image: NoMoreCoverLetter
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
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Bootstrap'],
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
    name: 'VALIDATE',
    techStack: ['JavaScript', 'Node.js', 'React', 'Formik', 'AWS', 'Amplify', 'DynamoDB', 'Material Ui', 'GraphQL'],
    description: 'VALIDATE will give small companies and startups the ability to create sophisticated forms that can generate market research for ideas, branding, products, and anything else the user might need.',
    link: 'https://github.com/Indev-Hub/VALIDATEAlpha',
    repo: 'https://github.com/Indev-Hub/VALIDATEAlpha',
    image: Validate
  },
  {
    name: 'Cheesus Crust Pizzeria',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Bootstrap'],
    description: 'Welcome to Cheesus Crust Pizzeria and Baptism Clinic! The user can use this web application to place an order from a local pizza restaurant. Once the order has been complete, the user will receive their order total depending on the options they have selected.',
    link: 'https://jessedwhite.github.io/pizza-parlor/',
    repo: 'https://github.com/JesseDWhite/pizza-parlor',
    image: Pizzaria
  },
]