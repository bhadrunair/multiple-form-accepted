import React from 'react';
import '../app/Styles.css';
import { formSetUp } from '@/utils/types';

const Signup = ({ formData, setFormData }: formSetUp ) => {
  return (
    <div>
        <div className="form">
            <h2>Signup Details</h2>
            <label>Username</label>
            <input type="text" value={formData.uname} onChange={(e) => setFormData({...formData, uname: e.target.value})}/>
            <label>Password</label>
            <input type="password" value={formData.pass} onChange={(e) => setFormData({...formData, pass: e.target.value})}/>
            <label>Confirm Password</label>
            <input type="password" value={formData.cpass} onChange={(e) => setFormData({...formData, cpass: e.target.value})}/>
        </div>
    </div>
  )
}

export default Signup