import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import { expect } from 'chai';
import UserCard from '../../components/UserCard';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const user = {
	avatar_url:'avatar_url',
	id: 'id',
	login: 'login'
  }
describe('UserCard renders corectly', function() {
	it('should have the image set correctly', function () {
		const wrapper = mount(<MemoryRouter><UserCard user={user}/></MemoryRouter>);
		const img = wrapper.find('img');
		expect(img.props()).to.have.property('alt', 'Avatar');
		expect(img.props()).to.have.property('className', 'card-img-top');
		expect(img.props()).to.have.property('src', user.avatar_url);
	});
	it('should have a button to return to the list set correctly', function () {
		const wrapper = mount(<MemoryRouter><UserCard user={user}/></MemoryRouter>);
		const link = wrapper.find('Link');
		expect(link.text()).to.contain('More details');
		expect(link.props()).to.have.property('className', 'btn btn-primary');
		expect(link.props()).to.have.property('to', '/user');
	});
	it('should display the login correctly', function () {
		const wrapper = mount(<MemoryRouter><UserCard user={user}/></MemoryRouter>);
		const login = wrapper.find('h5');
		expect(login.props()).to.have.property('className', 'card-title');
		expect(login.text()).to.contain(user.login);
	});
});