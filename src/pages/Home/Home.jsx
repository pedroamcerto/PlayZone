import TextBanner from "../../components/Banner/TextBanner";
import bannerImg from '../../assets/images/Hero image.png'
import './Home.css'

function Home() {
    return ( 
        <>  
            <div className="banner">
                <TextBanner className="banner-text" title="Crie seus vídeos online" description="Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade." buttonLabel="Começar agora!"></TextBanner>
                <div className="img-container">
                    <img src={bannerImg} className="bannerImg" alt="Imagem do Banner: Uma imagem de um outra imagem de um homem com um moletom cinza pulando sendo clicada." />
                </div>
            </div>
        </> 
    );

}

export default Home;




