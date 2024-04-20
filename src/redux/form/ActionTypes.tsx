
export enum ActionType{
SUBMIT_FORM='SUBMIT_FORM',
SORTED_FORM='SORTED_FORM',
DELETE_FORM='DELETE_FORM',
 SET_DATA_TO_FORM='SET_DATA_TO_FORM',
 SET_UPDATED_INDEX='SET_UPDATED_INDEX'
}


export type FormValue={
    ename?: string;
    gender?: string;
    department?: string;
    doj?: string;
    email?: string;
}

export type State={
    FormToTable:FormValue[],
    TableToForm:FormValue,
    Updatedindex:number|null
 }



 
// export type Actions =
//     | { type: ActionType.SUBMIT_FORM, payload: { formData: FormValue, index: number|null } }
//     | { type: ActionType.SORTED_FORM, payload: FormValue[] }
//     | { type: ActionType.DELETE_FORM, payload: FormValue[] }
//     | { type: ActionType.SET_DATA_TO_FORM, payload: FormValue }
//     | { type: ActionType.SET_UPDATED_INDEX, payload: number | null };
