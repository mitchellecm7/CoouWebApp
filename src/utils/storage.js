import { get, set, del, keys } from 'idb-keyval';

export const storage = {
  // Save a value under a key
  setItem: async (key, value) => {
    try {
      await set(key, value);
    } catch (error) {
      console.error('Failed to save data', error);
    }
  },

  // Retrieve a value by key
  getItem: async (key) => {
    try {
      return await get(key);
    } catch (error) {
      console.error('Failed to load data', error);
      return null;
    }
  },

  // Remove a single key
  removeItem: async (key) => {
    try {
      await del(key);
    } catch (error) {
      console.error('Failed to remove data', error);
    }
  },

  // Get all keys in storage
  getAllKeys: async () => {
    try {
      return await keys();
    } catch (error) {
      console.error('Failed to get keys', error);
      return [];
    }
  },

  // Clear all data from storage
  clear: async () => {
    try {
      const allKeys = await keys();
      await Promise.all(allKeys.map(key => del(key)));
    } catch (error) {
      console.error('Failed to clear storage', error);
    }
  }
};
