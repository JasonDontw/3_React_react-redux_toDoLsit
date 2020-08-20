const defaultState ={
    inputValue : '',
    list : []
}

export default (state= defaultState, action) => {
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state)); //複製一份State因為不能直接修改State
        newState.inputValue = action.value;
        return newState;
    }else if(action.type === 'add_todo_list'){
        const newState = JSON.parse(JSON.stringify(state)); //複製一份State因為不能直接修改State
        newState.list = [...newState.list,newState.inputValue];
        newState.inputValue =''
        return newState;
    }else if(action.type === 'delete_todo_list'){
        const newState = JSON.parse(JSON.stringify(state)); //複製一份State因為不能直接修改State
        newState.list.splice(action.value,1);
        return newState;
    }

    return state;
}