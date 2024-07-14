import { useTranslation } from 'react-i18next';
import HeroBanner from "../components/HeroBanner";


function Home(){
    const { t } = useTranslation();
    return (
        <div>
            <HeroBanner/>
            <h2>{t('Home')}</h2>
            <p>{t('Welcome')}</p>
            <img
            src={require("../assets/images/tony-frost-wAujJ8jc134-unsplash.jpg")}
            alt="Banner 4"
            width="1000px"
            />
        </div>
    )
}

export default Home;