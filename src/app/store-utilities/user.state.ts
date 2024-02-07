import { Injectable } from '@angular/core';
import { Action, Select, State, StateContext } from '@ngxs/store';
import {
  clearData,
  editContact,
  setLogIn,
  setUserDetails,
  userDetails,
} from './user.action';

@State<any>({
  name: 'userDetails',
  defaults: {
    email: '',
    id: '',
    isLoggedIn: false,
    username: '',
    editableContactData: {},
  },
})
@Injectable()
export class loggedUserDetails {
  @Select()
  static isLoggedIn(state: userDetails) {
    return state.isLoggedIn;
  }

  @Select()
  static getUserDetails(state: userDetails) {
    return {
      email: state.email,
      id: state.id,
      username: state.username,
    };
  }

  @Action(setUserDetails)
  setUserDetails(
    { getState, setState }: StateContext<userDetails>,
    { payload }: any
  ) {
    let state = getState();
    setState({ ...state, ...payload });
  }

  @Action(setLogIn)
  setLogIn({ getState, setState }: StateContext<userDetails>) {
    let state = getState();
    setState({ ...state, isLoggedIn: true });
  }

  @Action(clearData)
  clearData({ getState, setState }: StateContext<userDetails>) {
    setState({
      email: '',
      id: '',
      isLoggedIn: false,
      username: '',
      editableContactData: {},
    });
  }

  @Action(editContact)
  setEditContactData(
    { getState, setState }: StateContext<userDetails>,
    { payload }: any
  ) {
    let state = getState();
    setState({
      ...state,
      editableContactData: payload,
    });
  }
}
