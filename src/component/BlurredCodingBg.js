import codeImage from '../asset/image/colorful-line-pattern.svg';
import '../css/Home.css';

const BlurredCodingBg = ({ className }) => {
    return (
        <div className={className}>
            <img src={codeImage} />
        </div>
    );
}

export default BlurredCodingBg;