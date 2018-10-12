import { spy } from 'sinon';
import * as actions from '../../app/actions/genericTable';

describe('actions', () => {
  it('should create a toggleRow action with given payload', () => {
    const rowName = 'TEST';
    expect(actions.toggleRow(rowName)).toEqual({type: actions.TOGGLE_ROW, payload: rowName });
  });

  it('should create a toggleRow action with a null payload when no input', () => {
    expect(actions.toggleRow()).toEqual({type: actions.TOGGLE_ROW, payload: null });
  });

  it('should create a toggleRow action with a null payload when input is not a string', () => {
    const rowName = 123;
    expect(actions.toggleRow(rowName)).toEqual({type: actions.TOGGLE_ROW, payload: null });
  });

  it('should create a selectObject action with a given payload when input', () => {
    const obj = 'xyz';
    expect(actions.selectObj(obj)).toEqual({type: actions.SELECT_OBJ, payload: obj });
  });

  it('should create a selectObject action with a null payload when input is not a string', () => {
    const obj = 123;
    expect(actions.selectObj(obj)).toEqual({type: actions.SELECT_OBJ, payload: null });
  });

  it('should create a selectObject action with a null payload when no input', () => {
    expect(actions.selectObj()).toEqual({type: actions.SELECT_OBJ, payload: null });
  });

  it('should create a toggleExpandAll action with a null payload', () => {
    expect(actions.toggleExpandAll()).toEqual({type: actions.TOGGLE_EXPAND_ALL, payload: null });
  });


});
