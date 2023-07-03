import React, { Fragment, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { CreatePaymentIntent } from "../redux/actions/stripeActions";
import SuccessResult from "../components/result/SuccessResult";
import GoHomeButton from "../components/buttons/GoHomeButton";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {

  const createDonation = useSelector((state) => state.donation.createDonation)
  const getCategoriesName = useSelector((state) => state.category.getCategoriesName)

  const findCategoryById = (categoryId) => {
    const category = getCategoriesName.categories.find((cat) => cat.id === categoryId);
    return category ? category : '';
  };

  const categoryItem = findCategoryById(createDonation.donation.category)
  const [donationAmount, setDonationAmount] = useState(createDonation.donation.donationAmount)
  const dispatch = useDispatch()

  const handlePayment = () => {
    dispatch(CreatePaymentIntent({donationAmount}))
  }

  const userStripePayment = useSelector((state) => state.stripePayment.userStripePayment)
  const navigate = useNavigate()
  return (
 
        <MainLayout>
            {userStripePayment.success ?  (
              <SuccessResult content="Ödeme başarılı şekilde gerçekleştirildi " buttonComp={<div className="flex justify-center" >
                  <GoHomeButton 
                    title="Anasayfa Git"
                    onClick={() => navigate('/' ,{replace : true })}
                  />
              </div>} />
            ) : (
              <div className="container mx-auto">
          
              <div class="my-4 grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div class="px-4 pt-8">
                  <p class="text-xl font-medium">Order Summary {donationAmount}</p>
                  <p class="text-gray-400">
                    Check your items. And select a suitable shipping method.
                  </p>
                  <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                    <div class="flex flex-row justify-end me-4 text-blue-600">View All</div>
                    <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                      <img
                        class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                        src= {createDonation.donation.category.images[0].url} 
                        alt=""
                      />
                      <div class="flex w-full flex-col px-4 py-4">
                        <span class="font-semibold">
                         {createDonation.donation.category.name} 
                        </span>
                       
                        <p class="text-lg font-bold">  {createDonation.donation.donationAmount} TL </p>
                      </div>
                    </div>
                   
                  </div>
        
                  <p class="mt-8 text-lg font-medium">Shipping Methods</p>
                  <form class="mt-5 grid gap-6">
                    <div class="relative">
                      <input
                        class="peer hidden"
                        id="radio_1"
                        type="radio"
                        name="radio"
                        checked
                      />
                      <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                      <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_1"
                      >
                        <img
                          class="w-14 object-contain"
                          src="https://play-lh.googleusercontent.com/jMECkIn97zzMi1IoWlb9SYjtbYolSPmgdLmylwIwo3pbhQ_omkRMzM0bS-PnN461hg"
                          alt=""
                        />
                        <div class="ml-5">
                          <span class="mt-2 font-semibold">Fedex Delivery</span>
                          <p class="text-slate-500 text-sm leading-6">
                            Delivery: 2-4 Days
                          </p>
                        </div>
                      </label>
                    </div>
                    <div class="relative">
                      <input
                        class="peer hidden"
                        id="radio_2"
                        type="radio"
                        name="radio"
                        checked
                      />
                      <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                      <label
                        class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                        for="radio_2"
                      >
                        <img
                          class="w-14 object-contain"
                          src="https://www.ayicgiyim.com/image/cache/catalog/demo/blog/visa-credit-cart-visa-kredi-kart%C4%B1-600x315w.png.webp"
                          alt=""
                        />
                        <div class="ml-5">
                          <span class="mt-2 font-semibold">Fedex Delivery</span>
                          <p class="text-slate-500 text-sm leading-6">
                            Delivery: 2-4 Days
                          </p>
                        </div>
                      </label>
                    </div>
                  </form>
                </div>
                <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                  <p class="text-xl font-medium">Payment Details</p>
                  <p class="text-gray-400">
                    Complete your order by providing your payment details.
                  </p>
                  <div class="">
                   
                    <label
                      for="card-holder"
                      class="mt-4 mb-2 block text-sm font-medium"
                    >
                      Card Holder
                    </label>
                    <div class="relative">
                      <input
                        type="text"
                        id="card-holder"
                        name="card-holder"
                        class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your full name here"
                      />
                      <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          
                        </svg>
                      </div>
                    </div>
                    <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">
                      Card Details
                    </label>
                    <div class="flex">
                      <div class="relative w-7/12 flex-shrink-0">
                        <input
                          type="text"
                          id="card-no"
                          name="card-no"
                          class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                        />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <svg
                            class="h-4 w-4 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                           
                          </svg>
                        </div>
                      </div>
                      <input
                        type="text"
                        name="credit-expiry"
                        class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="MM/YY"
                      />
                      <input
                        type="text"
                        name="credit-cvc"
                        class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="CVC"
                      />
                    </div>
                   
        
                    <div class="mt-6 border-t border-b py-2">
                      <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Subtotal</p>
                        <p class="font-semibold text-gray-900">{createDonation.donation.donationAmount} TRY </p>
                      </div>
                      {/* <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Shipping</p>
                        <p class="font-semibold text-gray-900">$8.00</p>
                      </div> */}
                    </div>
                    <div class="mt-6 flex items-center justify-between">
                      <p class="text-sm font-medium text-gray-900">Toplam</p>
                      <p class="text-2xl font-semibold text-gray-900">{createDonation.donation.donationAmount} TRY </p>
                    </div>
                  </div>
                  <button onClick={handlePayment} class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
                  Ödeme Yap
                  </button>
                </div>
              </div>
                    </div>
            )}
        </MainLayout>
 
  );
};

export default PaymentPage;
