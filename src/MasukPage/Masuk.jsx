import { NavbarGuest } from "../NavbarGuest/NavbarGuest";
import { Footer } from "../Footer/Footer";

const Masuk = () => {
    return (
        <>
            <NavbarGuest />
            <div className="flex min-h-full flex-col lg:flex-row justify-center px-6 py-12 lg:px-8">
                <div className="lg:w-1/2 lg:pr-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-20 w-auto"
                            src="group-70.svg"
                            alt="Logo"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <div className="text-sm flex items-center justify-between">
                                    <p>Remember me</p>
                                    <a href="/lupapassword" className="font-semibold text-green-700 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-3 text-center text-sm text-gray-500">
                            Belum punya akun?{' '}
                            <a href="daftar" className="font-semibold leading-6 text-green-700 hover:text-indigo-500">
                                Klik sini untuk daftar
                            </a>
                        </p>
                    </div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-8 flex items-center justify-center">
                    <div className="hidden lg:block">
                        <img
                            className="h-96 w-auto"
                            src="your-image-source.svg"
                            alt="Placeholder for the right side image"
                        />
                    </div>
                </div>
            </div>
            <Footer className="footer-instance" />
        </>
    );
};

export default Masuk;
