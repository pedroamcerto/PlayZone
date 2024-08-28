import CommonButton from "../CommonButton/CommonButton";

function TextBanner(props) {
    return ( 
        <>
            <div className="banner">
                <h1>{props.title}</h1>

                <p>{props.description}</p>

                <CommonButton label={props.buttonLabel}></CommonButton>
            </div>
        </> 
    );
}

export default TextBanner;