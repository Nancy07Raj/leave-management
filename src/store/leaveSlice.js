import { createSlice } from '@reduxjs/toolkit';
// import { message as toaster } from 'antd';
// import moment from 'moment';

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

export default leaveSlice.reducer;
