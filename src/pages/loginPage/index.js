import {useFormik} from "formik";
import * as Yup from "yup"
import "./style.css"
import {userCheck} from "../../Data/usersData/users";
import {useTodoContext} from "../../context/TodoProvider";


const validationSchema = Yup.object({
    userName: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    password: Yup.string()
        .min(
            8,
            "Password must be at least 8 characters long"
        )
        .max(20, "Password cannot be longer than 20 characters")
        .required("You must enter a password")
})

const LoginPage = () => {
    const {LoginGenerator} = useTodoContext()
    const handleSubmit = (values) => {
        const LoginData = userCheck(values.userName, values.password);
        LoginData ? LoginGenerator(LoginData) : alert("user not found")
    }
    const formik = useFormik(
        {
            initialValues: {
                userName: "",
                password: ""
            },
            validationSchema,
            onSubmit: handleSubmit
        }
    )

    return (
        <section className="login-page">
            <div className="login-container">
                <div className="login-section">
                    <div className="login-header">
                        <h1>Hello !</h1>
                        <p>Sign in to your account</p>
                    </div>
                    <form className="login-main" onSubmit={formik.handleSubmit}>
                        <div className="login-entry-container">
                            {/*login form inputs .........................................*/}
                            <div className="login-input-container">
                            <span className="login-logo">
                                <i className="fa fa-envelope"></i>
                            </span>
                                <input
                                    type="text"
                                    placeholder="email"
                                    name="userName"
                                    id="userName"
                                    className="userName-input"
                                    value={formik.values.userName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.userName && formik.errors.userName ? (
                                <p className="error-msg">{formik.errors.userName}</p>
                            ) : null}
                            <div className="login-input-container">
                            <span className="login-logo">
                                <i className="fa fa-lock"></i>
                            </span>

                                <input
                                    type="text"
                                    placeholder="password"
                                    name="password"
                                    id="password"
                                    className="userPassword-input"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <p className="error-msg">{formik.errors.password}</p>
                            ) : null}
                            {/*login form inputs .........................................*/}
                            <a href="#" className="forget-pass"> Foreget Password ?</a>
                            <button type="submit" className="login-submit">SIGN IN</button>
                        </div>
                    </form>
                    <p>Dont have an account ? <a className="create-acc" href="">Create</a></p>
                </div>
                <div className="login-cover"></div>
            </div>
        </section>
    )
}

export default LoginPage;