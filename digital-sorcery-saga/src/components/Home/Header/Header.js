import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="video-section">
                <video controls className="video-player">
                    <source src="./Neoni x burnboy - Champion (Official Lyric Video)(M4A_128K).m4a" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </header>
    );
}

export default Header;
