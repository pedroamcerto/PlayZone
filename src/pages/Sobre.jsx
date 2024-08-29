import TextBanner from "../../components/Banner/TextBanner";
import './Sobre.css'
import phoneImg1 from "../../assets/images/Viseo Merge screen 1.png"
import phoneImg2 from "../../assets/images/Saved 1.png"
import planosCardImg from "../../assets/images/undraw_Mobile_feed_re_72ta 1.png"
import PlanCard from "../../components/PlanCard/PlanCard";

const planos = [
    {
        "title": "Individual",
        "headerColor": "#6975E8",
        "buttonColor": "#6975E8",
        "buttonLabel": "Cadastrar",
        "buttonLabelColor": "#FFF",
        "buttonBorder": "1px solid #FFF",
        "options": [
            {
                "title": "1 Usuário",
                "label": "10 Vídeos",
                "currencyLabel": "R$",
                "price": "15"
            }
        ]
    },
    {
        "title": "Professional - Times",
        "headerColor": "#FFF",
        "buttonColor": "#FFF",
        "buttonLabel": "Cadastrar",
        "buttonLabelColor": "#333",
        "buttonBorder": "1px solid #000",
        "options": [
            {
                "title": "1-10 Usuários",
                "label": "Vídeos Ilimitados",
                "currencyLabel": "R$",
                "price": "40"
            },
            {
                "title": "+10 Usuários",
                "label": "Vídeos Ilimitados",
                "currencyLabel": "R$",
                "price": "20"
            },
        ]
    },
    {
        "title": "Individual",
        "headerColor": "#FFF",
        "buttonColor": "#FFF",
        "buttonLabel": "Entre Em Contato",
        "buttonLabelColor": "#333",
        "buttonBorder": "1px solid #000",
        "options": [
            {
                "img": planosCardImg
            }
        ]
    },
]


function Sobre() {
    return ( 
        <>
            <div className="sobre">
                <section className="banner-section">
                    <div className="banner">
                        <TextBanner className="banner-text" title="Bem-vindo à revolução dos vídeos!" description="Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores." buttonLabel="Baixe o app"></TextBanner>
                        <div className="img-container">
                            <img src={phoneImg1} className="bannerImg1" alt="Imagem do Banner 1: Um celular mostrando a tela de edição do aplicativo" />
                            <img src={phoneImg2} className="bannerImg2" alt="Imagem do Banner 2: Um celular mostrando a tela de sucesso da edição de vídeo do aplicativo." />
                        </div>
                    </div>
                </section>
                <section className="planos-section">
                    <h2 className="subtitle">Planos</h2>
                    <PlanCard data={planos}></PlanCard>

                </section>
            </div>
        </> 
    );
}

export default Sobre;