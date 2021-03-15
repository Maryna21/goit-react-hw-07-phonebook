import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;

export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.toLowerCase().includes(normalizedFilter));
    }
)
    //  console.log('filterOk', getFilter(state));
    
  

