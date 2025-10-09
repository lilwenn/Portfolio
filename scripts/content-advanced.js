/**
 * Contenu enrichi des modales
 * Support pour images, vidéos, galeries, liens, etc.
 */

const contentAdvanced = {
    computer: {
        title: "💻 Mes Projets Techniques",
        image: "assets/images/projects/main-project.jpg", // Image principale
        description: "Découvrez l'ensemble de mes réalisations techniques. Chaque projet reflète mon engagement et ma passion pour la technologie.",
        
        sections: [
            {
                title: "🚀 Projets phares",
                content: "Voici mes réalisations les plus abouties, développées avec passion et rigueur."
            }
        ],
        
        gallery: [
            {
                src: "assets/images/projects/project1.jpg",
                alt: "Projet 1 - Application web",
                title: "Application de gestion"
            },
            {
                src: "assets/images/projects/project2.jpg",
                alt: "Projet 2 - Site vitrine",
                title: "Site vitrine moderne"
            },
            {
                src: "assets/images/projects/project3.jpg",
                alt: "Projet 3 - Dashboard",
                title: "Dashboard analytique"
            }
        ],
        
        tags: ["HTML/CSS", "JavaScript", "React", "Node.js", "Git"],
        
        links: [
            {
                text: "Voir sur GitHub",
                url: "https://github.com/votre-username",
                icon: "🔗"
            },
            {
                text: "Démo en ligne",
                url: "https://demo.example.com",
                icon: "🚀"
            }
        ]
    },

    notebook: {
        title: "📔 Mon Parcours",
        image: "assets/images/parcours/formation.jpg",
        description: "Mon cheminement académique et professionnel, guidé par la curiosité et l'envie d'apprendre.",
        
        timeline: [
            {
                date: "2023-2025",
                title: "Formation actuelle",
                content: "Développement web et applications, apprentissage des technologies modernes"
            },
            {
                date: "2021-2023",
                title: "Études antérieures",
                content: "Bases en informatique et découverte de la programmation"
            },
            {
                date: "2020",
                title: "Premiers pas",
                content: "Découverte du code et passion pour le web"
            }
        ],
        
        sections: [
            {
                title: "🎓 Formations",
                content: "Détails de mes formations et certifications"
            },
            {
                title: "💼 Expériences",
                content: "Mes stages et projets professionnels"
            }
        ],
        
        links: [
            {
                text: "Télécharger mon CV",
                url: "assets/files/CV_Lilwenn.pdf",
                icon: "📄"
            }
        ]
    },

    headphones: {
        title: "🎧 Mes Inspirations",
        video: "assets/videos/inspiration.mp4", // Vidéo
        description: "La musique et les sons qui m'inspirent au quotidien et accompagnent mes projets.",
        
        sections: [
            {
                title: "🎵 Playlist de travail",
                content: "Des ambiances qui favorisent ma concentration et ma créativité"
            },
            {
                title: "🎨 Inspirations artistiques",
                content: "Les artistes et univers qui nourrissent mon imagination"
            }
        ],
        
        tags: ["Lo-fi", "Ambient", "Jazz", "Electronic"],
        
        links: [
            {
                text: "Ma playlist Spotify",
                url: "https://open.spotify.com/playlist/...",
                icon: "🎵"
            }
        ]
    },

    aquarium: {
        title: "🐠 Aquarium Zen",
        image: "assets/images/aquarium/fish.jpg",
        description: "Un espace de détente et de contemplation qui m'accompagne au quotidien.",
        
        sections: [
            {
                title: "🌊 Philosophie",
                content: "Comme ces poissons qui évoluent paisiblement, je cultive la sérénité et la concentration dans mon travail."
            }
        ]
    },

    // Exemples pour les autres objets...
    robot: {
        title: "🤖 Univers Tech",
        gallery: [
            {
                src: "assets/images/tech/robot1.jpg",
                alt: "Projet robotique",
                title: "Mon premier robot"
            },
            {
                src: "assets/images/tech/iot.jpg",
                alt: "Projet IoT",
                title: "Objets connectés"
            }
        ],
        description: "Ma passion pour la robotique et l'intelligence artificielle.",
        tags: ["Arduino", "Raspberry Pi", "Python", "IoT", "IA"],
        links: [
            {
                text: "Voir mes projets tech",
                url: "#",
                icon: "🤖"
            }
        ]
    }
};