import React from "react";

export default function ShippingForm() {
  return (
    <div className="">
      <form onSubmit={}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="John Doe" id="name" />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
        />
        <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" placeholder="123 456 789" />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="St#10E" />
        <label htmlFor="city">City</label>
        <input type="text" id="city" placeholder="New York" />
      </form>
    </div>
  );
}
