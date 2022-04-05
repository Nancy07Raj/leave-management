import { createSlice } from '@reduxjs/toolkit';
import { message as toaster } from 'antd';
import moment from 'moment';
import { API } from 'api';

const initialState = {
	selectedDate: '',
	selectedFilter: '',
	filterDates: [],
	reason: '',
	Data: [],
	leaveListData: [],
	dashboard: [],
	filterApply: false,
};

export const leaveSlice = createSlice({
	name: 'leave',
	initialState,
	reducers: {
		addLeave: (state, { payload }) => {
			state.data = [...state.data, payload];
		},
		setSelectedDate: (state, { payload }) => {
			state.selectedDate = [...state.selectedDate, payload];
		},
		setSelectedFilter: (state, { payload }) => {
			state.selectedFilter = payload;
		},
		setFilterDates: (state, { payload }) => {
			state.filterDates = payload;
		},
		removeSelectedDate: (state, { payload }) => {
			state.selectedDate = payload;
		},
		setLeaveReason: (state, { payload }) => {
			state.reason = payload;
		},
		setLeaveData: (state, { payload }) => {
			const list = payload.map((data) => data.date.map((dt) => dt));
			const dataAPI = payload;

			state.leaveListData = list;
			state.Data = dataAPI;
		},
		clearSelectedDate: (state, { payload }) => {
			state.selectedDate = payload;
		},
		setDashboard: (state, { payload }) => {
			state.dashboard = payload;
		},
		setFilterApply: (state, { payload }) => {
			state.filterApply = payload;
		},
	},
});

export const {
	addLeave,
	setSelectedDate,
	setSelectedFilter,
	setFilterDates,
	removeSelectedDate,
	setLeaveReason,
	setLeaveData,
	clearSelectedDate,
	setDashboard,
	setFilterApply,
} = leaveSlice.actions;

export const leaveList = () => async (dispatch) => {
	const CREDENTIALS = {
		url: `/leaves`,
	};

	return API.common(CREDENTIALS).then((response) => {
		dispatch(setLeaveData(response.data));
	});
};

export const requestLeave = (reason, selectedDate) => async (dispatch) => {
	const date = selectedDate.map((dt) => moment(dt).format('YYYY-MM-DD'));
	const CREDENTIALS = {
		url: `/leaves`,
		method: 'post',
		data: {
			reason,
			date,
		},
	};

	return API.common(CREDENTIALS)
		.then(() => {
			toaster.success('Leave Applied successfully');
			dispatch(removeSelectedDate([]));
			dispatch(setLeaveReason(''));
		})
		.catch(() => {
			dispatch(removeSelectedDate([]));
			dispatch(setLeaveReason(''));
		});
};

export const leaveFilter = (data) => async (dispatch) => {
	const CREDENTIALS = {
		url: `/leaves/dates`,
		queryParams: {
			from_date: data[0],
			to_date: data[1],
		},
	};

	return API.common(CREDENTIALS).then((response) => {
		dispatch(setFilterDates(response.data));
		dispatch(setFilterApply(true));
		console.log('FilterDates', response.data);
	});
};

export const leaveDashboard = () => async (dispatch) => {
	const CREDENTIALS = {
		url: `/leaves/dashboard`,
	};

	return API.common(CREDENTIALS).then((response) => {
		dispatch(setDashboard(response.data));
	});
};

export const deleteLeave = (leaveId) => async (dispatch) => {
	const CREDENTIALS = {
		url: `/leaves/${leaveId}`,
		method: 'delete',
	};

	return API.common(CREDENTIALS).then(() => {
		toaster.error('Leave Deleted successfully');
		dispatch(leaveList());
	});
};

export default leaveSlice.reducer;
