import PlatformsHome from "../organims/PlatformsHome.tsx";
import MainLayout from "../templates/MainLayout.tsx";
import GroupRecentCourses from "../organims/GroupRecentCourses.tsx";

const Home = () => {


    return (
        <MainLayout>
            <PlatformsHome/>
            <GroupRecentCourses/>
        </MainLayout>
    )
}

export default Home;