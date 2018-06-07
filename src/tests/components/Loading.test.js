import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Loading from '../../components/Loading';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Loading renders corectly', function() {
	it('should display the Loading correctly', function () {
		const wrapper = shallow(<Loading/>);
		const animation = <div className="loading-animation"></div>;
    	expect(wrapper.contains(animation)).to.equal(true);
	});
});