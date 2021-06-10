const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name,
});

const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY_BY',
    payload: catIndex,
});