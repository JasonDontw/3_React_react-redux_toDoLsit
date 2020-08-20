import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {
  render() {
    return (
      <div>ㄐ
        <div>
          <input value={this.props.inputValue} onChange={this.props.handleInputChange}/> {/*因為是映射進來的所以要用props*/} 
          <button onClick={this.props.handleButtonClick}>提交</button>
        </div>
        <ul>
            {
              this.props.list.map((item, index) =>{
                return(
                <li key={index} onClick={this.props.handleDeleteItem.bind(this, index)}>
                  {item}
                </li>
                )
              })
            }
          
        </ul>
     </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    inputValue: state.inputValue, //將store裡的state.inputValue映射到此組件的inputValue
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    handleInputChange(e){
      const action ={
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);    
    },

    handleButtonClick(){
      const action ={
        type: 'add_todo_list',
      }
      dispatch(action); 
    }, 

    handleDeleteItem(index){
      const action ={
        type: 'delete_todo_list',
        value: index
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList); 
//利用connect將TodoList與Store做連結,且連結規則寫在mapStateToProps裡
//如果我要修改store的數據,則將修改規則寫在mapDispatchToProps裡

