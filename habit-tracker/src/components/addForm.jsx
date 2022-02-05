import React, { Component } from 'react';

class AddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmitForm = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);

    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className='add-form' onSubmit={this.onSubmitForm}>
        <p className='add-info'>✅ 원하는 습관을 입력하세요.</p>
        <input type='text' className='add-input' ref={this.inputRef} />
        <button type='submit' className='add-button'>
          추가
        </button>
      </form>
    );
  }
}

export default AddForm;
