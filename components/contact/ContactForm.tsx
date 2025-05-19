"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

type FormData = {
  fname: string;
  lname: string;
  company: string;
  phone: string;
  email: string;
  services: string;
  file: FileList | null;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const services = [
    "Notary",
    "Apostille Services",
    "Fingerprinting",
    "Courier Services",
    "Misc.",
  ];

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full lg:w-1/2">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fname" className="text-lg">First Name</Label>
          <Input
            id="fname"
            placeholder="John"
            className="text-lg h-10 mt-1 border-green-500 hover:border-green-500 focus:shadow-xl hover:shadow-xl"
            {...register("fname", { required: "First name is required" })}
          />
          {errors.fname && <p className="text-red-400 text-sm">{errors.fname.message}</p>}
        </div>

        <div>
          <Label htmlFor="lname" className="text-lg">Last Name</Label>
          <Input
            id="lname"
            placeholder="Smith"
            className="text-lg h-10 mt-1 border-green-500 hover:border-green-500 focus:shadow-xl hover:shadow-xl"
            {...register("lname", { required: "Last name is required" })}
          />
          {errors.lname && <p className="text-red-400 text-sm">{errors.lname.message}</p>}
        </div>
      </div>

      {/* Company */}
      <div>
        <Label htmlFor="company-name" className="text-lg">Company</Label>
        <Input
          id="company-name"
          placeholder="Example Ltd."
          className="text-lg h-10 mt-1 border-green-500 hover:border-green-500 focus:shadow-xl hover:shadow-xl"
          {...register("company", { required: "Company name is required" })}
        />
        {errors.company && <p className="text-red-400 text-sm">{errors.company.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="text-lg">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="123-456-789"
          className="text-lg h-10 mt-1 border-green-500 hover:border-green-500 focus:shadow-xl hover:shadow-xl"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/,
              message: "Format must be 123-456-789",
            },
          })}
        />
        {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-lg">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="text-lg h-10 mt-1 border-green-500 hover:border-green-500 focus:shadow-xl hover:shadow-xl"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
      </div>

      {/* Services Selection */}
      {/* <div className="mt-4 space-y-2">
        <p className="text-lg font-semibold text-white">What are you interested in?</p>

        <div className="flex flex-wrap gap-4 mt-2">
          {services.map((service) => (
            <label
              key={service}
              className="group relative flex items-center gap-3 px-4 py-2 rounded-lg border border-green-500 hover:border-green-500 focus:shadow-xl hover:shadow-xl cursor-pointer shadow-sm transition duration-200"
            >
              <input
                type="radio"
                value={service.toLowerCase()}
                {...register("services", { required: "Please select a service" })}
                className="peer hidden"
              />
              <div className="w-4 h-4 rounded-full border border-gray-300  peer-checked:border-green-500 peer-checked:bg-green-400  group-hover:bg-green-300 transition" />
              <span className="text-base text-white peer-checked:text-green-400 group-hover:text-green-300">
                {service}
              </span>
              <span
                className="absolute inset-0 rounded-lg ring-2 ring-transparent group-hover:ring-green-300 peer-checked:ring-green-400 transition"
                aria-hidden="true"
              />
            </label>
          ))}
        </div>

        {errors.services && <p className="text-red-400 text-sm">{errors.services.message}</p>}
      </div> */}
<div className="mt-4 space-y-2">
  <p className="text-lg font-semibold text-white">What are you interested in?</p>

  <div className="flex flex-wrap gap-4 mt-2">
    {services.map((service) => (
      <label
        key={service}
        className="group relative flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-300
                   cursor-pointer shadow-sm transition duration-200
                   hover:border-green-500 hover:shadow-xl"
      >
        <input
          type="radio"
          value={service.toLowerCase()}
          {...register("services", { required: "Please select a service" })}
          className="peer hidden"
        />
         
        <div
          className="absolute inset-0 rounded-lg transition-all duration-200
                     ring-2 ring-transparent
                     peer-checked:shadow-xl peer-checked:ring-green-400 group-hover:ring-green-300"
          aria-hidden="true"
        />

        {/* Custom circle */}
        <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-green-500 peer-checked:bg-green-400 group-hover:bg-green-300 transition" />

        {/* Text */}
        <span className="text-base text-white peer-checked:text-green-400 group-hover:text-green-300">
          {service}
        </span>
      </label>
    ))}
  </div>
</div>

      {/* File Upload */}
      <div>
        <Label htmlFor="file" className="text-lg">Upload your document</Label>
        <Input
          id="file"
          type="file"
          className="file:text-green-400 border-green-500 hover:border-green-500 focus:shadow-xl hover:shadow-xl"
          {...register("file")}
          onChange={(e) => setSelectedFileName(e.target.files?.[0]?.name || null)}
        />
        {selectedFileName && (
          <p className="text-green-300 text-sm mt-1">Selected file: {selectedFileName}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-lg">Message</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Write your message here..."
          className="text-lg mt-1 border-green-500  hover:border-green-500 focus:shadow-xl hover:shadow-xl"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="rounded-full px-10 py-3 mt-4 text-base bg-white text-green-800 hover:bg-gray-100 shadow border-green-500 hover:border-green-500 focus:shadow-xl hover:shadow-xl"
      >
        Submit
      </Button>
    </form>
  );
}
