import {ActionType, FormValue,State } from "./ActionTypes"

const Initial_State:State={
   FormToTable:[],
   TableToForm:{},
   Updatedindex:null
  
}
// type reducerState = (state: State, action: Actions | unknown) =>State

const myReducer=(state=Initial_State,action:any):State=>{

  switch(action.type){
    case ActionType.SUBMIT_FORM:
      if(state.Updatedindex!==null){
        const updatedForms:FormValue[] = [...state.FormToTable]; 
        updatedForms[state.Updatedindex] = action.payload.formData;
        return{
          ...state,
          FormToTable: updatedForms,
        }
      }
      else{
        return{
          ...state,
          FormToTable:[...state.FormToTable,action.payload.formData]
     }  
      }

   case ActionType.SORTED_FORM:
    return{
      ...state,
      FormToTable:action.payload
 }  

   case ActionType.DELETE_FORM:
    return{
      ...state,
      FormToTable:action.payload
 } 

 case ActionType.SET_DATA_TO_FORM:
  return{
     ...state,
      TableToForm:action.payload
  }
   
  case ActionType.SET_UPDATED_INDEX:
  return{
     ...state,
      Updatedindex:action.payload
  }
    default: return state;
  }
}

export default myReducer