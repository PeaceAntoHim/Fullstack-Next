export default function Register() {
    
    function registerHandler(e) {
        /* e.preventDefault itu adalah unutk mencegah fungsi bawaan dari broeser pergi ke action atau mencegah relod */
        e.preventDefault();
        console.log('Submit form');
    }
    
    
    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={registerHandler.bind(this)}>
                <input type="text" placeholder="Email" /><br/>
                <input type="password" placeholder="Password" />
                <br />
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}