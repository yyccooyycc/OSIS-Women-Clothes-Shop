import { useTranslation } from 'react-i18next';
import HeroBanner from "../components/HeroBanner";


function Home(){
    const { t } = useTranslation();
    return (
        <div>
            <HeroBanner/>
            <h2>{t('Home')}</h2>
            <p>{t('Welcome')}</p>
        </div>
    )
}

export default Home;