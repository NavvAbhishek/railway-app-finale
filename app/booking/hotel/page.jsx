"use client";
import { useState } from "react";
import Image from "next/image";
import Img from "@/public/checkout-hotel.png";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PaymentForm = () => {
  // State variables for form fields
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [email, setEmail] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [expires, setExpires] = useState("");
  const [cvc, setCvc] = useState("");
  const [holderName, setHolderName] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // State for error messages
  const [errors, setErrors] = useState({});

  // Change handlers for form fields
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCardDetailsChange = (e) => setCardDetails(e.target.value);
  const handleExpiresChange = (e) => setExpires(e.target.value);
  const handleCvcChange = (e) => setCvc(e.target.value);
  const handleHolderNameChange = (e) => setHolderName(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handlePostalCodeChange = (e) => setPostalCode(e.target.value);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!cardDetails && paymentMethod === "card")
      newErrors.cardDetails = "Card details are required";
    if (!expires && paymentMethod === "card")
      newErrors.expires = "Expiration date is required";
    if (!cvc && paymentMethod === "card") newErrors.cvc = "CVC is required";
    if (!holderName && paymentMethod === "card")
      newErrors.holderName = "Card holder name is required";
    if (!country && paymentMethod === "paypal")
      newErrors.country = "Country is required";
    if (!postalCode && paymentMethod === "paypal")
      newErrors.postalCode = "Postal code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      // Process form submission here
      console.log("Form is valid. Submitting...");
    }
  };

  return (
    <div className="min-h-screen  pattern-bg">
      <Navbar/>
      <div className="text-center py-8">
        <h1 className="text-dark-blue text-3xl font-bold">Book Your Hotel</h1>
      </div>
      <div className="flex items-center justify-center mb-12">
        <div className="flex md:flex-row flex-col items-stretch rounded-lg py-12 md:py-0">
          <div className="flex-shrink-0">
            <Image
              src={Img}
              alt="Picture of the author"
              className="w-[460px] md:w-[450px] h-[550px] object-cover"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg h-[550px] w-[460px] md:w-[450px]">
            <div className="flex justify-center mb-6">
              {paymentMethod === "card" ? (
                <div className="bg-dark-yellow rounded-full">
                  <button
                    className="px-4 py-2 rounded-full text-sm font-medium bg-dark-blue text-dark-yellow shadow"
                    onClick={() => setPaymentMethod("card")}
                  >
                    Pay with Card
                  </button>
                  <button
                    className="px-4 py-2 rounded-full text-sm font-medium text-dark-blue"
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    Pay with PayPal
                  </button>
                </div>
              ) : (
                <div className="bg-dark-yellow rounded-full">
                  <button
                    className="px-4 py-2 rounded-full text-sm font-medium bg-dark-yellow text-dark-blue"
                    onClick={() => setPaymentMethod("card")}
                  >
                    Pay with Card
                  </button>
                  <button
                    className="px-4 py-2 rounded-full text-sm font-medium text-dark-yellow bg-dark-blue shadow"
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    Pay with PayPal
                  </button>
                </div>
              )}
            </div>

            {paymentMethod === "card" ? (
              <div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <div className="error-message text-xs text-red-600">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="card-details"
                  >
                    Card Details
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="card-details"
                    type="text"
                    value={cardDetails}
                    onChange={handleCardDetailsChange}
                    placeholder="Card Number"
                  />
                  {errors.cardDetails && (
                    <div className="error-message text-xs text-red-600">
                      {errors.cardDetails}
                    </div>
                  )}
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="w-1/2">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="expires"
                      type="text"
                      placeholder="Expires"
                      value={expires}
                      onChange={handleExpiresChange}
                    />
                    {errors.expires && (
                      <div className="error-message text-xs text-red-600">
                        {errors.expires}
                      </div>
                    )}
                  </div>
                  <div className="w-1/2">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="cvc"
                      type="text"
                      placeholder="CVC"
                      value={cvc}
                      onChange={handleCvcChange}
                    />
                    {errors.cvc && (
                      <div className="error-message text-xs text-red-600">
                        {errors.cvc}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="holder-name"
                  >
                    Holder Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="holder-name"
                    type="text"
                    placeholder="Name on Card"
                    value={holderName}
                    onChange={handleHolderNameChange}
                  />
                  {errors.holderName && (
                    <div className="error-message text-xs text-red-600">
                      {errors.holderName}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center justify-between">
                  <button className="w-full custome-btn" onClick={handleSubmit}>
                    <span>Pay Now</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {errors.email && (
                    <div className="error-message text-xs text-red-600">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <select
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="country"
                    value={country}
                    onChange={handleCountryChange}
                  >
                    {/* Add country options here */}
                    <option>Sri Lanka</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>New Zealand</option>
                    <option>France</option>
                    <option>Russia</option>
                  </select>
                  {errors.country && (
                    <div className="error-message text-xs text-red-600">
                      {errors.country}
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="postal-code"
                  >
                    Postal Code
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="postal-code"
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={handlePostalCodeChange}
                  />
                  {errors.postalCode && (
                    <div className="error-message text-xs text-red-600">
                      {errors.postalCode}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button className="w-full custome-btn" onClick={handleSubmit}>
                    <span> Pay with PayPal</span>
                  </button>
                </div>
              </div>
            )}
            <p className="text-center text-gray-500 text-xs mt-4">
              Payments are secure and encrypted.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PaymentForm;
