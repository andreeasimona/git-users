import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import reducer from '../../state/reducer';

const initialState = {type: 'Users'};

describe('reducer handles the action correctly', function() {
	it('it should display initial State', function () {
		const nextState = reducer(initialState, {});
		expect(nextState.type).to.equal('Users');
	});
	it('should display the User in the next state correctly', function () {
		const user = { login: 'login'};
		const action = {
			type: 'User',
			user: user
		};
		const nextState = reducer(initialState, action);
		expect(nextState.type).to.equal('User');
		expect(nextState.user).to.equal(user);
	});
	it('should display the Users in the next state correctly', function () {
		const action = {
			type: 'Users'
		};
		const nextState = reducer(initialState, action);
		expect(nextState.type).to.deep.equal('Users');
		expect(nextState.user).to.deep.equal(undefined);
	});
});