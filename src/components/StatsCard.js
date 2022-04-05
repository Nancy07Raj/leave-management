import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Rectangle from 'assets/rectangle-line.svg';
import LeaveTaken from 'assets/total-leaves-taken.svg';
import { Stats } from 'components/pages/leave-management';
import Approval from 'assets/waiting-for-approval.svg';
// import Arrow from 'assets/arrow.svg';
import { Flex, Image } from 'atoms';
import { theme } from 'styles/theme';
import { leaveDashboard } from 'store/leaveSlice';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	top: 60px;
	height: 60px;
	width: 95%;
	margin: 0 10px;
	/* height: ${(props) => (!props.show ? '40px' : '80px')}; */
	padding: 10px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.colors.white};
`;

const StatsContainer = styled(Flex)`
	justify-content: space-between;
	width: 100%;
	margin: 10px;
	margin-left: 20px;

	/* visibility: ${(props) => !props.show && 'hidden'}; */
`;

// const ArrowBox = styled(Box)`
// 	background: ${(props) => props.theme.colors.Cultured};
// 	margin-left: 10px;
// 	padding: 8px 11px;
// 	border-radius: 25px;
// 	color: ${(props) => props.theme.colors.CelticBlue};
// 	img {
// 		transform: ${(props) => (!props.show ? 'rotate(180deg)' : 'none')};
// 	}
// `;

// const ViewDetails = styled.div`
// 	display: ${(props) => (!props.showDetails ? 'block' : 'none')};
// 	margin: 0 20px;
// 	width: 200px;
// `;

export default function StatsCard() {
	// const [showDetails, setShowDetails] = useState(true);
	const dispatch = useDispatch();
	const { dashboard = [] } = useSelector((state) => state.leave);
	const approvedLeave = dashboard?.map((data) => data?.approved_leave);
	const waitingForApproval = dashboard?.map((data) => data?.pending_leave);

	useEffect(() => {
		dispatch(leaveDashboard());
	}, [dispatch]);

	return (
		<Container>
			{/* <Container show={showDetails}> */}
			{/* <ViewDetails showDetails={showDetails}>
				<Text fontSize="12px">View Details</Text>
			</ViewDetails> */}
			{/* <StatsContainer show={showDetails}> */}
			<Image src={Rectangle} alt="line" />
			<StatsContainer>
				<Stats
					src={LeaveTaken}
					bg={theme.colors.Emerald}
					label="Total leaves taken"
					total={approvedLeave}
					alt="LeaveTaken"
					fontSize={10}
				/>
				<Stats
					src={Approval}
					bg={theme.colors.YellowOrg}
					label="Waiting for approval"
					total={waitingForApproval}
					alt="Approval"
					fontSize={10}
				/>
			</StatsContainer>
			{/* <ArrowBox onClick={() => setShowDetails(!showDetails)} show={showDetails}>
				<Image src={Arrow} alt="arrow" width={10} height={10} />
			</ArrowBox> */}
		</Container>
	);
}
