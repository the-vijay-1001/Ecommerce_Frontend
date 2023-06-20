const AdminAuth = {
    accountLogin: {
        url: "/admin/signin",
        method: "POST"
    },
    forgotPassword:{
        url:"/admin/forgot-password",
        method:"POST"
    },
    resetPassword:{
        url:"/admin/reset-password",
        method:"POST"
    }
}

export default AdminAuth;