
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import { Col, Row } from 'react-bootstrap';

export default function Single() {
  return (
    <div className="single">
        <Row>
        <Col md={9} sm={12}>
            <SinglePost />
        </Col>
        <Col md={3} sm={12}>
            <Sidebar />
        </Col>
      </Row>
    </div>
  );
}