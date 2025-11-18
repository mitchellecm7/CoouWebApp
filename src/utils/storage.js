// import { get, set, del, keys } from 'idb-keyval';

// export const storage = {
//   setItem: async (key, value) => {
//     try {
//       await set(key, value);
//     } catch (error) {
//       console.error('Failed to save data', error);
//     }
//   },
  
//   getItem: async (key) => {
//     try {
//       return await get(key);
//     } catch (error) {
//       console.error('Failed to load data', error);
//       return null;
//     }
//   },
  
//   removeItem: async (key) => {
//     try {
//       await del(key);
//     } catch (error) {
//       console.error('Failed to remove data', error);
//     }
//   },
  
//   // Additional useful methods
//   getAllKeys: async () => {
//     try {
//       return await keys();
//     } catch (error) {
//       console.error('Failed to get keys', error);
//       return [];
//     }
//   },
  
//   clear: async () => {
//     try {
//       const allKeys = await keys();
//       await Promise.all(allKeys.map(key => del(key)));
//     } catch (error) {
//       console.error('Failed to clear storage', error);
//     }
//   }
// };