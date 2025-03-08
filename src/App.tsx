import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";
import LandingPage from "./Pages/LandingPage";
import DeveloperForm from "./Forms/SignUp/DeveloperForm";
import BuyerForm from "./Forms/SignUp/BuyerForm";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Login from "./Choice/Login";
import Signup from "./Choice/Signup";
import LoginDev from "./Forms/LogIn/LoginDev";
import LoginBuyer from "./Forms/LogIn/LoginBuyer";
import ForgotPassword from "./Forms/ForgotPassword/ForgotPassword";
import DeveloperDashboard from "./DashBoard/DevDashboard/DeveloperDashboard"; 
import ProductGrid from "./Pages/Products/ProductGrid";
import DeveloperGrid from "./Pages/Products/Devs/DeveloperGrid";
import NewLandingPage from "./Pages/NewLandingPage";
import { Developer } from './Pages/Products/types'; 
import BuyerDashboardRoutes from "./DashBoard/BuyerDashboard/BuyerDashboardRoutes";
// import BuyerDashboard from "./DashBoard/BuyerDashboard/BuyerDashboard";
// import BuyerDashboards from "./DashBoard/BuyerDashboard/BuyersDashboard";

function App() {
  const products = [
    {
      id: '1',
      name: 'AI Tool 1',
      description: 'A powerful tool for data analysis.',
      price: '$50',
      rating: 4,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'AI Tool 2',
      description: 'An AI-powered image recognition tool.',
      price: '$100',
      rating: 5,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      name: 'AI Tool 3',
      description: 'A chatbot that uses NLP for conversations.',
      price: '$30',
      rating: 3,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      name: 'AI Tool 4',
      description: 'A sentiment analysis tool that predicts customer emotions.',
      price: '$75',
      rating: 4,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '5',
      name: 'AI Tool 5',
      description: 'A recommendation system for personalized content.',
      price: '$120',
      rating: 5,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '6',
      name: 'AI Tool 6',
      description: 'An AI-driven predictive maintenance tool for industrial equipment.',
      price: '$200',
      rating: 4,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '7',
      name: 'AI Tool 7',
      description: 'A language translation tool powered by deep learning.',
      price: '$40',
      rating: 3,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '8',
      name: 'AI Tool 8',
      description: 'An automated fraud detection system for financial transactions.',
      price: '$150',
      rating: 5,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const developers: Developer[] = [
    {
      id: '1',
      name: 'Jane Doe',
      profileImage: 'https://via.placeholder.com/150',
      skills: 'Machine Learning, Data Science, Python, TensorFlow',
      location: 'New York, USA',
      rating: 4,
    },
    {
      id: '2',
      name: 'John Smith',
      profileImage: 'https://via.placeholder.com/150',
      skills: 'Natural Language Processing, Deep Learning, JavaScript, Hugging Face',
      location: 'London, UK',
      rating: 5,
    },
    {
      id: '3',
      name: 'Alex Johnson',
      profileImage: 'https://via.placeholder.com/150',
      skills: 'Computer Vision, AI Research, OpenCV, Python',
      location: 'Toronto, Canada',
      rating: 3,
    },
    {
      id: '4',
      name: 'Sophia Lee',
      profileImage: 'https://via.placeholder.com/150',
      skills: 'AI Ethics, Neural Networks, R, Machine Learning',
      location: 'Sydney, Australia',
      rating: 4,
    },
    {
      id: '5',
      name: 'Michael Brown',
      profileImage: 'https://via.placeholder.com/150',
      skills: 'AI Development, Reinforcement Learning, C++, Robotics',
      location: 'Berlin, Germany',
      rating: 5,
    },
    {
      id: '6',
      name: 'Emily Clark',
      profileImage: 'https://via.placeholder.com/150',
      skills: 'AI-driven Marketing, Predictive Analytics, SQL, Big Data',
      location: 'San Francisco, USA',
      rating: 4,
    },
    {
      id: '7',
      name: 'Liam Williams',
      profileImage: 'https://via.placeholder.com/150',
      skills: 'Robotics, Machine Learning, Autonomous Systems, C++',
      location: 'Tokyo, Japan',
      rating: 3,
    },
    {
      id: '8',
      name: 'Olivia Martinez',
      profileImage: 'https://via.placeholder.com/150',
      skills: 'Data Visualization, Statistical Analysis, R, Machine Learning',
      location: 'Madrid, Spain',
      rating: 5,
    },
  ];

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage for a saved sign-in token or flag
    const savedSignInStatus = localStorage.getItem("isSignedIn");
    if (savedSignInStatus === "true") {
      setIsSignedIn(true);
    }
  }, []);

  // const handleSignIn = () => {
  //   setIsSignedIn(true);
  //   localStorage.setItem("isSignedIn", "true"); // Save sign-in status in localStorage
  // };

  // const handleSignOut = () => {
  //   setIsSignedIn(false);
  //   localStorage.setItem("isSignedIn", "false"); // Clear sign-in status from localStorage
  // };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage isSignedIn={isSignedIn} />} />
        <Route path="/new" element={<NewLandingPage />} />
        <Route path="/signup/dev" element={<DeveloperForm />} />
        <Route path="/signup/buyer" element={<BuyerForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login/dev" element={<LoginDev />} />
        <Route path="/login/buyer" element={<LoginBuyer />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/products" element={<ProductGrid products={products} />} />
        <Route path="/developers" element={<DeveloperGrid developers={developers} />} />

        {/* ✅ Developer Dashboard Route - Supports Nested Routes */}
        <Route path="/dev/dashboard/*" element={<DeveloperDashboard />} />
        

        
        {/* ✅ Buyers Dashboard Route - Supports Nested Routes */}
        {/* <Route path="/buyer/dashboard/*" element={<BuyerDashboard />} /> */}

        {/* <Route path="/buyer/dashboard/*" element={<BuyerDashboards />} /> */}
        <Route path="/buyer/dashboard/*" element={<BuyerDashboardRoutes />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
