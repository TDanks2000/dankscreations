import { FunctionComponent } from 'react';
import { CategoriesComponent, HeroComponent, InformationComponent } from '../../components';

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <>
      <HeroComponent />
      <InformationComponent />
      <CategoriesComponent />
    </>
  );
};

export default HomePage;
