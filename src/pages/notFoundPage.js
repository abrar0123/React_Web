import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          margin: '100px 0px',
          background: '#ebe9e8',
          width: '50%',
          padding: 20,
          borderRadius: 15,
        }}
      >
        <div
          style={{
            height: '300px',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'start',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              color: 'black',
              fontSize: '60px',
              margin: 0,
              fontWeight: 'bold',
            }}
          >
            404
          </p>
          <p style={{ fontSize: '30px', color: 'black' }}>
            Oops ! Page Not Found
          </p>
          <Link
            to={'/home'}
            style={{
              backgroundColor: 'brown',
              color: 'white',
              padding: 10,
              borderRadius: 5,
              textDecoration: 'none',
              cursor: 'pointer',
              width: 180,
            }}
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
