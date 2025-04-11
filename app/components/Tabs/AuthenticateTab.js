"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ImageUploader from "../ImageUploader";
import Checkbox from "../Checkbox";
import { useTranslation } from "react-i18next";

export default function AuthenticateTab() {
  const { t } = useTranslation();

  // Form data state to track input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  // Validation errors that show in real-time as user types
  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    phone: false,
    description: false,
  });

  // Original form errors for submission validation
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    description: false,
  });

  const [checkedItems, setCheckedItems] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  // Validate input as user types
  const validateInput = (name, value) => {
    switch (name) {
      case "name":
        // Check if name contains numbers
        return /\d/.test(value);
      case "email":
        // Basic email validation
        return value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "phone":
        // Check if phone contains letters
        return /[a-zA-Z]/.test(value);
      default:
        return false;
    }
  };

  // Handle input changes and validate in real-time
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Only validate if there's some input
    if (value) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: validateInput(name, value),
      }));
    } else {
      // Clear error if field is empty
      setValidationErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleImagesChange = (files) => {
    setUploadedImages(files);
  };

  const validateForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const errors = {
      name: !form.name.value.trim(),
      email: !form.email.value.trim(),
      phone: !form.phone.value.trim(),
      description: !form.description.value.trim(),
    };

    setFormErrors(errors);

    // Check both empty fields and validation errors
    if (
      Object.values(errors).some(Boolean) ||
      Object.values(validationErrors).some(Boolean)
    ) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("name", form.name.value);
      formData.append("email", form.email.value);
      formData.append("phone", form.phone.value);
      formData.append("description", form.description.value);
      formData.append("formType", "Authentication");

      formData.append("telephone", checkedItems.checkbox1);
      formData.append("sms", checkedItems.checkbox2);
      formData.append("emailContact", checkedItems.checkbox3);
      formData.append("whatsapp", checkedItems.checkbox4);

      if (uploadedImages.length > 0) {
        uploadedImages.forEach((file) => {
          formData.append("images", file);
        });
      }

      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        form.reset();
        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
        });
        setValidationErrors({
          name: false,
          email: false,
          phone: false,
          description: false,
        });
        setCheckedItems({
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        });
        setUploadedImages([]);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-start justify-between lg:flex-row flex-col gap-6 pt-6 md:pt-12 md:px-4">
      <div className="space-y-3 md:space-y-4 w-full lg:max-w-[482px] px-2 md:px-0">
        <h1 className="md:block hidden text-[24px] md:text-4xl leading-[95%] font-semibold md:text-left text-center">
          {t("tab.titleAuthenticateOne")}
        </h1>
        <h1 className="block md:hidden text-[24px] md:text-4xl leading-[95%] font-semibold md:text-left text-center">
          {t("tab.titleAuthenticateTwo")}
        </h1>
        <p className="md:block hidden md:pb-8 text-black text-sm md:text-base font-normal leading-[20px] md:text-left text-center">
          {t("tab.descAuthenticateOne")}
        </p>
        <p className="block md:hidden md:pb-8 text-black text-sm md:text-base font-normal leading-[20px] md:text-left text-center">
          {t("tab.descAuthenticateTwo")}
        </p>
        <div className="w-full hidden md:flex items-center justify-center md:items-start md:justify-start">
          <Image
            src="/assets/authenticateTab.svg"
            alt="buy"
            width={252}
            height={321}
            className="md:w-[252px] md:h-[321px] w-[80px] h-[80px]"
          />
        </div>
      </div>

      <form
        onSubmit={validateForm}
        className="space-y-2.5 md:space-y-6 min-w-full lg:min-w-[500px] xl:min-w-[636px]"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className={`w-full px-4 text-base min-h-[33px] md:min-h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                     ${validationErrors.name || formErrors.name
                  ? "border-[#B80000]"
                  : "border-transparent focus:border-[#017EFE]"
                }`}
            />
            {formErrors.name && (
              <p className="text-[#B80000] text-sm mt-1">
                It is mandatory field
              </p>
            )}
            {validationErrors.name && !formErrors.name && (
              <p className="text-[#B80000] text-sm mt-1">
                Name cannot contain numbers
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@mail.com"
              className={`w-full px-4 text-base min-h-[33px] md:h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                     ${validationErrors.email || formErrors.email
                  ? "border-[#B80000]"
                  : "border-transparent focus:border-[#017EFE]"
                }`}
            />
            {formErrors.email && (
              <p className="text-[#B80000] text-sm mt-1">
                It is mandatory field
              </p>
            )}
            {validationErrors.email && !formErrors.email && (
              <p className="text-[#B80000] text-sm mt-1">
                Please enter a valid email address
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3"
            >
              Phone number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(+44) 123 456 7890"
              className={`w-full px-4 text-base min-h-[33px] md:h-[42px] bg-[#E3E8ED] rounded-[30px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                     ${validationErrors.phone || formErrors.phone
                  ? "border-[#B80000]"
                  : "border-transparent focus:border-[#017EFE]"
                }`}
            />
            {formErrors.phone && (
              <p className="text-[#B80000] text-sm mt-1">
                It is mandatory field
              </p>
            )}
            {validationErrors.phone && !formErrors.phone && (
              <p className="text-[#B80000] text-sm mt-1">
                Phone number cannot contain letters
              </p>
            )}
          </div>
        </div>

        {/* Image Upload */}
        <div className="pt-[14px] md:pt-6">
          <ImageUploader onImagesChange={handleImagesChange} />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm md:text-base font-normal text-black mb-2 md:mb-3"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter your description"
            className={`w-full px-4 py-2.5 h-[160px] text-base bg-[#E3E8ED] rounded-[20px] placeholder:text-[#828282] text-black outline-none border transition-colors duration-300 
                ${formErrors.description
                ? "border-[#B80000]"
                : "border-transparent focus:border-[#017EFE]"
              }`}
          />
          {formErrors.description && (
            <p className="text-[#B80000] text-sm mt-1">It is mandatory field</p>
          )}
        </div>

        {/* Status message */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
            Form submitted successfully! We&apos;ll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            There was an error submitting the form. Please try again later.
          </div>
        )}

        {/* Contact Preferences */}
        <div className="pt-[14px] md:pt-6 pb-[14px] md:pb-0">
          <p className="text-sm md:text-base font-normal text-black mb-3">
            I am happy to be contacted by
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <label className="inline-flex items-center">
              <Checkbox
                title="Telephone"
                checked={checkedItems.checkbox1}
                onChange={() => handleCheckboxChange("checkbox1")}
              />
            </label>
            <label className="inline-flex items-center">
              <Checkbox
                title="SMS"
                checked={checkedItems.checkbox2}
                onChange={() => handleCheckboxChange("checkbox2")}
              />
            </label>
            <label className="inline-flex items-center">
              <Checkbox
                title="Email"
                checked={checkedItems.checkbox3}
                onChange={() => handleCheckboxChange("checkbox3")}
              />
            </label>
            <label className="inline-flex items-center">
              <Checkbox
                title="Whatsapp"
                checked={checkedItems.checkbox4}
                onChange={() => handleCheckboxChange("checkbox4")}
              />
            </label>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`text-base font-medium w-full ${isSubmitting ? "bg-gray-400" : "bg-[#017EFE] hover:bg-[#003D7B]"
            } transition-all duration-300 text-white h-[35px] md:h-[40px] px-4 rounded-[60px] flex items-center justify-center`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
