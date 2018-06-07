import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Header from '../../components/Header';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Header renders corectly', function() {
	it('should have a header', function () {
		const wrapper = shallow(<Header/>);
		const header = wrapper.find('header');
		expect(header.props()).to.have.property('className', 'header-container');
	});
	it('should have a nav', function () {
		const wrapper = shallow(<Header/>);	
		const nav = wrapper.find('nav');
		expect(nav.props()).to.have.property('className', 'navbar navbar-expand-lg navbar-light bg-light');
	});
	it('should have a Link', function () {
		const wrapper = shallow(<Header/>);		
		const link = wrapper.find('Link');
		expect(link.props()).to.have.property('to', '/users');
	});
});