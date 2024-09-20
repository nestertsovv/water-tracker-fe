export const selectRecords = (state) => state.water.records;

export const selectTotalConsumed = (state) => {
  return state.water.records.reduce((sum, record) => sum + record.quantity, 0);
};

export const selectOneRecord = (state) => state.water.selectedRecord;

export const selectisError = (state) => state.water.isError;

export const selectIsLoading = (state) => state.water.isLoading;
