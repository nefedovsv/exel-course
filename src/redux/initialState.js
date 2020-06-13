import {storage} from '@core/utils';
import {defaultStyles, defaultTitle} from '@/constants';


const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  styleState: {},
  currentText: '',
  currentStyles: defaultStyles
}

const normolize = state => ({
  ...state,
  currentAncestry: defaultStyles,
  currentText: ''
})

export const initialState = storage('excel-state') ?
  normolize(storage('excel-state')):
  defaultState
