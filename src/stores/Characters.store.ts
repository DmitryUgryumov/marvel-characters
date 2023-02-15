// Core
import { makeAutoObservable, runInAction } from 'mobx';

// Interfaces
import Character from '../interfaces/character.interface';

// Enums
import Order from '../enums/order.enum';

// API
import getCharacters from '../api/getCharacters.api';

class Characters {
  characters: Character[];

  totalCharacters: number;

  nameFilter: string;

  limitFilter: number;

  offsetFilter: number;

  orderBySorting: Order;

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
    this.orderBySorting = Order.Name;
    this.isSecondaryLoading = false;
    this.isError = false;
    makeAutoObservable(this);
  }

  showLoader = (isRefreshCharacters: boolean, isShow: boolean) => {
    if (isRefreshCharacters) {
      this.isMainLoading = isShow;
    } else {
      this.isSecondaryLoading = isShow;
    }
  };

  getCharacters = async (isRefreshCharacters = true) => {
    try {
      this.showLoader(isRefreshCharacters, true);
      const characters = await getCharacters(this.nameFilter, this.limitFilter, this.offsetFilter, this.orderBySorting);

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
      this.showLoader(isRefreshCharacters, false);
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

  changeOrderSorting = (order: Order) => {
    this.orderBySorting = order;
    this.offsetFilter = 0;
    this.getCharacters();
  };
}

const charactersStore = new Characters();

export default charactersStore;
