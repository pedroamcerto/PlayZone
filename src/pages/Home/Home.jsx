import TextBanner from "../../components/Banner/TextBanner";
import bannerImg from '../../assets/images/Hero image.png'
import './Home.css'
import Card from "../../components/Card/Card";
import youtubeImg from '../../assets/images/yt.png'
import tiktokImg from "../../assets/images/Ellipse 26.png"
import facebookImg from "../../assets/images/Ellipse 26 (2).png"
import instagramImg from "../../assets/images/Ellipse 27 (1).png"

function Home() {
    return ( 
        <div className="home">  
            <section>
                <div className="banner">
                    <TextBanner className="banner-text" title="Crie seus vídeos online" description="Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade." buttonLabel="Começar agora!"></TextBanner>
                    <div className="img-container">
                        <img src={bannerImg} className="bannerImg" alt="Imagem do Banner: Uma imagem de uma outra imagem de um homem com um moletom cinza pulando sendo clicada." />
                    </div>
                </div>
            </section>
            <section>
                <div className="cards-container">
                    <Card title="01" img={youtubeImg} subtitle="Youtube" description="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo." cardColor="#F1C2B0"></Card>
                    <Card title="02" img={tiktokImg} subtitle="Tiktok" description="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok." cardColor="#F9EB98"></Card>
                    <Card title="03" img={facebookImg} subtitle="Facebook" description="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook." cardColor="#C0D9DD"></Card>
                    <Card title="04" img={instagramImg} subtitle="Instagram" description="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels." cardColor="#6975E8"></Card>
                </div>
            </section>
        </div> 
    );

}

export default Home;




