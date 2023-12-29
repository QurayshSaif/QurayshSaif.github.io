import CareerGuide from "../assets/images/portfolio/career-guide.png";
import InStock from "../assets/images/portfolio/in-stock.png";
import BrainFlix from "../assets/images/portfolio/brainflix.png";
import Hulu from "../assets/images/portfolio/hulu.png";
import Airbnb from "../assets/images/portfolio/airbnb.png";

const ProjectsPreviewData = [
  {
    id: "airbnb",
    img: Airbnb,
    name: "Airbnb",
    stack: ["< Next.js />", "< Tailwind CSS />", "< Mapbox />"],
    // website link
    src: "https://airbnb2-qurayshsaif.vercel.app/",
    // github link
    source: "https://github.com/QurayshSaif/airbnb",
    description:
      "Airbnb Clone is a frontend clone application of the Airbnb platform which features a search functionality, date and calender, mapbox functionality, users can use this website across different screen sizes",
  },
  {
    id: "in-stock",
    img: InStock,
    name: "InStock",
    stack: ["< MySQL />", "< Knex.js />", "< React.js />", "< Express.js />"],
    // website link
    src: "https://instock-nhucal.web.app/",
    // github link
    source: "https://github.com/QurayshSaif/saturn-instock",
    description:
      "InStock is a responsive website to track warehouses and inventory items. Users can add, edit, delete warehouses or inventory items. Collaborated using agile methodology with a group of 4 developers on Jira. Used Gitflow to complete this project efficiently.",
  },
  {
    id: "hulu",
    img: Hulu,
    name: "Hulu",
    stack: ["< Next.js />", "< Tailwind CSS />", "< RESTful API />"],
    // website link
    src: "https://hulu-2-0-qurayshsaif.vercel.app/",
    // github link
    source: "https://github.com/QurayshSaif/hulu-2.0",
    description:
      "Hulu 2.0 is a frontend clone website of the streaming platform Hulu, users can view the various movie or tv show categories across different screen sizes",
  },
  {
    id: "career-guide",
    img: CareerGuide,
    name: "Career Guide",
    stack: [
      "< React.js />",
      "< Sass />",
      "< Express.js />",
      "< RESTful API />",
      "< Node.js />",
    ],
    // website link
    src: "https://career-guide-qurayshsaif.vercel.app/",
    // github link
    source: "https://github.com/QurayshSaif/career-guide",
    description:
      "Career Guide is a responsive website for users who are not sure of what career they want to pursue. This website consists of a quiz and a job-search, once the user completes the quiz the user will get a result with top 5 career suggestions based on the answers provided. The user can also do a job-search to see available jobs in that particular career field.",
  },
  {
    id: "brainflix",
    img: BrainFlix,
    name: "BrainFlix",
    stack: [
      "< React.js />",
      "< Sass />",
      "< RESTful API />",
      "< Express.js />",
      "< Node.js />",
    ],
    // website link
    src: "https://brainflix-qurayshsaif.vercel.app/",
    // github link
    source: "https://github.com/QurayshSaif/BrainFlix",
    description:
      "BrainFlix is a responsive video viewing platform, where users can upload a video, add or delete a comment.",
  },
];

const ProjectsData = [
  {
    id: "airbnb",
    img: Airbnb,
    name: "Airbnb",
    stack: ["< Next.js />", "< Tailwind CSS />", "< Mapbox />"],
    // website link
    src: "https://airbnb2-qurayshsaif.vercel.app/",
    // github link
    source: "https://github.com/QurayshSaif/airbnb",
    description:
      "Airbnb Clone is a frontend clone application of the Airbnb platform which features a search functionality, date and calender, mapbox functionality, users can use this website across different screen sizes",
  },
  {
    id: "hulu",
    img: Hulu,
    name: "Hulu",
    stack: ["< Next.js />", "< Tailwind CSS />", "< RESTful API />"],
    // website link
    src: "https://hulu-2-0-qurayshsaif.vercel.app/",
    // github link
    source: "https://github.com/QurayshSaif/hulu-2.0",
    description:
      "Hulu 2.0 is a clone website of the streaming platform Hulu, users can view the various movie or tv show categories across different screen sizes",
  },
  {
    id: "career-guide",
    img: CareerGuide,
    name: "Career Guide",
    stack: [
      "< React.js />",
      "< Sass />",
      "< Express.js />",
      "< RESTful API />",
      "< Node.js />",
    ],
    // website link
    src: "https://career-guide-qurayshsaif.vercel.app/",
    // github link
    source: "https://github.com/QurayshSaif/career-guide",
    description:
      "Career Guide is a responsive website for users who are not sure of what career they want to pursue. This website consists of a quiz and a job-search, once the user completes the quiz the user will get a result with top 5 career suggestions based on the answers provided. The user can also do a job-search to see available jobs in that particular career field.",
  },
  {
    id: "in-stock",
    img: InStock,
    name: "InStock",
    stack: ["< MySQL />", "< Knex.js />", "< React.js />", "< Express.js />"],
    // website link
    src: "#",
    // github link
    source: "https://github.com/QurayshSaif/saturn-instock",
    description:
      "InStock is a responsive website to track warehouses and inventory items. Users can add, edit, delete warehouses or inventory items. Collaborated using agile methodology with a group of 4 developers on Jira. Used Gitflow to complete this project efficiently.",
  },
  {
    id: "brainflix",
    img: BrainFlix,
    name: "BrainFlix",
    stack: [
      "< React.js />",
      "< Sass />",
      "< RESTful API />",
      "< Express.js />",
      "< Node.js />",
    ],
    // website link
    src: "https://brainflix-qurayshsaif.vercel.app/",
    // github link
    source: "https://github.com/QurayshSaif/BrainFlix",
    description:
      "BrainFlix is a responsive video viewing platform, where users can upload a video, add or delete a comment.",
  },
];

export { ProjectsData, ProjectsPreviewData };
