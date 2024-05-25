"use client";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sendEmail from "../_utils/sendToMail";

function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', option: '' });
    const [errors, setErrors] = useState({ name: '', email: '', phone: '', message: '', option: '' });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = (e: {
        target: any; preventDefault: () => void;
    }) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.values(newErrors).some(error => error)) {
            setErrors(newErrors);
            return;
        }

        toast.success('Form submitted successfully');

        e.preventDefault();
        const formData = {
            from_name: e.target.name.value,
            user_email: e.target.email.value,
            type: e.target.option.value,
            message: e.target.message.value,
        };
        console.log('Form submitted:', formData);
        sendEmail(formData);
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', phone: '', message: '', option: '' };

        if (!form.name.match(/^(?!\d).{10,}$/)) {
            newErrors.name = 'Name must be at least 10 characters long and should not start with a number.';
            toast.error('Name must be at least 10 characters long and should not start with a number.');
        }
        if (!form.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            newErrors.email = 'Email must be valid.';
            toast.error('Email must be valid.');
        }
        if (!form.phone.match(/^(010|015|011|012)\d{8}$/)) {
            newErrors.phone = 'Phone number must be a valid Egyptian number.';
            toast.error('Phone number must be a valid Egyptian number.');
        }
        if (!form.message) {
            newErrors.message = 'Message is required.';
            toast.error('Message is required.');
        }
        if (!form.option) {
            newErrors.option = 'Please select an option.';
            toast.error('Please select an option.');
        }

        return newErrors;
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-8">
                {/* <h2 className="my-4 text-xl text-orange-400 dark:text-orange-500">If you Have any Question do not hesitate..</h2> */}
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            At the same time, the fact that we are wholly owned and totally independent from the manufacturer and other group control gives you confidence that we will only recommend what is right for you.
                        </p>

                        <div className="mt-8">
                            {/* <a href="#" className="text-2xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent"> 0109 052 8591 - 0128 964 3240</a> */}
                            <address className="mt-2 not-italic">Port-said, Egypt</address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white dark:bg-gray-900 p-8 shadow-lg dark:shadow-dark lg:col-span-3 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg bg-white dark:bg-gray-900 p-3 text-sm ring-1 ring-gray-200 dark:ring-gray-600 outline-none"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg bg-white dark:bg-gray-900 p-3 text-sm ring-1 ring-gray-200 dark:ring-gray-600 outline-none"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg ring-1 ring-gray-200 dark:ring-gray-600 outline-none bg-white dark:bg-gray-900 p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                {['Sales Inquiry', 'Product Support', 'General Feedback'].map((option, index) => (
                                    <div key={index}>
                                        <label
                                            htmlFor={`Option${index + 1}`}
                                            className={`block w-full cursor-pointer rounded-lg border border-gray-200 dark:border-gray-600 p-3 text-gray-600 dark:text-gray-100 hover:bg-orange-100 ${form.option === option ? 'bg-orange-200 dark:bg-orange-500' : ''}`}
                                            tabIndex={0}
                                        >
                                            <input
                                                className="sr-only"
                                                id={`Option${index + 1}`}
                                                type="radio"
                                                tabIndex={-1}
                                                name="option"
                                                value={option}
                                                checked={form.option === option}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span className="text-sm">{option}</span>
                                        </label>
                                        {errors.option && index === 0 && (
                                            <p className="text-red-500 text-xs mt-1 col-span-full">{errors.option}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full rounded-lg ring-1 ring-gray-200 dark:ring-gray-600 outline-none bg-white dark:bg-gray-900 p-3 text-sm"
                                    placeholder="Message"
                                    rows={8}
                                    id="message"
                                    name="message"
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black dark:bg-white px-5 py-3 font-medium text-white dark:text-black sm:w-auto"
                                >
                                    Send inquiry
                                </button>
                            </div>

                        </form>
                        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
