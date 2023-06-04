import React, { Fragment } from 'react'

const DonationForm = ({fullname,setFullname,email,setEmail,phoneNumber,setPhoneNumber,handleCreateDonation,donationAmount,setDonationAmount}) => {
  return (
    <Fragment>
         <form className="my-3">
            <div class="flex justify-between my-2">
              <div class="w-2/3">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bağışcı Adı Soyadı
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ad - soyad"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bağış Tutarı
                </label>
                <div className="flex">
                  <input
                    type="number"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="O TL"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    required
                  />
                  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    TRY
                  </span>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              Bağışcı Telefon
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="05xx -xxx -xx -xx"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bağışcı Eposta
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </form>
          <button
            onClick={handleCreateDonation}
            className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
          >
            <svg
              className="mr-3"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66699 4.83333V4.84166"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.333 11.5V11.5083"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Ödemeye Geç
          </button>
    </Fragment>
  )
}

export default DonationForm