import popTrade from "../image/pop-trade-marketing.png";
import tecnoset from "../image/tecnoset.png";
import globalHitss from "../image/global-hitss.png";

export interface Experience {
   id:number;
   company:string;
   job:string;
   time:string;
   description:string;
   Skills:string;
   companyImage:string;
}

export const ExperiencesData: Experience[] = [

    {
        id:1,
        company:"Pop Trade Marketing",
        job:"Analista de logística",
        time:"set de 2021 - mai de 2022",
        description:"Fazia a gestão de todos os ativos da empresa, logística de EPI’s e aparelhos corporativos , frota Para tal utilizava de ferramentas de dados como excel Dashboards, Power BI, Power query e MYSQL. Auxiliava na gestão de um grupo de 7 colaboradores, onde administrava o fluxo de tarefa diária para cada um e o atingir das metas em tempo hábil.",
        Skills:"Gestão de equipes · Microsoft Power BI · Gestão logística · Análise de dados · Microsoft Excel",
        companyImage:"pop-trade-marketing.png"
    },

    {
        id:2,
        company:"Grupo Tecnoset",
        job:"Assistente de logística",
        time:"dez de 2019 - set de 2021",
        description:"Entrada e saída de notas fiscais, controle de estoque no sistema Protheus e Excel, auxilio ao gestor na gestão de uma equipe de 14 funcionários, realizando o cronograma de produção, de embalagem e expedição, follow up com transportadoras e clientes e também todo o processo de logística reversa.",
        Skills:"Trabalho em equipe · Gestão de equipes · Melhoria de processos · Gestão logística · Microsoft Excel · ERP (Planejamento de recursos empresariais) · TOTVS Protheus",
        companyImage:"tecnoset.png"
    },

    {
        id:3,
        company:"Global Hitss",
        job:"Analista de gestão de ativos",
        time:"jun de 2016 - jun de 2018",
        description:"Atuava no controle de estoque, auxiliava na parte de compras fazendo também o controle de pedidos inventário, conferência de produtos, entrada e saída de mercadorias, envio de mercadorias e rastreamento através dos correios e transportadoras, logística reversa dos equipamentos com defeitos e obsoletos. Prestando serviço a empresa Bayer.",
        Skills:"Melhoria de processos · Controle de estoque· Gestão logística · Análise de dados · Microsoft Excel",
        companyImage:"globalhitss.jpg"
    }
]