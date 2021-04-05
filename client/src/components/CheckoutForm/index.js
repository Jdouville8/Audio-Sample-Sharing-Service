import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Button, makeStyles } from '@material-ui/core';
import BillingDetailsFields from '../BillingFields/index';
import Grid from '@material-ui/core/Grid';
import { InlineWidget } from 'react-calendly';

const CARD_OPTIONS = {
	iconStyle: 'solid',
	style: {
		base: {
			iconColor: '#c4f0ff',
			color: '#8384f3',
			fontWeight: 500,
			fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
			fontSize: '16px',
			fontSmoothing: 'antialiased',
			// border: 'none',
			':-webkit-autofill': { color: '#fce883' },
			'::placeholder': { color: '#87bbfd' },
		},
		invalid: {
			iconColor: '#ffc7ee',
			color: '#ffc7ee',
		},
	},
};

const useStyles = makeStyles((theme) => ({
	card: {
		margin: '15px',
	},
}));

export default function CheckoutForm() {
	const [success, setSuccess] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
	const classes = useStyles();

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault();

		// if (!stripe || !elements) {
		//   // Stripe.js has not loaded yet. Make sure to disable
		//   // form submission until Stripe.js has loaded.
		//   return;
		// }

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const cardElement = elements.getElement(CardElement);

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		});

		if (!error) {
			try {
				const { id } = paymentMethod;
				const response = await axios.post('/stripe/create-payment-intent', {
					amount: 3000,
					id,
				});

				if (response.data.success) {
					console.log('successful payment');
					console.log(response);
					setSuccess(true);
					props.handlePaySuccess;
				}
			} catch (error) {
				console.log('Error', error);
			}
		} else {
			console.log(error.message);
		}
	};

	return (
		<>
			{!success ? (
				<form onSubmit={handleSubmit}>
					<fieldset
						className="FormGroup"
						style={{ borderRadius: '10px', backgroundColor: 'white' }}
					>
						<div className="FormRow">
							<BillingDetailsFields></BillingDetailsFields>
							<div className={classes.card}>
								<CardElement options={CARD_OPTIONS} />
							</div>
						</div>
					</fieldset>
					{/* <fieldset className="FormGroup" style={{ borderRadius: "10px" }}>
            <div className="FormRow">
            </div>
          </fieldset> */}
					<Button
						type="submit"
						style={{
							color: '#5e235b',
							marginTop: '10px',
							backgroundColor: '#8989fc',
						}}
					>
						Pay
					</Button>
				</form>
			) : (
				<div>
					<Grid
						item
						style={{ width: '100%' }}
						alignItems="center"
						justify="center"
					>
						<h2 style={{ textAlign: 'center' }}>
							Get your headphones and a cup of coffee, this should be fun!
						</h2>
						<InlineWidget
							styles={{
								height: '650px',
							}}
							url="https://calendly.com/backleftmusic"
						/>
					</Grid>
				</div>
			)}
		</>
	);
}
