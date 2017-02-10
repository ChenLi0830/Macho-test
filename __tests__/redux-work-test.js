import {workActions as actions} from '../src/modules';
import reducer from '../src/modules/work';

test('reducer', () => {
  expect(reducer(undefined, {})).toEqual({
    hovered: -1,
  });
  
  expect(reducer({
        hovered: -1,
      },
      actions.imageHovered(3))).toEqual({
    hovered: 3
  });
  
  expect(reducer({
        hovered: 5,
      },
      actions.imageHovered(0))).toEqual({
    hovered: 0
  });
  
  expect(reducer({
        hovered: 5,
      },
      actions.imageUnhovered())).toEqual({
    hovered: -1
  });
  
  expect(reducer({
        hovered: -1,
      },
      actions.imageUnhovered())).toEqual({
    hovered: -1
  });
});

