import TextBannerContato from "../../components/Banner/TextBannerContato";
import Mensagem from "../../components/Mensagem/Mensagem";
import './Contato.css'

function Contato() {
    return ( 
        
        <div className="contato">
            <div className="infos">
                <TextBannerContato className="banner-text" title="Dúvidas e suporte, entre em contato:"></TextBannerContato>    
            </div>
            <div className="envioMensagem">
                <Mensagem></Mensagem>
            </div>
        </div>
        
     );
}

export default Contato;