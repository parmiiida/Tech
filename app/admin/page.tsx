// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// const AdminDashboard = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isClient, setIsClient] = useState(false);
//   const router = useRouter();

//   // Set a flag to check if we're on the client side
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (isClient) {
//       const token = localStorage.getItem("auth-token"); // Example of token-based authentication
//       if (!token) {
//         router.push("/login"); // Redirect to login if no token found
//       } else {
//         setIsAuthenticated(true);
//       }
//     }
//   }, [isClient, router]);

//   if (!isAuthenticated) {
//     return null; // Show loading or redirect to login
//   }

//   return (
//     <div className="flex min-h-screen bg-zinc-900 text-white">
//       {/* Sidebar */}
//       <div className="w-64 bg-black py-6 px-4">
//         <h1 className="text-2xl font-bold text-purple-400 mb-8">Admin Panel</h1>
//         <ul>
//           <li className="mb-4">
//             <Link href="/admin/dashboard" className="hover:text-purple-400">Dashboard</Link>
//           </li>
//           <li className="mb-4">
//             <Link href="/admin/posts" className="hover:text-purple-400">All Posts</Link>
//           </li>
//           <li className="mb-4">
//             <Link href="/admin/create" className="hover:text-purple-400">Create Post</Link>
//           </li>
//           <li className="mb-4">
//             <Link href="/admin/categories" className="hover:text-purple-400">Categories</Link>
//           </li>
//           <li className="mb-4">
//             <Link href="/admin/settings" className="hover:text-purple-400">Settings</Link>
//           </li>
//           <li className="mt-4 border-t border-zinc-600 pt-4">
//             <Link href="/logout" className="hover:text-red-400">Logout</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <h2 className="text-3xl font-semibold mb-4">Admin Dashboard</h2>

//         {/* Overview Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Total Posts</h3>
//             <p className="text-2xl">23</p>
//           </div>
//           <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Total Comments</h3>
//             <p className="text-2xl">56</p>
//           </div>
//           <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Pending Posts</h3>
//             <p className="text-2xl">5</p>
//           </div>
//         </div>

//         {/* Recent Posts List */}
//         <div className="bg-zinc-800 p-4 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold mb-4">Recent Posts</h3>
//           <table className="min-w-full text-left text-sm">
//             <thead className="border-b">
//               <tr>
//                 <th className="py-2 px-4">Title</th>
//                 <th className="py-2 px-4">Date</th>
//                 <th className="py-2 px-4">Status</th>
//                 <th className="py-2 px-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-2 px-4">Building AI-Powered Apps</td>
//                 <td className="py-2 px-4">Jan 28, 2025</td>
//                 <td className="py-2 px-4 text-green-500">Published</td>
//                 <td className="py-2 px-4">
//                   <Link href="/admin/edit/1" className="text-blue-400 hover:underline">Edit</Link>
//                   <span className="mx-2">|</span>
//                   <Link href="/admin/delete/1" className="text-red-400 hover:underline">Delete</Link>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2 px-4">The Future of Web Development</td>
//                 <td className="py-2 px-4">Feb 3, 2025</td>
//                 <td className="py-2 px-4 text-yellow-500">Draft</td>
//                 <td className="py-2 px-4">
//                   <Link href="/admin/edit/2" className="text-blue-400 hover:underline">Edit</Link>
//                   <span className="mx-2">|</span>
//                   <Link href="/admin/delete/2" className="text-red-400 hover:underline">Delete</Link>
//                 </td>
//               </tr>
//               {/* Add more rows here */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
