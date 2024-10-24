import { useTranslation } from 'react-i18next';
import HeroBanner from "../components/HeroBanner";


function Home(){
    const { t } = useTranslation();
    return (
        <div>
            <HeroBanner/>
            <p></p>
            <img
            src={require("../assets/images/tony-frost-wAujJ8jc134-unsplash.jpg")}
            alt="Banner 4"
            width="1000px"
            style={{ margin: '0 auto', display: 'block' }}
            />
            <p></p>

        </div>
    )
}

export default Home;