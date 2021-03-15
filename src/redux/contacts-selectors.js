import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;

export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
    }
)

// export const getContactsLength = state => {
//     const allContacts = getAllContacts(state);
//     return allContacts.length;
// }
    //  console.log('filterOk', getFilter(state));
    
  

