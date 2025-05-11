import Button from "../Button/Button";
import Frame from "../Frame/Frame";

function ShortBio() {
    return (
        <div className="ShortBio">
            <Frame>
                <div>
                    <h1>ShortBio</h1>
                    <Button text="Get To Know Me" link="/about" />
                </div>
            </Frame>
        </div>
    );
}

export default ShortBio;