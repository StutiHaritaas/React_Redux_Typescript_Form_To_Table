import { ActionType,FormValue } from "./ActionTypes"


export const SubmitForm=(formData:FormValue,index:number|null)=>({
        type:ActionType.SUBMIT_FORM,
        payload:{
            formData,
            index
        }
})

export const SortedForm=(sortedData:FormValue[])=>({
        type:ActionType.SORTED_FORM,
        payload:sortedData
    
});


export const DeleteForm=(newdata:FormValue[])=>({
        type:ActionType.DELETE_FORM,
        payload:newdata
})

export const SetDataToForm=(tabledata:FormValue)=>({
        type:ActionType.SET_DATA_TO_FORM,
        payload:tabledata

})

export const SetUpdatedindex=(index:number|null)=>({
        type:ActionType.SET_UPDATED_INDEX,
        payload:index
    
})