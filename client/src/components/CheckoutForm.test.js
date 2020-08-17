import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test("form header renders", () => {
    const {getByText}= render(<CheckoutForm/>)
    const header = getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
    
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId, getByText } = render(<CheckoutForm />)

    fireEvent.change(getByLabelText(/first name/i), { target: { value: "Adan" } })
    fireEvent.change(getByLabelText(/last name/i), { target: { value: "Rodriguez" } })
    fireEvent.change(getByLabelText(/address/i), { target: { value: "1202 Panther Ave" } })
    fireEvent.change(getByLabelText(/city/i), { target: { value: "Charlotte" } })
    fireEvent.change(getByLabelText(/state/i), { target: { value: "NC" } })
    fireEvent.change(getByLabelText(/zip/i), { target: { value: "61241" } })
    
});
