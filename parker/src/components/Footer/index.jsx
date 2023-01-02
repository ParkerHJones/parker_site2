import "./style.css";
const Footer  = () => {
    return (
        <footer>
            <a
            href="https://github.com/ParkerHJones"
            target="_blank"
            >
            <img
             src={`${process.env.PUBLIC_URL}/Github.png`}
             alt="LinkIn-icon"
             />
            </a>
            <a
            href="https://www.tiktok.com/@parksibebe?lang=en"
            target="_blank"
            >
            <img
            src={`${process.env.PUBLIC_URL}/tiktok2.jpeg`}
            alt="LinkIn-icon"
            />
            <a
            href="https://www.youtube.com/channel/UCpfi1jp0GX4l_Abf0NkzZrw"
            target="_blank"
            >
            <img
             src={`${process.env.PUBLIC_URL}/youtubelogo.png`}
             alt="LinkIn-icon"
             />
            </a>
            </a>
        </footer>
    );
}

export default Footer;