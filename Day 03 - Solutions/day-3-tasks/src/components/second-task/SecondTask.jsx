import './SecondTask.css';

export function SecondTask() {
  return (
    <div className="content-container">
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div className="input-container">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
      </div>

      <button>Subscribe</button>
    </div>
  );
}
