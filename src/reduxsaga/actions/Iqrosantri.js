import * as ActionType from "../constants/IqroSantri";

// GET
export const doGetIqroSantriRequest = (payload) => ({
  type: ActionType.GET_IQROSANTRI_REQUEST,
  payload,
});

export const doGetIqroSantriSucceed = (payload) => ({
  type: ActionType.GET_IQROSANTRI_SUCCEED,
  payload,
});

export const doGetIqroSantriFailed = (payload) => ({
  type: ActionType.GET_IQROSANTRI_FAILED,
  payload,
});

// GETLISTAWAL
export const doGetIqroAwalSantriRequest = () => ({
  type: ActionType.GET_IQROSANTRIAWAL_REQUEST,
});

export const doGetIqroAwalSantriSucceed = (payload) => ({
  type: ActionType.GET_IQROSANTRIAWAL_SUCCEED,
  payload,
});

export const doGetIqroAwalSantriFailed = (payload) => ({
  type: ActionType.GET_IQROSANTRIAWAL_FAILED,
  payload,
});

// GET BY ID
export const doGetIqroSantriByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_IQROSANTRI_REQUEST,
  payload,
});

export const doGetIqroSantriByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_IQROSANTRI_SUCCEED,
  payload,
});

export const doGetIqroSantriByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_IQROSANTRI_FAILED,
  payload,
});

// CREATE
export const doCreateIqroSantriRequest = (payload) => ({
  type: ActionType.CREATE_IQROSANTRI_REQUEST,
  payload,
});

export const doCreateIqroSantriSucceed = (payload) => ({
  type: ActionType.CREATE_IQROSANTRI_SUCCEED,
  payload,
});

export const doCreateIqroSantriFailed = (payload) => ({
  type: ActionType.CREATE_IQROSANTRI_FAILED,
  payload,
});

// DELETE

export const doDeleteIqroSantriRequest = (payload) => ({
  type: ActionType.DELETE_IQROSANTRI_REQUEST,
  payload,
});

export const doDeleteIqroSantriSucceed = (payload) => ({
  type: ActionType.DELETE_IQROSANTRI_SUCCEED,
  payload,
});

export const doDeleteIqroSantriFailed = (payload) => ({
  type: ActionType.DELETE_IQROSANTRI_FAILED,
  payload,
});

// Update
export const doUpdateIqroSantriRequest = (payload) => ({
  type: ActionType.UPDATE_IQROSANTRI_REQUEST,
  payload,
});

export const doUpdateIqroSantriSucceed = (payload) => ({
  type: ActionType.UPDATE_IQROSANTRI_SUCCEED,
  payload,
});

export const doUpdateIqroSantriFailed = (payload) => ({
  type: ActionType.UPDATE_IQROSANTRI_FAILED,
  payload,
});
