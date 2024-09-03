import './TextBanner.css'
import Contatos from '../Contatos/Contatos.jsx';
import './TextBannerContato.css'

function TextBannerContato(props) {
    return ( 
        <div className="text-banner-container2">
            <h1>{props.title}</h1>

            <Contatos></Contatos>
            
       </div>
       
    );
}

export default TextBannerContato;