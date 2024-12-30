
import React, { useState } from 'react'; 

const Lab=()=> { 

    const [formData, setFormData] = useState({ 

        email: '', 

        password: '', 

    }); 

 

    const [errors, setErrors] = useState({}); 

 

    const handleChange = (e) => { 

        const { name, value } = e.target; 

        setFormData({ 

            ...formData, 

            [name]: value, 

        }); 

    }; 

 

    const handleSubmit = (e) => { 

        e.preventDefault(); 

        const newErrors = validateForm(formData); 

        setErrors(newErrors); 

 

        if (Object.keys(newErrors).length === 0) { 

            console.log('Form submitted successfully!'); 

        } else { 

            console.log('Form submission failed due to validation errors.'); 

        } 

    }; 

 

    const validateForm = (data) => { 

        const errors = {}; 

 

        if (!data.email.trim()) { 

            errors.email = 'Email is required'; 

        } else if (!/\S+@\S+\.\S+/.test(data.email)) { 

            errors.email = 'Email is invalid'; 

        } 

 

        if (!data.password) { 

            errors.password = 'Password is required'; 

        } else if (data.password.length < 8) { 

            errors.password = 'Password must be at least 8 characters long'; 

        } 

 

        return errors; 

    }; 

 

    return ( 

        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}> 

            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Form</h2> 

            <form onSubmit={handleSubmit}> 

                <div style={{ marginBottom: '15px' }}> 

                    <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label> 

                    <input 

                        type="email" 

                        name="email" 

                        value={formData.email} 

                        onChange={handleChange} 

                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 

                    /> 

                    {errors.email && ( 

                        <span style={{ color: 'red', fontSize: '12px' }}> 

                            {errors.email} 

                        </span> 

                    )} 

                </div> 

                <div style={{ marginBottom: '15px' }}> 

                    <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label> 

                    <input 

                        type="password" 

                        name="password" 

                        value={formData.password} 

                        onChange={handleChange} 

                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 

                    /> 

                    {errors.password && ( 

                        <span style={{ color: 'red', fontSize: '12px' }}> 

                            {errors.password} 

                        </span> 

                    )} 

                </div> 

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}> 

                    Submit 

                </button> 

            </form> 

        </div> 

    ); 

} 

export default Lab;