// CheckoutPage.js - Page de paiement et finalisation de commande
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';



const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    deliveryOption: 'standard',
    specialInstructions: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const deliveryFee = formData.deliveryOption === 'express' ? 5.00 : 3.00;
  const totalAmount = cartTotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateStep = (step) => {
    const errors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) errors.firstName = "Veuillez entrer votre prénom";
      if (!formData.lastName.trim()) errors.lastName = "Veuillez entrer votre nom";
      if (!formData.email.trim()) {
        errors.email = "Veuillez entrer votre email";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Format d'email invalide";
      }
      if (!formData.phone.trim()) errors.phone = "Veuillez entrer votre numéro de téléphone";
    }

    if (step === 2) {
      if (!formData.address.trim()) errors.address = "Veuillez entrer votre adresse";
      if (!formData.city.trim()) errors.city = "Veuillez entrer votre ville";
      if (!formData.postalCode.trim()) {
        errors.postalCode = "Veuillez entrer votre code postal";
      } else if (!/^\d{5}$/.test(formData.postalCode)) {
        errors.postalCode = "Le code postal doit contenir 5 chiffres";
      }
    }

    if (step === 3) {
      if (!formData.cardName.trim()) errors.cardName = "Veuillez entrer le nom sur la carte";
      if (!formData.cardNumber.trim()) {
        errors.cardNumber = "Veuillez entrer le numéro de carte";
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        errors.cardNumber = "Le numéro de carte doit contenir 16 chiffres";
      }
      if (!formData.expiryDate.trim()) {
        errors.expiryDate = "Veuillez entrer la date d'expiration";
      } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        errors.expiryDate = "Format invalide (MM/YY)";
      }
      if (!formData.cvv.trim()) {
        errors.cvv = "Veuillez entrer le code CVV";
      } else if (!/^\d{3}$/.test(formData.cvv)) {
        errors.cvv = "Le CVV doit contenir 3 chiffres";
      }
    }

    return errors;
  };

  const nextStep = () => {
    const errors = validateStep(currentStep);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateStep(currentStep);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomOrderNumber = 'CMD-' + Math.floor(100000 + Math.random() * 900000);
      setOrderNumber(randomOrderNumber);
      setIsOrderComplete(true);
      setIsSubmitting(false);
      clearCart();
    }, 2000);
  };

  // The rendering logic was cut off — I can help finish and clean it too

  return <div>...</div>; // Placeholder — the rest of your JSX needs to be added here
};

export default CheckoutPage;