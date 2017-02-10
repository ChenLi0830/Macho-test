import {navActions as actions} from '../src/modules'
import reducer from '../src/modules/nav'

test('reducer', () => {
  expect(reducer(undefined, {})).toEqual({
    showDropDown: false,
    tab: 0
  });
  
  expect(reducer({
    showDropDown: false,
    tab: 0
  }, actions.navToggleMenu())).toEqual({
    showDropDown: true,
    tab: 0
  });
  
  expect(reducer({
    showDropDown: true,
    tab: 1
  }, actions.navToggleMenu())).toEqual({
    showDropDown: false,
    tab: 1
  });

  expect(reducer({
    showDropDown: true,
    tab: 1
  }, actions.navChangeTab(2))).toEqual({
    showDropDown: false,
    tab: 2
  });

  expect(reducer({
    showDropDown: false,
    tab: 1
  }, actions.navChangeTab(2))).toEqual({
    showDropDown: false,
    tab: 2
  });
  
});
