import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Sponsores from '../../components/Sponsores/Sponsores';
import Popular from '../../components/Popular/Popular';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Sponsores />
            <Popular />
        </>
    );
};

export default Home;