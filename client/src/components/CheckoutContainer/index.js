import React from 'react';
import CheckoutForm from '../CheckoutForm/index';

function index(props) {
	return (
		<>
			<div>
				<CheckoutForm value={props.handlePaySuccess} />
			</div>
		</>
	);
}

export default index;
