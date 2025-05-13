import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Work({ title, rLink, hLink, className }) {
    return (
        <Card className={`project-card ${className} shadow-sm mb-4`}>
            <Card.Body className="text-center">
                <Button variant="primary" onClick={() => window.open(rLink, "_blank")}>
                    {title}
                </Button>
                <Button variant="link" onClick={() => window.open(hLink, "_blank")}>
                    <img
                        className="rounded-circle"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        src="./public/github.png"
                        alt="GitHub"
                    />
                </Button>
            </Card.Body>
        </Card>
    );
}

export default function Portfolio() {
    const work = [
        { title: "Kanban", rLink: "https://module14-challenge.onrender.com/", hLink: "https://github.com/Hiemdier/module14-challenge", className: "card-1" },
        { title: "Financial Calculator", rLink: "https://hiemdier.github.io/project-1-financial-calculator/", hLink: "https://github.com/Hiemdier/project-1-financial-calculator", className: "card-2" },
        { title: "Employee Tracker", rLink: "https://github.com/Hiemdier/module10-company-tracker", hLink: "https://github.com/Hiemdier/module10-company-tracker", className: "card-3" },
        { title: "Weather Dashboard", rLink: "https://module9-challenge-8mr5.onrender.com/", hLink: "https://github.com/Hiemdier/module9-challenge", className: "card-4" },
        { title: "LiteChat", rLink: "https://litechat-cebn.onrender.com/", hLink: "https://github.com/Hiemdier/LiteChat", className: "card-5" },
        { title: "Candidate Search", rLink: "https://module13-challenge.onrender.com/", hLink: "https://github.com/Hiemdier/module13-challenge", className: "card-6" }
    ];

    return (
        <Container>
            <h2 className="text-center my-4">Portfolio</h2>
            <Row>
                {work.map((work, index) => (
                    <Col key={index} md={4} className="d-flex justify-content-center">
                        <Work {...work} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}