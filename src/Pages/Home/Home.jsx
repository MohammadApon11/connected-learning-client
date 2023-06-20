import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Banner from "../../components/Banner";
import Explore from "../../components/Explore";
import Courses from "../../components/Courses";
import Categories from "../../components/Categories";

const Home = () => {
    return (
        <div>
            <div className="bg-slate-100">
                <Navbar />
                <Banner />
            </div>
            <Explore />
            <Courses />
            <Categories />

            {/* <Footer /> */}
        </div>
    );
};

export default Home;