import { ADD_SELECTED_PRODUCT_ITEM,RE, REMOVE_SELECTED_PRODUCT_ITEM, USER_DETAILS } from "../actions/ActionType";

const initialState = {
  SelectedProductItem: [],
  User_Details: ""
};

const dataReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_SELECTED_PRODUCT_ITEM:
         console.log(`Reducer:${JSON.stringify(actions.payload)}`);

      return {
        ...state,
        SelectedProductItem: state.SelectedProductItem.concat({
          key:Math.random(),
          name:actions.data
        }),
      };

   case REMOVE_SELECTED_PRODUCT_ITEM:
        return {
          ...state,
          SelectedProductItem: state.SelectedProductItem.filter((item) =>
            item.key !== action.key)
        };

    case USER_DETAILS:
      console.log(`Reducer:${actions.address1Payload}`);
         

      return {
        ...state,
        address1:actions.address1Payload,
        address2:actions.address2Payload,
        country:actions.countryPayload,
        state:actions.statePayload,
        city: actions.cityPayload
      };
    default:
      return state;
  }
};

export default dataReducer;
