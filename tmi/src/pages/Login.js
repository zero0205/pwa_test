import { Row, Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formBasicText">
          <Form.Label column sm={2}>ID</Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Enter ID"/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
          <Form.Label column sm={2}>Password</Form.Label>
          <Col>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group>
          <Link to='/' className='m-1'>아이디 찾기</Link>
          <Link to='/' className='m-1'>비밀번호 찾기</Link>
        </Form.Group>
        <Form.Group>
          <Link to='/' className='m-1 btn btn-primary'>회원가입 </Link>
          <Link to='/' className='m-1 btn btn-primary'>로그인</Link>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Login;