import codeImage from '../asset/image/programmer.png';

const BlurredCodingBg = () => {
    const bgImageUrl = '../asset/image/programmer.png';

    return (
        <div className="blurred-code">
            <img src={codeImage} style={{
                height: '300px',
                width: '300px'
            }}/>
        </div>
    );
}
 
export default BlurredCodingBg;