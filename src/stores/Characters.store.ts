// Core
import { makeAutoObservable, runInAction } from 'mobx';

// Interfaces
import Character from '../interfaces/character.interface';

// API
import getCharacters from '../api/getCharacters.api';

class Characters {
  characters: Character[];

  nameFilter: string;

  isLoading: boolean;

  isError: boolean;

  constructor() {
    this.characters = [];
    this.nameFilter = '';
    this.isLoading = true;
    this.isError = false;
    makeAutoObservable(this);
  }

  getCharacters = async () => {
    try {
      this.isLoading = true;
      const characters = await getCharacters(this.nameFilter);
      runInAction(() => {
        this.characters = characters;
        this.isError = false;
      });
    } catch (error) {
      runInAction(() => (this.isError = true));
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  changeNameFilter = (name: string) => {
    this.nameFilter = name;
    this.getCharacters();
  };
}

const charactersStore = new Characters();

export default charactersStore;
