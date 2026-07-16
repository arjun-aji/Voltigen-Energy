import React from 'react';

// Product Details Database
export const productsData = {
  multivitamin: {
    title: "Multivitamin",
    subtitle: "Daily Health & Vitality",
    price: "Rs 00.00",
    image: "/assets/multivitamin.png",
    images: ["/assets/multivitamin.png", "/assets/multivitaminback.png"],
    description: "Fuel Your Performance. Protect Your Health. Missing out on vital nutrients can drain your energy and slow you down. Voltigen Multivitamin is your ultimate daily defense, engineered to bridge nutritional gaps, supercharge your immune system, and fuel your everyday vitality. Featuring a high-potency blend of 30 essential nutrients, it delivers complete, premium daily nutrition support in one convenient bottle. Whether you are crushing professional goals, keeping up with a demanding lifestyle, or pushing your limits in training, Voltigen provides the foundational fuel your body needs to thrive.",
    servings: "100 Servings (100 Tablets)",
    usage: "Take 1 tablet daily with water, or as directed by a healthcare expert.",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        ),
        label: 'Energy Boost',
        text: 'Optimizes natural vitality and cellular ATP'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        ),
        label: 'Immune Guard',
        text: 'High-strength defense support for seasonal health'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        ),
        label: 'Cell Vitality',
        text: 'Promotes general longevity and overall well-being'
      }
    ],
    reviews: [
      {
        author: "Rohan Sharma",
        avatar: "R",
        meta: "Local Guide • 18 reviews",
        stars: 5,
        date: "2 weeks ago",
        text: "I've been using Voltigen Multivitamin for over a month now. My midday fatigue is completely gone, and I feel significantly more focused during long meetings. Highly recommended!"
      },
      {
        author: "Priya Patel",
        avatar: "P",
        meta: "Verified Buyer",
        stars: 5,
        date: "1 month ago",
        text: "Best daily multivitamin I've tried. Usually, supplements upset my stomach, but this organic formula is extremely gentle. My immunity and overall energy levels are great."
      }
    ]
  },
  fishoil: {
    title: "Fish Oil",
    subtitle: "Premium Omega-3",
    price: "Rs 00.00",
    image: "/assets/fishoil.png",
    images: ["/assets/fishoil.png", "/assets/fishoilback.png"],
    description: "Voltigen 3x Strength Omega-3 Fish Oil is a premium, high-potency dietary supplement designed to deliver maximum cardiovascular, joint, and cognitive support. Each bottle contains 100 premium softgels packed with an impressive 1250 mg of purified fish oil per serving, yielding an industry-leading 540 mg of EPA and 360 mg of DHA. Engineered for superior absorption and ultimate daily wellness, this ultra-pure formula provides the essential fatty acids your body needs to fuel peak physical performance, protect your heart, and sharpen mental clarity.",
    servings: "100 Premium Softgels",
    usage: "Take 1 to 3 softgels daily with a meal, or as directed by a healthcare professional.",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        ),
        label: 'Cardio Care',
        text: 'Supports healthy heart and circulation'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        ),
        label: 'Cognitive Fuel',
        text: 'Enhances focus, memory, and cognitive agility'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="1"></circle>
            <path d="M9 20a1 1 0 1 0 2 0v-4h2v4a1 1 0 1 0 2 0v-6L12 9l-3 5v6z"></path>
          </svg>
        ),
        label: 'Joint Relief',
        text: 'Reduces exercise-induced soreness and supports mobility'
      }
    ],
    reviews: [
      {
        author: "Arjun Mehta",
        avatar: "A",
        meta: "Local Guide • 31 reviews",
        stars: 5,
        date: "3 days ago",
        text: "Pure Omega-3 without any fishy aftertaste. I've noticed a significant improvement in my joint flexibility after workouts and much better focus. Molecularly distilled quality really shows."
      },
      {
        author: "Sneha Rao",
        avatar: "S",
        meta: "Verified Buyer",
        stars: 5,
        date: "1 month ago",
        text: "Amazing purity! My doctor recommended high EPA/DHA for heart health, and Voltigen fits the bill perfectly. Easy to swallow and clean packaging."
      }
    ]
  }
};

// WhatsApp and booking constants
export const whatsAppBookingBase = "https://wa.me/917356037181?text=";
export const generalBookingText = encodeURIComponent("Please fill the details:\nName:\nAddress:\nProduct:");
export const multivitaminBookingText = encodeURIComponent("Please fill the details:\nName:\nAddress:\nProduct: Voltigen Daily Multivitamin");
export const fishoilBookingText = encodeURIComponent("Please fill the details:\nName:\nAddress:\nProduct: Voltigen Ultra Pure Fish Oil");
