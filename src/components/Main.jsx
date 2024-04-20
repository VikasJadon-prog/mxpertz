import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../components/Main.css';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://child.onrender.com/api/sciencefiction')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'now':
        return 'cyan';
      case 'completed':
        return 'green';
      case 'inprogress':
        return 'yellow';
      default:
        return 'white';
    }
  };

  return (
    <div className='inner-cont'>
      <div className='card-cont-out'>
        <div className='card-cont'>
          {data.map((item, index) => (
            <Link key={index} to={`/story/${item.id}`} className="card-link">
              <Card>
                <Card.Img variant="top" src={`https://ik.imagekit.io/dev24/${item?.Image}`} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "0.8rem", color: 'white' }}>{item.Title}</Card.Title>
                  <Button variant="primary" style={{ backgroundColor: getStatusColor(item?.Status), border: 'none' }}>{item.Status}</Button>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
