const prompt = require("prompt-sync")();
const db = require("./database");

// ==========================================
// 1. início do programa com interação ao usuário
// ==========================================
console.log("====================================================");
console.log("       MOTOR DE TRIAGEM -> SKILLMATCH JS             ");
console.log("====================================================");
const nomeUsuario = prompt("Por favor, introduza o seu nome: ");
console.log(`\nBem-vindo ${nomeUsuario}, vamos iniciar a análise candidato/vagas...\n`);

// ==========================================
// 2. Simulando servidor assíncrono (RF14)
// ==========================================
function buscarDadosDoServidor() {
    return new Promise((resolve) => {
        console.log("🔄 Buscando dados das vagas e candidatos no servidor...");
        setTimeout(() => {
            resolve({
                vagas: db.vagas,
                candidato: db.candidato[0] // Captura o objeto do array do teu database.js
            });
        }, 1500);
    });
}

// ==========================================
// 3. Arquitetura de classes (RF09, RF10, RF11)
// ==========================================
class VagaTech {
    constructor(empresa, cargo, requisitosExigidos) {
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitosExigidos = requisitosExigidos;
    }
}

class VagaFrontEnd extends VagaTech {
    constructor(empresa, cargo, requisitosExigidos) {
        super(empresa, cargo, requisitosExigidos);
        this.habilidadesEspecificasFrontEnd = ["HTML5", "CSS3", "CCS3", "JavaScript", "React.js", "Angular", "Figma", "APIs", "UiUx", "FrontEnd"];
    }

    filtrarRequisitosTecnicos() {
        return this.requisitosExigidos.filter(requisito => 
            this.habilidadesEspecificasFrontEnd.some(hab => hab.toLowerCase() === requisito.toLowerCase())
        );
    }

    analisarPerfil(habilidadesCandidato) {
        const habilidadesValidadas = Array.isArray(habilidadesCandidato) ? habilidadesCandidato : [];
        const requisitosTecnicosVaga = this.filtrarRequisitosTecnicos();

        const habilidadesEmComum = requisitosTecnicosVaga.filter(requisito => 
            habilidadesValidadas.some(hab => hab.toLowerCase() === requisito.toLowerCase())
        );

        const habilidadesFaltantes = requisitosTecnicosVaga.filter(requisito => 
            !habilidadesValidadas.some(hab => hab.toLowerCase() === requisito.toLowerCase())
        );

        const totalRequisitos = requisitosTecnicosVaga.length;
        const totalComum = habilidadesEmComum.length;
        const percentual = totalRequisitos > 0 ? Math.round((totalComum / totalRequisitos) * 100) : 0;

        let classificacao = "Baixa compatibilidade";
        if (percentual >= 80) {
            classificacao = "Alta compatibilidade";
        } else if (percentual >= 50) {
            classificacao = "Média compatibilidade";
        }

        return {
            empresa: this.empresa,
            cargo: this.cargo,
            percentual: percentual,
            classificacao: classificacao,
            faltantes: habilidadesFaltantes
        };
    }
}

// ==========================================
// 4. Recomendação ao candidato (RF07)
// ==========================================
function gerarRecomendacao(habilidadesFaltantes) {
    if (habilidadesFaltantes.length === 0) {
        return "Perfil excelente! Pronto para o processo seletivo técnico.";
    }

    const faltantesMinusculo = habilidadesFaltantes.map(hab => hab.toLowerCase());
       if (faltantesMinusculo.includes("apis") && (faltantesMinusculo.includes("uiux") || faltantesMinusculo.includes("figma"))) {
        return "🚨 PRIORIDADE MÁXIMA: Estudar sobre consumo de APIs e aprofundar conceitos de UI/UX (Figma).";
    } else if (faltantesMinusculo.includes("apis")) {
        return "💡 RECOMENDAÇÃO: Focar em integração de sistemas e consumo de APIs.";
    } else if (faltantesMinusculo.includes("uiux")) {
        return "🎨 RECOMENDAÇÃO: Melhorar competências de design focando em UI/UX e fidelidade visual.";
    }
    
    return `📚 RECOMENDAÇÃO: Dedicar tempo para estudar as tecnologias: ${habilidadesFaltantes.join(", ")}.`;
}

// ==========================================
// 5. Callback (RF12)
// ==========================================
function imprimirRelatorioComCallback(listaResultados, callbackRecomendacao) {
    console.log("\n📊 RELATÓRIO DE TRIAGEM DO RH:");
    
    listaResultados.forEach(res => {
        console.log(`----------------------------------------------------`);
        console.log(`🏢 Empresa: ${res.empresa}`);
        console.log(`💼 Cargo: ${res.cargo}`);
        console.log(`📈 Percentual Técnico: ${res.percentual}%`);
        console.log(`🏷️  Status: [${res.classificacao}]`);
        console.log(`❌ Habilidades em falta: ${res.faltantes.join(", ") || "Nenhuma!"}`);
        
        // Chamada obrigatória da Callback passando as habilidades que faltam
        const recomendacao = callbackRecomendacao(res.faltantes);
        console.log(`📖 Recomendação: ${recomendacao}`);
    });
    console.log(`----------------------------------------------------`);
}

// ==========================================
// 6. Async/await
// ==========================================
async function executarMotor() {
    try {
        const dados = await buscarDadosDoServidor(); 
        const cand = dados.candidato;

        console.log(`\n📋 A analisar perfil do candidato: ${cand.nome}`);
        console.log(`🎯 Área de Interesse: ${cand.areaInteresse}`);

        const resultadosAnalise = [];

        dados.vagas.forEach(vagaOriginal => {
            const vagaInstanciada = new VagaFrontEnd(
                vagaOriginal.empresa,
                vagaOriginal.cargo,
                vagaOriginal.requisitosExigidos
            );

            const analiseVaga = vagaInstanciada.analisarPerfil(cand.habilidadesCandidato);
            resultadosAnalise.push(analiseVaga);
        });

        imprimirRelatorioComCallback(resultadosAnalise, gerarRecomendacao);

        const vagaIdeal = resultadosAnalise.reduce((maior, atual) => 
            atual.percentual > maior.percentual ? atual : maior
        );

        console.log(`\n🏆 VAGA COM MAIOR ADERÊNCIA: ${vagaIdeal.cargo} na ${vagaIdeal.empresa} (${vagaIdeal.percentual}% de compatibilidade)\n`);

    } catch (error) {
        console.error("Erro ao executar o motor de triagem:", error);
    }
}

// Inicializando a aplicação
executarMotor();