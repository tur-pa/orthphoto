import { useState } from "react";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa6";
import { useLogin } from "../features/users/useLogin";

function Login() {
  const [email, setEmail] = useState("test@tlen.pl");
  const [password, setPassword] = useState("123456");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <div
      className="relative -top-8 max-h-screen overflow-hidden bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(/background_image.jpg)` }}
    >
      <section id="signup">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-[75vh] lg:py-0">
          <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
            <div className="sm-p-8 space-y-4 p-6 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Zaloguj się
              </h1>
              <div className="flex gap-4">
                <button className="w-full rounded-lg border border-gray-300 p-2.5 font-medium text-gray-700 transition-all hover:bg-gray-100">
                  <div className="inline-flex items-center space-x-2">
                    <FaGoogle size={20} /> <span>Zaloguj z Google</span>
                  </div>
                </button>
                <button className="rounded-lg border border-gray-300 p-2.5 text-gray-700 transition-all hover:bg-gray-100">
                  <FaApple size={20} />
                </button>
                <button className="rounded-lg border border-gray-300 p-2.5 text-gray-700 transition-all hover:bg-gray-100">
                  <FaFacebook size={20} />
                </button>
              </div>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Twój email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    disabled={isLoading}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    value={email}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Hasło
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={password}
                    id="password"
                    disabled={isLoading}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                  ></input>
                </div>
                <div class="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border border-gray-300 bg-gray-50"
                      ></input>
                    </div>

                    <div className="ml-2 text-sm">
                      <label htmlFor="terms" className="text-gray-500">
                        Zapamiętaj?
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-gray-600 hover:underline"
                  >
                    Zapomniałeś hasła?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gray-600 px-5 py-2.5 text-center text-sm font-medium font-medium text-white hover:bg-gray-700"
                >
                  Zaloguj się
                </button>

                <p className="text-sm font-light text-gray-500">
                  Nie posiadasz konta?{" "}
                  <a
                    href="login"
                    className="font-medium text-gray-600 hover:underline"
                  >
                    Zarejestruj się
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
