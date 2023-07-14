import React, { Fragment } from "react";

const ServiceCard = () => {
  return (
    <Fragment>
        <div className="flex flex-row flex-wrap justify-center gap-y-4  gap-x-3 my-5">
        <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://www.hudayivakfi.org/wp-content/uploads/2023/06/sierre-leone-4-150x150.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          2023 Yurt İçi ve Yurt Dışı Kurban Hizmetimizden Video ve Fotoğraflar
          </h5>
         
        </div>
      </a>
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://www.hudayivakfi.org/wp-content/uploads/2023/06/sierre-leone-2-150x150.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          KURBAN GÖZLEMCİLERİMİZ UZAKLARI YAKIN ETMEK İÇİN YOLA ÇIKIYOR | 2023
          </h5>
        
        </div>
      </a>
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://www.hudayivakfi.org/wp-content/uploads/2023/06/senegal-1-150x150.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          2023 Yurt İçi ve Yurt Dışı Kurban Hizmetlerimiz Erkam Radyo’da
          </h5>
        
        </div>
      </a>
        </div>
    </Fragment>
  );
};

export default ServiceCard;
