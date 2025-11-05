const Greetings = ({ firstname }) => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 gap-5">
      <p className="mb-0 ">Hello {firstname || "there"}!</p>

      {firstname && (
        <img
          src="/avatar2.png"
          alt="avatar"
          width="50"
          height="50"
          className="rounded-circle border border-light"
        />
      )}
    </div>
  );
};

export default Greetings;
