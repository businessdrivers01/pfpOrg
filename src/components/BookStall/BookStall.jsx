import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import MyButton from '../../utils/MyButton/MyButton'
import stallsLayout from "../../assets/BookStall/stalls-layout.jpg"

export default function BookStall() {
  const [isLayoutOpen, setIsLayoutOpen] = useState(false)
  const [popup, setPopup] = useState({ message: '', show: false, success: false })

  const handleLayoutOpen = () => {
    setIsLayoutOpen(!isLayoutOpen)
  }

  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    contactPerson: '',
    designation: '',
    cell: '',
    email: '',
    stallCategory: '',
    stallNo: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Send form data to Formspree
    const formUrl = 'https://formspree.io/f/YOUR_FORM_ID' // Replace with your Formspree form ID
    const formPayload = new FormData()
    Object.keys(formData).forEach(key => formPayload.append(key, formData[key]))

    fetch(formUrl, {
      method: 'POST',
      body: formPayload,
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setPopup({ message: 'Details submitted successfully!', show: true, success: true })
          setFormData({
            companyName: '',
            address: '',
            contactPerson: '',
            designation: '',
            cell: '',
            email: '',
            stallCategory: '',
            stallNo: '',
          })
        } else {
          setPopup({ message: 'Form submission failed. Please try again later.', show: true, success: false })
        }
      })
      .catch(() => {
        setPopup({ message: 'An error occurred. Please try again later.', show: true, success: false })
      })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-lightGray rounded-lg shadow-lg overflow-hidden">
        <div className="bg-orange text-white p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Stall Booking Form</h1>
          <p className="text-sm md:text-base">
            9th International Foundry Congress & Exhibition, PC Hotel, Lahore, Pakistan
            <br />
            January 29-30, 2025
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-darkGray mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-darkGray mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-darkGray mb-1">
                Contact Person
              </label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <div>
              <label htmlFor="designation" className="block text-sm font-medium text-darkGray mb-1">
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <div>
              <label htmlFor="cell" className="block text-sm font-medium text-darkGray mb-1">
                Cell
              </label>
              <input
                type="tel"
                id="cell"
                name="cell"
                value={formData.cell}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-darkGray mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <div>
              <label htmlFor="stallCategory" className="block text-sm font-medium text-darkGray mb-1">
                Stall Category
              </label>
              <input
                type="text"
                id="stallCategory"
                name="stallCategory"
                value={formData.stallCategory}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <div>
              <label htmlFor="stallNo" className="block text-sm font-medium text-darkGray mb-1">
                Stall No
              </label>
              <input
                type="text"
                id="stallNo"
                name="stallNo"
                value={formData.stallNo}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <h2 className="text-lg font-semibold text-darkGray mb-2">For Stall Reservation & Price Confirmation Please Contact</h2>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone className="text-orange mr-2" size={18} />
                <span>+92-322-8487873</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-orange mr-2" size={18} />
                <span>+92-303-7848558</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <h2 className="text-lg font-semibold text-darkGray mb-2">Mode of Payment</h2>
            <p className="text-sm">
              Account Title: Pak Foundry Association
              <br />
              Account#: 0028-1003549553
              <br />
              IBAN# PK71ALFH0028001003549553
              <br />
              Bank: Alfalah Bank Gulberg, Lahore, Pakistan
            </p>
          </div>

          <div className="flex justify-center">
            <MyButton className="md:px-8 text-xl">Book Now</MyButton>
          </div>

          <div className="flex justify-center">
            <button type="button" onClick={handleLayoutOpen} className="underline text-orange text-base font-bold mt-4">
              {isLayoutOpen ? "Hide" : "View"} Stalls Layout
            </button>
          </div>

          {isLayoutOpen && (
            <div className="relative mt-4">
              <img src={stallsLayout} alt="Stalls Layout" className="mx-auto rounded-lg shadow-md" />
            </div>
          )}
        </form>

        {/* Popup logic */}
        {popup.show && (
          <div
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white ${popup.success ? 'bg-green-500' : 'bg-red-500'
              }`}>
            <p>{popup.message}</p>
            <button onClick={() => setPopup({ ...popup, show: false })} className="underline text-sm mt-2">
              Close
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}
