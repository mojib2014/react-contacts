import useFormState from '../../hooks/useFormState';

export default function ContactCreateForm() {
  const { state, handleChange, handleSubmit } = useFormState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    profilePic: '',
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <img src={state.profilePic} alt="Profile preview." />
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Profile Picture Url"
            name="profilePic"
            value={state.profilePic}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Add Contact</button>
        </div>
      </div>
    </form>
  );
}
