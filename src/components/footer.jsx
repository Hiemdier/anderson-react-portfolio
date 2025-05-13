import '../app.css';


export default function Footer() {
    return (
    <footer>
        <div className="footer-container">
            <a href="https://github.com/Hiemdier" target="_blank" rel="noopener noreferrer">
                <img 
                style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                objectFit: 'cover'
                }} 
                src=".\github.png" alt="GitHub" className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/shanedanderson7/" target="_blank" rel="noopener noreferrer">
            <img 
            style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover'
            }} 
            src=".\linkedinicon.png" alt="LinkedIn" className="footer-icon" />
            </a>
        </div>
    </footer>
    );
}