// Core
import { makeAutoObservable, runInAction } from 'mobx';

// Interfaces
import Character from '../interfaces/character.interface';

// API
import getCharacters from '../api/getCharacters.api';

class Characters {
  characters: Character[];

  totalCharacters: number;

  nameFilter: string;

  limitFilter: number;

  offsetFilter: number;

  isMainLoading: boolean;

  isSecondaryLoading: boolean;

  isError: boolean;

  constructor() {
    this.characters = [];
    this.totalCharacters = 0;
    this.nameFilter = '';
    this.limitFilter = 20;
    this.offsetFilter = 0;
    this.isMainLoading = false;
    this.isSecondaryLoading = false;
    this.isError = false;
    makeAutoObservable(this);
  }

  getCharacters = async (isRefreshCharacters = true) => {
    try {
      if (isRefreshCharacters) {
        this.isMainLoading = true;
      } else {
        this.isSecondaryLoading = true;
      }

      const characters = await getCharacters(this.nameFilter, this.limitFilter, this.offsetFilter);
      runInAction(() => {
        if (isRefreshCharacters) {
          this.characters = characters.data.results;
        } else {
          this.characters.push(...characters.data.results);
        }
        this.totalCharacters = characters.data.total;
        this.isError = false;
      });
    } catch (error) {
      runInAction(() => (this.isError = true));
    } finally {
      runInAction(() => {
        if (isRefreshCharacters) {
          this.isMainLoading = false;
        } else {
          this.isSecondaryLoading = false;
        }
      });
    }
  };

  changeNameFilter = (name: string) => {
    this.nameFilter = name;
    this.offsetFilter = 0;
    this.getCharacters();
  };

  changeOffsetFilter = () => {
    if (this.totalCharacters > this.limitFilter + this.offsetFilter) {
      this.offsetFilter += this.limitFilter;
      this.getCharacters(false);
    }
  };
}

const charactersStore = new Characters();

export default charactersStore;
