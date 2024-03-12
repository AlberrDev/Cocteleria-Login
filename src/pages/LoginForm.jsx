
export const LoginForm = ({ onInputChange, onSubmit }) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Nombre/Email</label>
                <input type="text" name="nombre" onChange={onInputChange} />
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={onInputChange} />
                <br />
                <input type="submit" />
            </form>

        </>
    )
}

