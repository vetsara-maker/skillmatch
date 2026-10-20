const prompt = require("prompt-sync")();
// Simulação de banco de dados
export const habilidades = ["JavaScript", "HTML5", "CSS3", "React.js", "Angular",
    "DesignResponsivo", "Figma", "Git", "APIsREST", "TDD", "UiUx"
];

export const vagas = [ 
    {empresa:"AdviceHealth", cargo:"DesenvolvedorFrontEndJr", requisitosExigidos:["HTML5",
        "JavaScript", "React.js", "APIs", "Figma", "uiUx", "FrontEnd", "TDD", "SQL", "Git", 
        "Organização"],
    },
    {empresa: "AnotaAi", cargo: "AnalistaJuniorFrontEnd", requisitosExigidos: ["HTML5", "CCS3", 
        "JavaScript", "Angular", "UiUx", "Comunicacao", "AprendizagemRapida"]
    },
    {empresa: "CaktoPay", cargo: "DesenvolvedorFrontendJrReact", requisitosExigidos: ["React.js", 
        "HTML5", "CSS3", "JavaScript", "APIs", "Figma", "UiUx", "Git", "FrontEnd"]
    }
];

/* Perfil fake, pois ainda não possuo habilidades técnicas o suficientes para candidatar-me.
O perfil fake está em transição de carreira e atua como Freelance desde Nov/2025. */
const candidato = {
    nome: "Daniel Souza e Silva",
    areaInteresse: "Front-End",
    habilidades: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", 
        "Tailwind CSS", "Git", "GitHub", "Figma"],
    experiencia: "1 ano" 
};


