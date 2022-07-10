import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { PersonActions, PersonSetAllActionNgxs } from "./person-ngxs.action";


interface PersonState {
    liscenceNumber: string;
    firstName: string;
    lastName: string;
    phone: string;
    yearOld: string;
    address: string;
  }

const initialPersonState: PersonState = {
    liscenceNumber: '',
    firstName: '',
    lastName: '',
    phone: '',
    yearOld: '',
    address: '',
  }

@State<PersonState>({
    name: 'person',
    defaults: initialPersonState
})

@Injectable()
export class PersonNgxsState{

    @Selector()
    static data(state: PersonState): PersonState {
        return state;
    }

    // @Action(PersonSetAllActionNgxs)
    // personSetAll(ctx: StateContext<PersonState>, action: PersonActions) {
    //     ctx.setState({
    //         firstName: action.payload.firstName
    //     })
    // }
}