import 'bootstrap/dist/css/bootstrap.min.css';

export default function Error() {
    const error = useRouterError();
    console.error(error);
    return (
        <div className="container mt-4">
            <h1>Oops! Something went wrong.</h1>
            <p>{error.message}</p>
            <p>Please try again later.</p>
        </div>
    );
}