const developers = [
    {
        id: 1,
        name: "Thiago Colombo Russell",
        role: "Frontend Developer",
        tech: [
            {name:"React", level:80 },
            {name:"JavaScript", level: 75},
            {name: "CSS", level: 70}
        ],
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Desarrollador apasionado por crear interfaces modernas y experiencia de usuario atractivas",
        metrics: {
            experience_years: 1,
            projects_completed: 1,
            repositories: 1,
            english_level: "Intermedio",
        },
        cv: "/cv-thiago-colombo-russell.pdf"
    },
    {
        id: 2,
        name: "María López",
        role: "Backend Developer",
        tech: [
            {name: "Node.js", level: 90},
            {name: "Express", level: 85},
            {name: "MongoDB", level: 80}
        ],
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        bio: "Especialista en arquitecturas, backend y APIs escalables",
        metrics: {
            experience_years: 5,
            projects_completed: 40,
            repositories: 3,
            english_level: "Avanzado",
        },
        cv: "/cv-mar-a-l-pez.pdf"
    },
    {
        id: 3,
        name: "Mati Profe",
        role: "Full Stack Developer",
        tech: [
            {name: "Angular", level: 85},
            {name: "JavaScript", level: 85},
            {name: "TypeScript", level: 75}
        ],
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        bio: "Full stack developer enfocado en soluciones complejas y eficientes",
        metrics: {
            experience_years: 3,
            projects_completed: 20,
            repositories: 2,
            english_level: "Intermedio",
        },
        cv: "/cv-mati-profe.pdf"
    },
    {
        id: 4,
        name: "Juan Perez",
        role: "Game Developer",
        tech: [
            {name: "C++", level: 80},
            {name: "C#", level: 75},
            {name: "Unity", level: 85}
        ],
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        bio: "Ingeniero de software especializado en crear, programar y optimizar sistemas de videojuegos",
        metrics: {
            experience_years: 2,
            projects_completed: 4,
            repositories: 1,
            english_level: "Intermedio",
        },
        cv: "/cv-juan-perez.pdf"
    },
    {
        id: 5,
        name: "Carlos Ruiz",
        role: "DevOps Engineer",
        tech: [
            {name: "Docker", level: 88},
            {name: "Kubernetes", level: 82},
            {name: "AWS", level: 85}
        ],
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        bio: "Especialista en infraestructura en la nube y automatización de deployments",
        metrics: {
            experience_years: 6,
            projects_completed: 35,
            repositories: 5,
            english_level: "Avanzado",
        },
        cv: "/cv-carlos-ruiz.pdf"
    },
    {
        id: 6,
        name: "Laura Martínez",
        role: "Data Scientist",
        tech: [
            {name: "Python", level: 90},
            {name: "TensorFlow", level: 80},
            {name: "SQL", level: 85}
        ],
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        bio: "Científica de datos especializada en machine learning y análisis predictivo",
        metrics: {
            experience_years: 4,
            projects_completed: 22,
            repositories: 8,
            english_level: "Fluido",
        },
        cv: "/cv-laura-mart-nez.pdf"
    },
    {
        id: 7,
        name: "Diego Fernández",
        role: "Mobile Developer",
        tech: [
            {name: "React Native", level: 82},
            {name: "JavaScript", level: 80},
            {name: "Firebase", level: 78}
        ],
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        bio: "Desarrollador mobile con experiencia en aplicaciones iOS y Android",
        metrics: {
            experience_years: 3,
            projects_completed: 15,
            repositories: 3,
            english_level: "Intermedio",
        },
        cv: "/cv-diego-fern-ndez.pdf"
    },
    {
        id: 8,
        name: "Sofia García",
        role: "UX/UI Designer",
        tech: [
            {name: "Figma", level: 95},
            {name: "Prototyping", level: 88},
            {name: "Adobe XD", level: 85}
        ],
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        bio: "Diseñadora de experiencia de usuario con enfoque en accesibilidad",
        metrics: {
            experience_years: 5,
            projects_completed: 50,
            repositories: 2,
            english_level: "Avanzado",
        },
        cv: "/cv-sofia-garc-a.pdf"
    },
    {
        id: 9,
        name: "Pablo Gómez",
        role: "Backend Developer",
        tech: [
            {name: "Python", level: 88},
            {name: "Django", level: 86},
            {name: "PostgreSQL", level: 84}
        ],
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        bio: "Desarrollador backend con especialidad en arquitecturas de microservicios",
        metrics: {
            experience_years: 7,
            projects_completed: 45,
            repositories: 6,
            english_level: "Avanzado",
        },
        cv: "/cv-pablo-g-mez.pdf"
    },
    {
        id: 10,
        name: "Emma Wilson",
        role: "QA Engineer",
        tech: [
            {name: "Selenium", level: 87},
            {name: "Jest", level: 82},
            {name: "Cypress", level: 85}
        ],
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
        bio: "Ingeniera de calidad especializada en testing automatizado",
        metrics: {
            experience_years: 4,
            projects_completed: 30,
            repositories: 4,
            english_level: "Fluido",
        },
        cv: "/cv-emma-wilson.pdf"
    },
    {
        id: 11,
        name: "Miguel López",
        role: "Frontend Developer",
        tech: [
            {name: "Vue.js", level: 84},
            {name: "JavaScript", level: 82},
            {name: "Tailwind CSS", level: 88}
        ],
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        bio: "Frontend developer con passion por crear interfaces responsivas",
        metrics: {
            experience_years: 3,
            projects_completed: 18,
            repositories: 3,
            english_level: "Intermedio",
        },
        cv: "/cv-miguel-l-pez.pdf"
    },
    {
        id: 12,
        name: "Julieta Rodríguez",
        role: "DevOps Engineer",
        tech: [
            {name: "Terraform", level: 86},
            {name: "Jenkins", level: 84},
            {name: "Azure", level: 82}
        ],
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        bio: "Especialista en infraestructura as code e integración continua",
        metrics: {
            experience_years: 5,
            projects_completed: 40,
            repositories: 7,
            english_level: "Avanzado",
        },
        cv: "/cv-julieta-rodr-guez.pdf"
    },
    {
        id: 13,
        name: "Andrés Silva",
        role: "Full Stack Developer",
        tech: [
            {name: "MERN", level: 83},
            {name: "GraphQL", level: 78},
            {name: "Docker", level: 80}
        ],
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
        bio: "Full stack con experiencia en arquitecturas modernas de aplicaciones web",
        metrics: {
            experience_years: 4,
            projects_completed: 25,
            repositories: 5,
            english_level: "Intermedio",
        },
        cv: "/cv-andr-s-silva.pdf"
    },
    {
        id: 14,
        name: "Victoria Santos",
        role: "Data Analyst",
        tech: [
            {name: "Tableau", level: 89},
            {name: "Power BI", level: 87},
            {name: "SQL", level: 85}
        ],
        avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        bio: "Analista de datos con expertise en business intelligence",
        metrics: {
            experience_years: 6,
            projects_completed: 50,
            repositories: 3,
            english_level: "Avanzado",
        },
        cv: "/cv-victoria-santos.pdf"
    },
    {
        id: 15,
        name: "Roberto Hurtado",
        role: "Cybersecurity Specialist",
        tech: [
            {name: "Penetration Testing", level: 88},
            {name: "Network Security", level: 86},
            {name: "Python", level: 84}
        ],
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        bio: "Especialista en seguridad informática y gestión de vulnerabilidades",
        metrics: {
            experience_years: 8,
            projects_completed: 55,
            repositories: 4,
            english_level: "Fluido",
        },
        cv: "/cv-roberto-hurtado.pdf"
    },
    {
        id: 16,
        name: "Catalina Flores",
        role: "Mobile Developer",
        tech: [
            {name: "Swift", level: 85},
            {name: "Kotlin", level: 82},
            {name: "Firebase", level: 80}
        ],
        avatar: "https://randomuser.me/api/portraits/women/16.jpg",
        bio: "Desarrolladora mobile con experiencia en aplicaciones nativas iOS/Android",
        metrics: {
            experience_years: 5,
            projects_completed: 28,
            repositories: 4,
            english_level: "Avanzado",
        },
        cv: "/cv-catalina-flores.pdf"
    },
    {
        id: 17,
        name: "Luis Vargas",
        role: "AI Engineer",
        tech: [
            {name: "PyTorch", level: 87},
            {name: "Python", level: 89},
            {name: "NLP", level: 83}
        ],
        avatar: "https://randomuser.me/api/portraits/men/17.jpg",
        bio: "Ingeniero de IA enfocado en modelos de lenguaje natural",
        metrics: {
            experience_years: 6,
            projects_completed: 32,
            repositories: 9,
            english_level: "Fluido",
        },
        cv: "/cv-luis-vargas.pdf"
    },
    {
        id: 18,
        name: "Daniela Cruz",
        role: "Product Manager",
        tech: [
            {name: "Product Strategy", level: 90},
            {name: "Analytics", level: 85},
            {name: "Roadmapping", level: 88}
        ],
        avatar: "https://randomuser.me/api/portraits/women/18.jpg",
        bio: "Product Manager con experiencia en startups y empresas Fortune 500",
        metrics: {
            experience_years: 7,
            projects_completed: 60,
            repositories: 1,
            english_level: "Fluido",
        },
        cv: "/cv-daniela-cruz.pdf"
    },
    {
        id: 19,
        name: "Fernando Rojas",
        role: "Backend Developer",
        tech: [
            {name: "Go", level: 83},
            {name: "Rust", level: 78},
            {name: "gRPC", level: 81}
        ],
        avatar: "https://randomuser.me/api/portraits/men/19.jpg",
        bio: "Desarrollador backend especializado en sistemas de alto rendimiento",
        metrics: {
            experience_years: 5,
            projects_completed: 35,
            repositories: 8,
            english_level: "Avanzado",
        },
        cv: "/cv-fernando-rojas.pdf"
    },
    {
        id: 20,
        name: "Mariana Sosa",
        role: "DevOps Engineer",
        tech: [
            {name: "Prometheus", level: 86},
            {name: "ELK Stack", level: 84},
            {name: "GitLab CI", level: 85}
        ],
        avatar: "https://randomuser.me/api/portraits/women/20.jpg",
        bio: "Especialista en monitoreo, logging y observabilidad de sistemas",
        metrics: {
            experience_years: 6,
            projects_completed: 38,
            repositories: 6,
            english_level: "Avanzado",
        },
        cv: "/cv-mariana-sosa.pdf"
    },
    {
        id: 21,
        name: "Javier Ramírez",
        role: "Frontend Developer",
        tech: [
            {name: "Next.js", level: 86},
            {name: "TypeScript", level: 84},
            {name: "React", level: 87}
        ],
        avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        bio: "Frontend developer apasionado por performance y accesibilidad web",
        metrics: {
            experience_years: 4,
            projects_completed: 20,
            repositories: 5,
            english_level: "Intermedio",
        },
        cv: "/cv-javier-ram-rez.pdf"
    },
    {
        id: 22,
        name: "Alejandra Mendoza",
        role: "Data Scientist",
        tech: [
            {name: "Scikit-learn", level: 88},
            {name: "Pandas", level: 89},
            {name: "MLOps", level: 82}
        ],
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        bio: "Data scientist especializada en machine learning ops y pipelines",
        metrics: {
            experience_years: 5,
            projects_completed: 27,
            repositories: 10,
            english_level: "Avanzado",
        },
        cv: "/cv-alejandra-mendoza.pdf"
    },
    {
        id: 23,
        name: "Ricardo Cortés",
        role: "Full Stack Developer",
        tech: [
            {name: "Laravel", level: 85},
            {name: "Vue.js", level: 82},
            {name: "MySQL", level: 84}
        ],
        avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        bio: "Full stack developer con especialidad en aplicaciones web escalables",
        metrics: {
            experience_years: 6,
            projects_completed: 42,
            repositories: 5,
            english_level: "Intermedio",
        },
        cv: "/cv-ricardo-cort-s.pdf"
    }
]

export default developers