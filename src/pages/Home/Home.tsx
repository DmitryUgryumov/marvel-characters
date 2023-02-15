// Components
import SearchInput from './SearchInput/SearchInput';
import CharactersList from './CharactersList/CharactersList';
import PageContainer from '../../components/PageContainer/PageContainer';
import Sorting from './Sorting/Sorting';

const Home = () => {
  return (
    <PageContainer>
      <SearchInput />
      <Sorting />
      <CharactersList />
    </PageContainer>
  );
};

export default Home;
