const SkillItem = ({ icon, text }) => {
    return (
        <div className='skill-mini-container text-center'>
            <div className='skill-icon'>
                <img src={icon} />
            </div>
            <div className='skill-item-name'>
                <span>{text}</span>
            </div>
        </div>
    );
}

export default SkillItem;