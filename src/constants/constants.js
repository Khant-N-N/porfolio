import {
    bootstrap,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    movie_mobo,
    movie_pc,
    gym_pc,
    gym_mobo,
    ecom_mobo,
    ecom_pc,
    coffee_mobo,
    coffee_pc,
    github,
    facebook,
    linkin,
    email
} from "../assets";

export const navLinks = [
    {
        id: "hero",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const technologies = [
    {
        id: 1,
        name: "HTML 5",
        icon: html,
    },
    {
        id: 2,
        name: "CSS 3",
        icon: css,
    },
    {
        id: 3,
        name: "JavaScript",
        icon: javascript,
    },

    {
        id: 4,
        name: "React JS",
        icon: reactjs,
    },
    {
        id: 5,
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        id: 6,
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        id: 7,
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        id: 8,
        name: "git",
        icon: git,
    },
    {
        id: 9,
        name: "figma",
        icon: figma,
    },

];

const contacts = [
    {
        logo: github,
        link: "https://github.com/Khant-N-N",
    },
    {
        logo: facebook,
        link: "https://www.facebook.com/khantnyi.nyi.3323457",
    },
    {
        logo: linkin,
        link: "https://www.linkedin.com/in/khantnyi-nyi-ab784a284/",
    },
    {
        logo: email,
        link: "mailto:khantnyinyi.magnet@gmail.com"
    }
]

const projects = [
    {
        name: "WatchWatch Movie data app",
        description:
            "A movie website that allows user to search various of movies and tv shows which contain descriptions and trailer links from TMDB api. For backend, Firebase's email authentication is used to allow the users for creating accounts, login/out, password reset, account update, save/remove movie.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "TMDB_API",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "orange-text-gradient",
            },
        ],
        bigScreenImage: movie_pc,
        smallScreenImage: movie_mobo,
        demo: "https://watchwatch-ca062.firebaseapp.com/",
        source_code_link: "https://github.com/Khant-N-N/movie-app",
    },
    {
        name: "Coffee Blend",
        description: "A website about coffee shop that includes shop's info, blogs, menu and add to cart system. The design is from the colorlib.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux_toolkit",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },

        ],
        bigScreenImage: coffee_pc,
        smallScreenImage: coffee_mobo,
        demo: "https://coffee-blend-jade.vercel.app/",
        source_code_link: "https://github.com/Khant-N-N/Coffee_Blend",
    },
    {
        name: "Gym Exercises",
        description:
            "Web application that enables users to search for 1000 of exercises with instructions from rapidAPI's exerciseDB",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "exercisedb_api",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        bigScreenImage: gym_pc,
        smallScreenImage: gym_mobo,
        demo: "https://exercise-lar3242.netlify.app/",
        source_code_link: "https://github.com/Khant-N-N/Exercises_app",
    },
    {
        name: "Ecommerce Website",
        description:
            "An ecommerce website which contains products' data from dummyJSON with searching products, add to favourite, add to cart functions",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {

                name: "dummyjson_api",
                color: "green-text-gradient",
            },
            {
                name: "context_api",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "orange-text-gradient",
            },
        ],
        bigScreenImage: ecom_pc,
        smallScreenImage: ecom_mobo,
        demo: "https://gla-ecommerce.netlify.app/",
        source_code_link: "https://github.com/Khant-N-N/Ecommerce-website",
    },
];

export { technologies, projects, contacts };