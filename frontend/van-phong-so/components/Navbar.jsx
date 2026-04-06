'use client'; 

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
   const router = useRouter();
   const { data: session } = useSession();

   const goToHome = () => {
      router.push("/");
   };
   return (
      <nav className="relative z-50 flex justify-between p-4 bg-white/80 shadow-md border-b border-gray-200">
         <div onClick={goToHome} className="cursor-pointer font-bold text-blue-600 text-xl">
            Văn Phòng Số
         </div>
         
         <div className="flex gap-4 items-center text-black">
            {session ? (
               <>
                  <span>Chào, <b className="text-blue-800">{session.user?.name}</b></span>
                  <button 
                     onClick={() => signOut({ callbackUrl: '/login' })}
                     className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg transition-colors"
                  >
                     Đăng xuất
                  </button>
               </>
            ) : (
               <div className="flex gap-2 items-center">
                  <span className="text-gray-500 italic">Khách (Chưa đăng nhập)</span>
                  <button 
                     onClick={() => router.push('/login')}
                     className="bg-blue-500 text-white px-4 py-1.5 rounded-lg"
                  >
                     Đăng nhập
                  </button>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;