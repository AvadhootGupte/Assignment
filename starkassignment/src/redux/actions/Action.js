import { ADD_SELECTED_PRODUCT_ITEM,REMOVE_SELECTED_PRODUCT_ITEM, USER_DETAILS } from "./ActionType";

export const addSelectedProduct = productItem => ({
  type: ADD_SELECTED_PRODUCT_ITEM,
  data: productItem,
});

export const deleteProduct = (key)=>(
  {
  type : REMOVE_SELECTED_PRODUCT_ITEM,
  key:key,
  }
);


export const addUserDetails = (UserDetail) => ({
  type: USER_DETAILS,
  address1Payload: UserDetail.address1,
  address2Payload: UserDetail.address2,
  countryPayload: UserDetail.country,
  statePayload: UserDetail.state,
  cityPayload: UserDetail.city,
});
