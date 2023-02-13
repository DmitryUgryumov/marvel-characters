// Components
import SearchInput from './SearchInput/SearchInput';
import CharactersList from './CharactersList/CharactersList';
import PageContainer from '../../components/PageContainer/PageContainer';

const Home = () => {
  return (
    <PageContainer>
      <SearchInput />
      <CharactersList />
    </PageContainer>
  );
};

export default Home;
