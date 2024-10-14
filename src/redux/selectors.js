//selectors from favTeachersSlice

export const selectFavTeachers = (state) => state.favTeachers.favorites;

//selectors from filterSlice

export const selectFilterLang = (state) => state.filter.language;

//selector from authSlice

export const selectUser = (state) => state.authUser.token;
