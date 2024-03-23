import { FaFacebook, FaApple, FaGoogle, FaXmark } from "react-icons/fa6";

import { useForm } from "react-hook-form";
import { signup } from "../services/apiAuth";

import RandomPhoto from "../ui/RandomPhoto";

function SignUp() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    signup(data);
  }

  return (
    <div className="container mx-auto grid grid-cols-2">
      <section id="signup">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-[75vh] lg:py-0">
          <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
            <div className="sm-p-8 space-y-4 p-6 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Utwórz konto
              </h1>
              <div className="flex gap-4">
                <button className="w-full rounded-lg border border-gray-300 p-2.5 font-medium text-gray-700 transition-all hover:bg-gray-100">
                  <div className="inline-flex items-center space-x-2">
                    <FaGoogle size={20} /> <span>Dołącz z Google</span>
                  </div>
                </button>
                <button className="rounded-lg border border-gray-300 p-2.5 text-gray-700 transition-all hover:bg-gray-100">
                  <FaApple size={20} />
                </button>
                <button className="rounded-lg border border-gray-300 p-2.5 text-gray-700 transition-all hover:bg-gray-100">
                  <FaFacebook size={20} />
                </button>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
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
                    placeholder="name@company.com"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                    {...register("email")}
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Twoja nazwa użytkownika
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="lorem"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                    {...register("username")}
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
                    id="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                    {...register("password")}
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Powtórz hasło
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    placeholder="••••••••"
                    id="confirm-password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                    {...register("confirm_password", {
                      validate: (val) => {
                        if (watch("password") !== val) {
                          return "Hasła nie pasują";
                        }
                      },
                    })}
                  ></input>
                  {console.log(errors)}
                  {errors.confirm_password && (
                    <p className="mt-2 flex items-center space-x-1 text-xs text-red-500">
                      <FaXmark /> <span>{errors.confirm_password.message}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border border-gray-300 bg-gray-50"
                    ></input>
                  </div>
                  <div className="ml-2 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500">
                      Wyrażam zgodę na{" "}
                      <a
                        className="font-medium text-gray-600 hover:underline"
                        href="#"
                      >
                        Warunki i umowy
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gray-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700"
                >
                  Zarejestruj
                </button>

                <p className="text-sm font-light text-gray-500">
                  Posiadasz konto?
                  <a
                    href="login"
                    className="font-medium text-gray-600 hover:underline"
                  >
                    {" "}
                    Zaloguj się
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="photo" className="flex flex-col items-center justify-center">
        <RandomPhoto></RandomPhoto>
      </section>
    </div>
  );
}

export default SignUp;
