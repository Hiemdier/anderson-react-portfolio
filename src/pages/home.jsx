export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          <h1>About Me</h1>
          <div className="about-image">
            <img src="../public/anderson_shane.png" alt="Profile"
            style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover'
            }} />
    </div>
          <p className="lead">
            Hello, my name is Shane Anderson. I am a full stack web developer with a drive for creating dynamic and responsive web applications.
          </p>
          <p>
             I have a strong foundation in both front-end and back-end development, and I enjoy working with a variety of technologies to build user-friendly interfaces and robust server-side functionality.
          </p>
        </div>
      </div>
    </div>
  );
}