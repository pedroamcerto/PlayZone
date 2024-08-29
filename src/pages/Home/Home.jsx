import TextBanner from "../../components/Banner/TextBanner";
import bannerImg from '../../assets/images/Hero image.png'
import './Home.css'
import Card from "../../components/Card/Card";
import youtubeImg from '../../assets/images/yt.png'

function Home() {
    return ( 
        <div className="home">  
            <section>
                <div className="banner">
                    <TextBanner className="banner-text" title="Crie seus vídeos online" description="Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade." buttonLabel="Começar agora!"></TextBanner>
                    <div className="img-container">
                        <img src={bannerImg} className="bannerImg" alt="Imagem do Banner: Uma imagem de um outra imagem de um homem com um moletom cinza pulando sendo clicada." />
                    </div>
                </div>
            </section>
            <section>
                <div className="cards-container">
                    <Card title="01" img={youtubeImg} subtitle="Youtube" description="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo." cardColor="#F1C2B0"></Card>
                    <Card title="01" img={youtubeImg} subtitle="Youtube" description="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo." cardColor="#F1C2B0"></Card>
                    <Card title="01" img={youtubeImg} subtitle="Youtube" description="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo." cardColor="#F1C2B0"></Card>
                    <Card title="01" img={youtubeImg} subtitle="Youtube" description="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo." cardColor="#F1C2B0"></Card>
                </div>
            </section>
        </div> 
    );

}

export default Home;




