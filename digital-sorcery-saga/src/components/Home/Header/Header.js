import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="video-section">
                <video controls className="video-player">
                    <source src="path-to-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </header>
    );
}

export default Header;
