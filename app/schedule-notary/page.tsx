"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormData, ServiceFormData } from './types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ScheduleNotary() {
    const [step, setStep] = useState(1);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    type CombinedFormData = ContactFormData & ServiceFormData;

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset
    } = useForm<CombinedFormData>();

    // Simplified next step handler - just changes the step
    const onNextStep = () => {
        setStep(2);
    };

    // Handle final submission
    const onSubmit = async (data: CombinedFormData) => {
        setIsSubmitting(true);
        try {
            // Only log the complete form data here
            console.log("Form Submission Data:", {
                // Step 1 data
                contactInfo: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    company: data.company,
                    email: data.email,
                    phone: data.phone,
                    address: data.address
                },
                // Step 2 data
                serviceInfo: {
                    numberOfIndividuals: data.numberOfIndividuals,
                    personName: data.personName,
                    serviceSpeed: data.serviceSpeed,
                    documentFile: selectedFile
                }
            });

            await new Promise(resolve => setTimeout(resolve, 1500));
            
            reset();
            setSelectedFile(null);
            setStep(1);
            const fileInput = document.getElementById('file-upload') as HTMLInputElement;
            if (fileInput) fileInput.value = '';
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    const handleFileDelete = () => {
        setSelectedFile(null);
        // Reset the file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
    };

    return (
        <div className='container max-w-3xl mx-auto px-5 2xl:px-0 py-20'>
            <h1 className='text-center text-3xl font-bold text-green-800 mb-10'>Service Job Request</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 border border-gray-300 p-8 rounded-lg shadow-md bg-white">
                {step === 1 ? (
                    <>
                        <h2 className='text-2xl font-bold mb-8 text-green-800 border-b pb-4'>Step 1: Your Contact Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                                <Input
                                    {...register('firstName', { required: 'First name is required' })}
                                    className="mt-1 focus:ring-green-500 focus:border-green-500"
                                    placeholder="John"
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                                <Input
                                    {...register('lastName', { required: 'Last name is required' })}
                                    className="mt-1 focus:ring-green-500 focus:border-green-500"
                                    placeholder="Doe"
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="company" className="text-gray-700">Law Firm/Company</Label>
                            <Input
                                {...register('company')}
                                className="mt-1 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="email" className="text-gray-700">Email</Label>
                                <Input
                                    type="email"
                                    {...register('email', { required: 'Email is required' })}
                                    className="mt-1 focus:ring-green-500 focus:border-green-500"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                                <Input
                                    type="tel"
                                    {...register('phone', { required: 'Phone number is required' })}
                                    className="mt-1 focus:ring-green-500 focus:border-green-500"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-700">Return Address</h3>
                            <div>
                                <Label htmlFor="street" className="text-gray-700">Street Name & Number</Label>
                                <Input
                                    {...register('address.street', { required: 'Street is required' })}
                                    className="mt-1 focus:ring-green-500 focus:border-green-500"
                                />
                                {errors.address && errors.address.street && (
                                    <p className="text-red-500 text-sm mt-1">{errors.address.street.message}</p>
                                )}
                            </div>
                            <div>
                                <Label htmlFor="suite" className="text-gray-700">Suite or Apartment</Label>
                                <Input
                                    {...register('address.suite')}
                                    className="mt-1 focus:ring-green-500 focus:border-green-500"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <Label htmlFor="city" className="text-gray-700">City</Label>
                                    <Input
                                        {...register('address.city', { required: 'City is required' })}
                                        className="mt-1 focus:ring-green-500 focus:border-green-500"
                                    />
                                    {errors.address && errors.address.city && (
                                        <p className="text-red-500 text-sm mt-1">{errors.address.city.message}</p>
                                    )}
                                </div>
                                <div>
                                    <Label htmlFor="state" className="text-gray-700">State/Province</Label>
                                    <Input
                                        {...register('address.state', { required: 'State is required' })}
                                        className="mt-1 focus:ring-green-500 focus:border-green-500"
                                    />
                                    {errors.address && errors.address.state && (
                                        <p className="text-red-500 text-sm mt-1">{errors.address.state.message}</p>
                                    )}
                                </div>
                                <div>
                                    <Label htmlFor="zipCode" className="text-gray-700">Zip Code</Label>
                                    <Input
                                        {...register('address.zipCode', { required: 'Zip code is required' })}
                                        className="mt-1 focus:ring-green-500 focus:border-green-500"
                                    />
                                    {errors.address && errors.address.zipCode && (
                                        <p className="text-red-500 text-sm mt-1">{errors.address.zipCode.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-8 pt-4 border-t">
                            <Button 
                                type="button" 
                                onClick={handleSubmit(onNextStep)}
                                className="bg-green-700 hover:bg-green-800 transition-colors px-6"
                            >
                                Next Step →
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className='text-2xl font-bold mb-8 text-green-800 border-b pb-4'>Step 2: Who Are We Serving?</h2>

                        <div className="space-y-6">
                            <div>
                                <Label htmlFor="numberOfIndividuals" className="text-gray-700">How many individuals/entities are we serving?</Label>
                                <Input
                                    type="number"
                                    min="1"
                                    {...register('numberOfIndividuals', { required: 'This field is required' })}
                                    className="mt-1 focus:ring-green-500 focus:border-green-500"
                                    placeholder="1"
                                />
                                {errors.numberOfIndividuals && (
                                    <p className="text-red-500 text-sm mt-1">{errors.numberOfIndividuals.message}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="personName" className="text-gray-700">Name of person/entity being served #1</Label>
                                <Input
                                    {...register('personName', { required: 'This field is required' })}
                                    className="mt-1 focus:ring-green-500 focus:border-green-500"
                                />
                                {errors.personName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.personName.message}</p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="documentFile" className="text-gray-700">Upload Documents</Label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-green-500 transition-colors">
                                    <div className="space-y-1 text-center">
                                        {!selectedFile ? (
                                            <>
                                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <Input
                                                        type="file"
                                                        {...register('documentFile')}
                                                        className="sr-only"
                                                        id="file-upload"
                                                        onChange={handleFileChange}
                                                    />
                                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                                                        <span>Upload a file</span>
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
                                            </>
                                        ) : (
                                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                                <div className="flex items-center space-x-2">
                                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    <span className="text-sm text-gray-700">{selectedFile.name}</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={handleFileDelete}
                                                    className="p-1 text-red-600 hover:text-red-800 rounded-full hover:bg-red-100"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="serviceSpeed" className="text-gray-700 font-medium">How soon do you require service?</Label>
                                <div className="relative">
                                    <select
                                        {...register('serviceSpeed', { required: 'Please select service speed' })}
                                        className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"
                                    >
                                        <option value="" className="text-gray-500">Select service</option>
                                        <option value="regular" className="py-2">Standard [Up to 3 attempts total over 7-10 business days]</option>
                                        <option value="rush" className="py-2">Rush [Up to 3 attempts total over 3-5 business days]</option>
                                        <option value="same-day" className="py-2">Same Day [1st attempt on the same day, 3 attempts total for 3 days]</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.serviceSpeed && (
                                    <p className="text-red-500 text-sm mt-1">{errors.serviceSpeed.message}</p>
                                )}
                            </div>

                            <div className="flex justify-between pt-8 border-t mt-8">
                                <Button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    variant="outline"
                                    className="border-green-700 text-green-700 hover:bg-green-50"
                                >
                                    ← Back
                                </Button>
                                <Button 
                                    type="submit" 
                                    className="bg-green-700 hover:bg-green-800 transition-colors px-6"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg 
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                fill="none" 
                                                viewBox="0 0 24 24"
                                            >
                                                <circle 
                                                    className="opacity-25" 
                                                    cx="12" 
                                                    cy="12" 
                                                    r="10" 
                                                    stroke="currentColor" 
                                                    strokeWidth="4"
                                                />
                                                <path 
                                                    className="opacity-75" 
                                                    fill="currentColor" 
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit Request'
                                    )}
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}
