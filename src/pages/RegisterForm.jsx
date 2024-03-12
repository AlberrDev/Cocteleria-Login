
export const RegisterForm = ({ onInputChange, onSubmit }) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Nombre</label>
                <input type="text" name="nombre" onChange={onInputChange} />
                <label htmlFor="">Email</label>
                <input type="email" name="email" onChange={onInputChange} />
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={onInputChange} />
                <br />
                <input type="submit" />
            </form>

        </>
    )
}
