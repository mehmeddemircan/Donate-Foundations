import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import AuthModal from "../modal/AuthModal";
import { useSelector } from "react-redux";
import LanguageModal from "../modal/LanguageModal";
import { LoggedInSegment } from "./LoggedInSegment";
import { NotLoggedInSegment } from "./NotLoggedInSegment";
import { Dropdown, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';
import MegaMenu from "../megamenu/MegaMenu";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Online",
    description: " Online Bağış (Kredi/Banka Kartı)",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Hesaplar",
    description: "Hesap numaralarımız",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Sms",
    description: "SMS ile Bağış",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Kurban",
    description: "Kurban Bağış Kılavuzu",
    href: "#",
    icon: SquaresPlusIcon,
  },

];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}





const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const handleShowLanguageModal = () => {
    setShowLanguageModal(true);
  };
  const handleCloseLanguageModal = () => {
    setShowLanguageModal(false);
  };
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  const getCategoriesName = useSelector(
    (state) => state.category.getCategoriesName
  );
    const auth = useSelector((state) => state.auth)
    const navigate = useNavigate()
  return (
    <Fragment>
      <div className="container bg-light">
      <div class="d-flex flex-row align-items-center justify-content-between ">
  <div class="d-flex align-items-center">
    <a href="/" title="Hüdayi Vakfı" rel="home" class="logo-link ts-logo">
      <h1>
        <img src="https://www.seyyidburhaneddin.org/home/logoforhomepage" class="logo-image" alt="Hüdayi Vakfı"  />
      </h1>
    </a>
  </div>
  <div class="d-flex align-items-center"></div>
  <div class="d-flex align-items-center">
          
  <button onClick={() => navigate('/bagis-kategoriler')} className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Bağış Kategoriler
           
            </button>
        
          <Popover className="relative">
            <Popover.Button className="flex btn bg-red-600 mx-3 items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Bağış Yap
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
               
              </Popover.Panel>
            </Transition>
          </Popover>
    <a
           href="#"
            className="text-sm font-semibold fs-5 leading-6 text-gray-900 me-3"
            onClick={handleShowLanguageModal}
           >
             <i class="fa-solid fa-globe"></i>
          </a>
          {auth.authenticate ? <LoggedInSegment /> : <NotLoggedInSegment />}
                </div>
       
        <LanguageModal
          showLanguageModal={showLanguageModal}
          handleCloseLanguageModal={handleCloseLanguageModal}
        />
      
  </div>

       
</div>

<MegaMenu />
    </Fragment>

  );
};

export default MainHeader;
