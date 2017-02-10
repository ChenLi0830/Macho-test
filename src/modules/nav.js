// action
const NAV_TOGGLE = "NAV_TOGGLE";// Toggle nav bar icon(only for small screens)
const NAV_CHANGE_TAB = "NAV_CHANGE_TAB";

// Action creators
export const navToggleMenu = () => {
  return {
    type: NAV_TOGGLE,
  }
};

export const navChangeTab = (tab) => {
  return {
    type: NAV_CHANGE_TAB,
    payload: tab,
  }
};

// reducer
const initialState = {
  showDropDown: false,
  tab: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "NAV_TOGGLE": return {...state, showDropDown: !state.showDropDown};
    case "NAV_CHANGE_TAB":
      if (action.payload==="4") alert("Message from redux reducer: Contact is clicked.");
      return {...state, showDropDown: false, tab: action.payload};
    default: return state;
  }
};

export default reducer;