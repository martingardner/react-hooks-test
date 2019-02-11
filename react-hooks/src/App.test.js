import React from 'react';
import ReactDOM from 'react-dom';
import { mount , shallow } from 'enzyme';
import App from './App';

describe('App.js tests', ()=> {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('App.js mount tests', ()=> {
    let AppMount = mount(<App />);

    it('enter text field should default to Enter Text', ()=> {
      let enterTextValue = AppMount.find('#enterText').props().value;
      console.log('enterTextValue', enterTextValue);
      expect( enterTextValue ).toEqual('Enter Text');
    });

  })
  
  describe('App.js shallow tests', ()=> {
    let AppShallow = shallow(<App />);

    beforeEach( ()=> {
      AppShallow.find('#enterText').simulate('change', {
        target: { value: 'New Text' }
      });
    });

    it('if enter text field equals New Text then state should be New Text', ()=> {
      //expect( AppShallow.state().text).toEqual('New Text');
    });
  })
  

  

  

});



