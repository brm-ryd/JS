import React from 'react';

const path = '/404';
const action = () => <NotFound />;

function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </div>
  );
}

export default { path, action };
