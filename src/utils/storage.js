import localforage from 'localforage';

// Configure localForage
localforage.config({
  name: 'COOU_App',
  storeName: 'courses_storage'
});

export const storage = {
  setItem: async (key, value) => {
    try {
      await localforage.setItem(key, value);
    } catch (error) {
      console.error('Failed to save data', error);
    }
  },
  
  getItem: async (key) => {
    try {
      return await localforage.getItem(key);
    } catch (error) {
      console.error('Failed to load data', error);
      return null;
    }
  },
  
  removeItem: async (key) => {
    try {
      await localforage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove data', error);
    }
  }
};