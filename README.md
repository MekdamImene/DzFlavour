
# dz_flavour 🍽

A modern web application for exploring and ordering delicious dishes with nutritional insights and user reviews.

## Project Description

dz_flavour is a comprehensive restaurant/food delivery web app that allows users to:
- Browse an organized menu of dishes
- View detailed dish information including nutritional facts
- Add items to a shopping cart and complete checkout
- Read and submit reviews for dishes
- Enjoy a seamless user experience from discovery to order placement

Built with React, this application features context API for state management, responsive design, and interactive components.
It provides users with:
A categorized menu of dishes
Detailed nutritional information
User-submitted reviews
A seamless shopping cart and checkout system
## Tech Stack
Frontend: React (with Context API)
Styling: CSS Modules
State Management: React Context API
Responsive Design: Mobile to desktop
Testing: React Testing Library
Setup Instructions
Prerequisites
Node.js v14+

npm or yarn

Installation
bash
Copy code
git clone https://github.com/MekdamImene/dz_flavour.git
cd dz_flavour
npm install
npm start
## Project Structure Overview
1. src/components/
Reusable UI components used across pages:

Review Components (/reviews/)

ReviewForm.jsx & ReviewForm.css: Review submission form

ReviewList.jsx & ReviewList.css: Displays user reviews

DishCard.jsx & .css: Displays a dish card (image, name, price)

Header.jsx & .css: Navigation bar (logo, links)

Footer.js: Page footer

HeroSection.jsx & .css: Promotional banner for homepage

NutritionInfo.jsx: Nutritional data for dishes

These are UI components that can be reused in multiple pages. Each .jsx file is a functional component, and each .css file styles it.

2. src/context/
Holds React Context API logic for global state:

CartContext.jsx: Manages cart state (add/remove, total price)

MenuContext.js: Manages menu data and filters

This folder manages global states like cart and menu without prop drilling.

3. src/data/
Static data used throughout the app:

menuData.js: Contains hardcoded dish information

This file stores hardcoded menu data used to populate the menu page.

4. src/pages/
Defines the main pages/routes of the app:

AboutPage.js: About us

CartPage.js & .css: Shopping cart

CategoryPage.jsx: Dishes by category

CheckoutPage.js & .css: Checkout form and summary

DishDetailPage.js & .css: Detailed dish info

HomePage.jsx & .css: Landing page

MenuPage.jsx & .css: Full dish menu

Each file here is a full page or route, composed of reusable components.

5. src/services/
Handles backend communication and data fetching:

api.js: API functions

apiConfig.js: Stores endpoints/config

integration.js: Backend connection logic

tests.js: Optional API test functions

This folder handles API calls and backend integration logic.

6. src/Styles/
Global/shared CSS styles:

components.css

main.css

pages.css

These provide consistent styling across the app.

7. Core Files
App.jsx & App.css: Main component handling routes and layout

App.test.js: App-level test file

index.js: App entry point

index.css: Global CSS rules

App.jsx is the core component, index.js is the starting point, and index.css sets global styles.
## As bonus features,
 we implemented several enhancements to improve user experience and functionality. A search bar was added to allow users to easily filter and find dishes by name. The entire application is built with a responsive design, ensuring a smooth and user-friendly experience on both desktop and mobile devices. To highlight new items, a "New " badge automatically appears on dishes with fewer than 10 views. Additionally, we implemented a persistent cart using localStorage, so users' cart items are saved even after a page refresh. A key addition is the nutrition information feature, which displays detailed nutritional facts for each dish—helping users make more informed dietary choices. we also built essential pages like the MenuPage, which displays all available dishes; the AboutPage, which provides background information about the app or business; and the Footer, which includes helpful links and contact info displayed at the bottom of every page