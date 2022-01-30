import React,{useState} from 'react';

export const Admin = () => {
    const [adimnLogin, setadimnLogin] = useState({
        email:"",
        password:""
    });
    const handleChange=()=>{
    let newadmin={...adimnLogin}
    }
    const handleSubmit=()=>{}
  return <div>
        <form>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' value={adimnLogin.email}
                    onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={adimnLogin.password}
                    onChange={(e) => { handleChange(e) }} />
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
  </div>;
};
