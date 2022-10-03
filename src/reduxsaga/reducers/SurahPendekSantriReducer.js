import * as ActionType from "../constants/SurahPendekSantri";

const INIT_STATE = {
  surahpendeksantridata: [],
  isLoading: false,
  isRefresh: false,
};

const SurahPendekSantriReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GETALL
    case ActionType.GET_SURAHPENDEKSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_SURAHPENDEKSANTRI_SUCCEED:
      return applyGetSurahPendekSantriSucceed(state, action);
    // GETLISTAWAL
    case ActionType.GET_SURAHPENDEKSANTRIAWAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_SURAHPENDEKSANTRIAWAL_SUCCEED:
      return applyGetSurahPendekAwalSantriSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_SURAHPENDEKSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_SURAHPENDEKSANTRI_SUCCEED:
      return applyGetByIdSurahPendekSantriSucceed(state, action);
    // CREATE
    case ActionType.CREATE_SURAHPENDEKSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_SURAHPENDEKSANTRI_SUCCEED:
      return applyCreateSurahPendekSantriSucceed(state, action);
    // Update
    case ActionType.UPDATE_SURAHPENDEKSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_SURAHPENDEKSANTRI_SUCCEED:
      return applyUpdateSurahPendekSantriSucceed(state, action);
    // DELETE
    case ActionType.DELETE_SURAHPENDEKSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_SURAHPENDEKSANTRI_SUCCEED:
      return applyDeleteSurahPendekSantriSucceed(state, action);
    default:
      return state;
  }
};

const applyCreateSurahPendekSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendeksantridata: [...payload.data],
  };
};

const applyGetSurahPendekSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendeksantridata: payload.data,
  };
};

const applyGetSurahPendekAwalSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendeksantridata: payload.data,
  };
};

const applyGetByIdSurahPendekSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendeksantridata: [payload.data],
  };
};

const applyUpdateSurahPendekSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendeksantridata: [...payload.data],
  };
};

const applyDeleteSurahPendekSantriSucceed = (state, action) => {
  const { payload } = action;
  const surahpendek = state.surahpendeksantridata.filter(
    (el) => el.id !== payload
  );
  console.log(surahpendek);
  return {
    ...state,
    surahpendeksantridata: [...surahpendek],
    isLoading: false,
    isRefresh: false,
  };
};

export default SurahPendekSantriReducer;
