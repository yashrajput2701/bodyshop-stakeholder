import { recommendedModal } from "../Modal";
import Utils from "../utils";

export const recommendedReducer = (
    state: recommendedModal = new recommendedModal,
    action: any
) => {
  switch (action.type) {
      case Utils.ActionName.GETRECOMMENDEDDATA:
          return { ...state, ...action.payload};
          default:
              return state;
  }
}
