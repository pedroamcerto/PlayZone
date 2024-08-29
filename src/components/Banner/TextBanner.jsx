import CommonButton from "../CommonButton/CommonButton";
import './TextBanner.css'

function TextBanner(props) {
    return ( 
        <div className="text-banner-container">
            <h1>{props.title}</h1>

            <p className="description">{props.description}</p>

            <CommonButton label={props.buttonLabel}></CommonButton>
        </div>
    );
}

export default TextBanner;