import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Body from "./Body";

// Pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

// Auth Pages
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";

// App Pages (Protected)
import FeedPage from "./pages/Feed/FeedPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import EditProfilePage from "./pages/Profile/EditProfilePage";
import ConnectionsPage from "./pages/Connections/ConnectionsPage";
import RequestsPage from "./pages/Requests/RequestsPage";
// Error Page
import NotFoundPage from "./pages/NotFoundPage";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<HomePage />} />

            {/* Public Routes */}
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />

            {/* Auth Routes */}
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />

            {/* Protected Routes (App) */}
            <Route path="feed" element={<FeedPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile/edit" element={<EditProfilePage />} />
            <Route path="connections" element={<ConnectionsPage />} />
            <Route path="requests" element={<RequestsPage />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
