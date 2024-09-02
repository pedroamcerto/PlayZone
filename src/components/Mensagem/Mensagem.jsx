import './Mensagem.css'

function Mensagem() {
    return ( 
        <div className="caixaMensagem">
            <div className="nome">
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome"/>
            </div>
            <div className="email">
                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email" />
            </div>
            <div className="mensagem">
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea name="mensagem" id="mensagem"></textarea>
            </div>
            <div className="botaoEnv">
                <p>Enviar</p>
            </div>
        </div>       
     );
}

export default Mensagem;