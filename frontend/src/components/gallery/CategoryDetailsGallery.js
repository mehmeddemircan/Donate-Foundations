import { Image } from "antd";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const CategoryDetailsGallery = () => {
  const getCategoryDetails = useSelector(
    (state) => state.category.getCategoryDetails
  );

  return (
    <Fragment>
      <div class="col-md-6 grid gap-4">
        <div>
          <Image
            class="h-auto max-w-full rounded-lg"
            src={getCategoryDetails.category.images[8]?.url}
            alt=""
          />
        </div>
        <div class="grid grid-cols-5 gap-4 ">
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            {getCategoryDetails.category.images?.map((image, index) => (
              <div key={index}>
                {index !== getCategoryDetails.category.images?.length - 1 && (
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src={image.url}
                    alt=""
                  />
                )}
              </div>
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryDetailsGallery;
