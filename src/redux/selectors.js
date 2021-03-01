export const getIsLoading = state => state.contacts.loading;

export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getSorter = state => state.contacts.sorter;

export const getSortContacts = state => {
    const visibleContacts = getVisibleContacts(state);
    const sortBy = getSorter(state);

    if (sortBy === 'abc') {
        return visibleContacts.sort((a, b) => {
            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();
            if (aName < bName) {
                return -1;
            }
            if (aName > bName) {
                return 1;
            }

            return 0;
        });
    }

    if (sortBy === 'date') {
        return visibleContacts.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            }
            if (a.date > b.date) {
                return -1;
            }

            return 0;
        });
    }
};

const getVisibleContacts = state => {
    const allContacts = getAllContacts(state);
    const filter = getFilter(state);

    return allContacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase()),
    );
};