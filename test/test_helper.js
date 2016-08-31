import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { expect } from 'chai';

import reducers from './../src/reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.documnet.defaultView;
const $ = jquery(global.window);

function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store= {createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

export { renderComponent, expect };