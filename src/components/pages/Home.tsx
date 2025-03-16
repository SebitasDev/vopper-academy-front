import PlatformsHome from "../organims/PlatformsHome.tsx";
import MainLayout from "../templates/MainLayout.tsx";
import GroupRecentCourses from "../organims/GroupRecentCourses.tsx";
import InterestingCategories from "../organims/InterestingCategories.tsx";

const Home = () => {


    return (
        <MainLayout>
            <PlatformsHome/>
            <GroupRecentCourses/>
            <InterestingCategories/>
        </MainLayout>
    )
}

export default Home;