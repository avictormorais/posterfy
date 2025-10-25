import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isAuthenticated, loading } = useAuth();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, loading, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;