import { Fragment, Suspense } from "react";
import HomeComponent from "../components/HomeComponent";
import MasterLayout from "../layout/MasterLayout";
import AppHeader from "../components/AppHeader";

const Home = () => {
  return (
    <Fragment>
      <Suspense fallback={""}>
        <MasterLayout>
          <AppHeader title="Home" />
          <HomeComponent />
        </MasterLayout>
      </Suspense>
    </Fragment>
  );
};

export default Home;
