// Simulação de banco de dados
const habilidades = ["JavaScript", "HTML5", "CSS3", "React.js", "Angular",
    "DesignResponsivo", "Figma", "Git", "APIs", "TDD", "UiUx"
];

const vagas = [ 
    {empresa:"AdviceHealth", 
     cargo:"DesenvolvedorFrontEndJr", 
     requisitosExigidos:["HTML5", "JavaScript", "React.js", "APIs", "Figma", "UiUx", "FrontEnd", 
        "TDD", "SQL", "Git", "Organizacao"],
    },
    {empresa: "AnotaAi", 
     cargo: "AnalistaJuniorFrontEnd", 
     requisitosExigidos: ["HTML5", "CCS3", "JavaScript", "Angular", "UiUx", "Comunicacao", 
        "AprendizagemRapida"]
    },
    {empresa: "CaktoPay", 
     cargo: "DesenvolvedorFrontendJrReact", 
     requisitosExigidos: ["React.js", "HTML5", "CCS3", "JavaScript", "APIs", "Figma", "UiUx", 
        "Git", "FrontEnd"]
    }
];

/* Perfil fake, pois ainda não possuo habilidades técnicas em nível de excelência (que meu perfil exige)
para candidatar-me. O perfil fake está em transição de carreira e atua como Freelance desde Nov/2025. */
const candidato = [{
    nome: "DanielSouzaESilva",
    areaInteresse: "FrontEnd",
    habilidadesCandidato: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", 
        "CCS3", "Git", "GitHub", "Figma"],
    experiencia: "1 ano" 
    }
];

module.exports = { habilidades, vagas, candidato };

