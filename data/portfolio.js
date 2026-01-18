// Portfolio Data - Centralized content management
console.log('portfolio.js loaded');

const portfolioData = {
    personal: {
        name: "Ronit Sonawane",
        title: "B.Tech CSE @ IIT Guwahati • Full Stack Developer • ML Enthusiast",
        tagline: "I'm currently open to new projects and collaborations."
    },

    education: [
        {
            year: "2025 - Present",
            degree: "B.Tech CSE",
            institution: "Indian Institute of Technology, Guwahati",
            grade: "9.46 CGPA",
            details: "Roll No: 250101099"
        },
        {
            year: "2025",
            degree: "Senior Secondary",
            institution: "MSBSHSE Board",
            grade: "92.0%"
        },
        {
            year: "2023",
            degree: "Secondary",
            institution: "CBSE Board",
            grade: "97.67%"
        }
    ],

    projects: [
        {
            title: "PolyChat - AI Interface",
            description: "A full-stack platform integrating Cloud & Local LLMs (OpenAI, Gemini, Ollama) into a unified interface. Features a semantic routing system using vector embeddings and contextual memory architecture.",
            date: "Dec 2025 - Jan 2026",
            technologies: ["Node.js", "MongoDB", "Vector Embeddings", "Cosine Similarity"],
            github: "https://github.com/ronits2407/PolyChat",
            demo: null
        },
        {
            title: "Hostel Management Hub",
            description: "Streamlined hostel operations with secure student/admin portals. Features include event registration, complaint tracking, and an analytics dashboard.",
            date: "Oct 2025 - Nov 2025",
            technologies: ["Flask", "SQLAlchemy", "Bootstrap", "Full-Stack"],
            github: "https://github.com/ronits2407/Umiamdigitalhub",
            demo: "https://ronits24044.pythonanywhere.com/"
        },
        {
            title: "ML Crowd Energy Predictor",
            description: "Built predictive models (Linear Regression, Random Forest) to analyze crowd energy. Leveraged GridSearchCV for hyperparameter tuning and Matplotlib for EDA.",
            date: "Coding Club Task",
            technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
            github: "https://github.com/ronits2407/The-World-Tour-of-99-The-Data-Detective",
            demo: null
        }
    ],

    skills: [
        "Python", "C/C++", "JavaScript/TypeScript", "Node.js",
        "Flask", "MongoDB", "React/Express", "NumPy & Pandas",
        "Scikit-Learn", "Git & GitHub", "Linux"
    ],

    achievements: [
        {
            title: "1st Runner Up - Ideathon 2025",
            description: "Idea and prototype demonstrating event conducted by E-CELL (IITG)",
            icon: "fas fa-trophy"
        },
        {
            title: "CodeForces Rating 1208",
            description: "Highest rating achieved in competitive programming",
            icon: "fas fa-code"
        },
        {
            title: "JEE Advanced Rank 1874",
            description: "Among 1.8 Lakh applicants nationwide",
            icon: "fas fa-medal"
        }
    ],

    contact: {
        email1: "k.sonawane@iitg.ac.in",
        email2: "ronitsonawane2007@gmail.com",
        phone: "+91-8237942428",
        github: "https://github.com/ronits2407",
        linkedin: "https://www.linkedin.com/in/ronits2407/",
        codeforces: "https://codeforces.com/profile/ronits2407"
    },

    footer: {
        year: 2026,
        name: "Ronit Sonawane",
        message: "Designed with 💻 & ☕"
    }
};
