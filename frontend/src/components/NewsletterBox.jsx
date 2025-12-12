import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewsletterBox = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }

    toast.success("Subscribed successfully! 🎉");
    setEmail("");
  };

  return (
    <div className='text-center'>

      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now & get 20% off
      </p>

      <p className='text-gray-400 mt-3'>
        Join the Shoppiyo community for exclusive deals, early access to new collections, 
        and weekly inspiration for your home and desk.
      </p>

      <form
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
        onSubmit={handleSubmit}
      >
        <input
          className='w-full sm:flex-1 outline-none'
          type='email'
          placeholder='Enter your email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          className='bg-black text-xs px-10 py-4'
          style={{ color: '#FFA500' }}
          type='submit'
        >
          SUBSCRIBE
        </button>
      </form>

    </div>
  );
};

export default NewsletterBox;
