import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Tài khoản nội bộ",
      credentials: {
        username: { label: "Tên đăng nhập", type: "text" },
        password: { label: "Mật khẩu", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.username === "admin" && credentials?.password === "123456") {
          return { id: "1", name: "Quản trị viên", email: "admin@vanphongso.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login', // Đường dẫn trang đăng nhập của bạn
  }
});

export { handler as GET, handler as POST };