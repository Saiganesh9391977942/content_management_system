import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { logout } from '../store/authSlice';

export default function Dashboard() {
    const dispatch = useDispatch();
    // Get the logged in admin's data from Redux
    const admin = useSelector((state: RootState) => state.auth.admin);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">CMS Admin</h1>
                <div className="flex items-center gap-4">
                    <span className="text-gray-600">Welcome, {admin?.username || 'Admin'}</span>
                    <button
                        onClick={() => dispatch(logout())}
                        className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </nav>
            <main className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Pages Overview</h2>
                <div className="rounded-lg bg-white p-6 shadow">
                    <p className="text-gray-500">No pages created yet. The editor will go here next!</p>
                </div>
            </main>
        </div>
    );
}
