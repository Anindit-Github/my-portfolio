
export const Scaffold = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center w-full px-4 sm:px-6">
            <div className="w-full max-w-5xl">
                {children}
            </div>
        </div>
    )
}