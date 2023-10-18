import React, { useEffect } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserQuestion from "./pages/UserQuestion";
import Template from "./pages/Template";
import BeforeQuestion from "./pages/BeforeQuestion";
import Uploader from "./pages/Uploader";
import Store from "./redux/store.js";
import { loadUser } from "./redux/actions/user.js";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import AdminProtectedRoute from "./AdminProtectedRoute";
import Loader from "./pages/loader";
import Dashboard from "./pages/Dashboard";
import AdminQuiz from "./pages/adminQuiz";
import AdminAllUser from "./pages/adminAllUser";
import AdminUser from "./pages/adminUser";
import AdminUpdatePassword from "./pages/adminUpdatePassword";
import AdminAddQuestion from "./pages/adminAddQuestion";
import AdminQuizView from "./pages/adminViewQuiz";
import AdminviewQuestion from "./pages/adminViewquestion";
import { Toaster } from "react-hot-toast";
import AdminViewUsers from "./pages/adminViewUsers";
import Home from "./pages/Home";
import UserViewQuiz from "./pages/userViewQuiz";
import ViewQuiz from "./pages/viewQuiz";

function App() {
  const { loading } = useSelector((state) => state.user);
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/view-quiz" element={<ViewQuiz />} />
            
              <Route path="/user" element={
              <ProtectedRoute>
                <UserQuestion />
                </ProtectedRoute>} />
         
            
            {/* User Routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-quiz/:id"
              element={
                <ProtectedRoute>
                  <UserViewQuiz />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/dashboard"
              element={
                <AdminProtectedRoute>
                  <Dashboard />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin-view-question"
              element={
                <ProtectedRoute>
                  <adminUserQuestion />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-create-quiz"
              element={
                <AdminProtectedRoute>
                  <AdminQuiz />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin-create-user"
              element={
                <AdminProtectedRoute>
                  <AdminUser />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin-users"
              element={
                <AdminProtectedRoute>
                  <AdminAllUser />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin-update-password"
              element={
                <AdminProtectedRoute>
                  <AdminUpdatePassword />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin-quiz/:id"
              element={
                <AdminProtectedRoute>
                  <AdminQuizView />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/quiz/:id/admin-view-question"
              element={
                <AdminProtectedRoute>
                  <AdminviewQuestion />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/quiz/:id/admin-view-users"
              element={
                <AdminProtectedRoute>
                  <AdminViewUsers />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/quiz/:id/admin-add-question"
              element={
                <AdminProtectedRoute>
                  <AdminAddQuestion />
                </AdminProtectedRoute>
              }
            />
            <Route path="/upload" element={<Uploader />} />
          </Routes>
          <Toaster position="bottom-center" reverseOrder={false} />

        </BrowserRouter>
      )}
    </>
  );
}

export default App;
