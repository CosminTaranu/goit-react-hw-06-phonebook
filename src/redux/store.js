import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { configureStore } from '@reduxjs/toolkit';
import  { contactsReducer } from './slices/contactsSlice';
import { filterReducer } from './slices/filterSlice';

const persisConfig = {
    key: 'root',
    storage
}
const persistContactsReducer = persistReducer(persisConfig, contactsReducer)

const store = configureStore ({
    reducer: {
        contacts: persistContactsReducer,
        filter: filterReducer,
    }
})

const persistor = persistStore(store);
export {store, persistor};