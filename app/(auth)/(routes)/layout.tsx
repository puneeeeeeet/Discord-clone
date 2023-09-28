const AuthLayout = ({ children }: {
    children: React.ReactNode}) =>{
        return (
            <div className="bg-blue-800">
                {children}
            </div>
        )
    }
    export default AuthLayout;