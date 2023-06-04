import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import DonationForm from "../components/forms/DonationForm";
import CategoryDetailsGallery from "../components/gallery/CategoryDetailsGallery";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreateDonation } from "../redux/actions/donationActions";
import { message } from "antd";
import { CREATE_DONATION_RESET } from "../redux/constants/donationConstants";

const DonationDetailsPage = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const {categoryId} = useParams()

  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [donationAmount, setDonationAmount] = useState(0)
  const [category, setCategory] = useState(categoryId)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCreateDonation = () => {
    dispatch(CreateDonation({fullname,email,phoneNumber,donationAmount,category}))
  }

  const createDonation = useSelector((state) => state.donation.createDonation)

  useEffect(() => {
      if(createDonation.success){
        message.success(createDonation.message)
        navigate('/payment',{replace : true })
        dispatch({type : CREATE_DONATION_RESET})
      }
  }, [dispatch,createDonation.success])

  return (
    <MainLayout>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <CategoryDetailsGallery />

        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              Balenciaga Fall Collection 
            </p>
            <h1
              className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
            >
              Balenciaga Signature Sweatshirt
            </h1>
          </div>
          <DonationForm 
              fullname={fullname}
              setFullname={setFullname}
              email={email}
              setEmail={setEmail}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              donationAmount={donationAmount}
              setDonationAmount={setDonationAmount}
           
              handleCreateDonation={handleCreateDonation}


          />
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              It is a long established fact that a reader will be distracted by
              thereadable content of a page when looking at its layout. The
              point of usingLorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Product Code: 8BN321AF2IF0NYA
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Length: 13.2 inches
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Height: 10 inches
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Depth: 5.1 inches
            </p>
            <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
              Composition: 100% calf leather, inside: 100% lamb leather
            </p>
          </div>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                onClick={() => setShow(!show)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">
                  Shipping and returns
                </p>
                <button
                  className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                  aria-label="show or hide"
                >
                  <svg
                    className={
                      "transform " + (show ? "rotate-180" : "rotate-0")
                    }
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                  (show ? "block" : "hidden")
                }
                id="sect"
              >
                You will be responsible for paying for your own shipping costs
                for returning your item. Shipping costs are nonrefundable
              </div>
            </div>
          </div>
          <div>
            <div className="border-b py-4 border-gray-200">
              <div
                onClick={() => setShow2(!show2)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">Contact us</p>
                <button
                  className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                  aria-label="show or hide"
                >
                  <svg
                    className={
                      "transform " + (show2 ? "rotate-180" : "rotate-0")
                    }
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                  (show2 ? "block" : "hidden")
                }
                id="sect"
              >
                If you have any questions on how to return your item to us,
                contact us.
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DonationDetailsPage;
