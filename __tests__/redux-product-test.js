import {productActions as actions} from '../src/modules';
import reducer from '../src/modules/product';

test('reducer', () => {
  expect(reducer(undefined, {})).toEqual({
    downloadClicked: false,
  });
  
  expect(reducer({
        downloadClicked: false,
      },
      actions.downloadClicked())).toEqual({
    downloadClicked: true,
  });
  
  expect(reducer({
        downloadClicked: true,
      },
      actions.downloadClicked())).toEqual({
    downloadClicked: true,
  });
});

