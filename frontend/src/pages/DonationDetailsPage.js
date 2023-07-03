import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import DonationForm from "../components/forms/DonationForm";
import CategoryDetailsGallery from "../components/gallery/CategoryDetailsGallery";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreateDonation } from "../redux/actions/donationActions";
import { message } from "antd";
import { CREATE_DONATION_RESET } from "../redux/constants/donationConstants";
import { GetCategoryDetails } from "../redux/actions/categoryActions";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

const DonationDetailsPage = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

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
  const getCategoryDetails = useSelector((state) => state.category.getCategoryDetails)

  useEffect(() => {
      dispatch(GetCategoryDetails(categoryId))
  }, [dispatch,categoryId])

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
        {getCategoryDetails.loading  ?    <LoadingSpinner /> : getCategoryDetails.success && <CategoryDetailsGallery />}

        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
             
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
              {getCategoryDetails.category.name} 
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
            <h4 className="mt-4">Açıklama</h4>
            <p className="xl:pr-32  text-base lg:leading-tight  leading-normal text-gray-600 mt-7">
                {getCategoryDetails.category.description}
            </p>
           
          </div>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                onClick={() => setShow(!show)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">
                 Zekat Bilgilendirmesi
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
            Zekât şartıyla gönderilen bağışlara ikinci bir şart kabul edilmemektedir.

Zekât hesabında toplanan meblağ sadece Kur’an’da belirtilen ihtiyaç sahipleri ve talebeler gibi sarf yerlerinde (ülkemizde ve dünyanın her yerinde) kullanılmaktadır.

Şartlı bağışlarınızı hayrat olarak kabul etmekteyiz ve belirttiğiniz yerlerde değerlendirmekteyiz.
              </div>
            </div>
          </div>
          <div>
            <div className="border-b py-4 border-gray-200 ">
              <div
                onClick={() => setShow2(!show2)}
                className="flex justify-between items-center cursor-pointer"
                
              >
                <p className="text-base leading-4 text-gray-800">Hüdayi Bağışcı Hattı</p>
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
              Yurt dışı kurban, eğitim, mescit, zekât, erzak vb bağışlarınız için
0532 691 48 32 özel hattımızdan bizi direkt arayabilirsiniz.
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DonationDetailsPage;
