import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Agreement() {
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleAgree = () => {
    alert("You have agreed to the terms!");
    // Redirect to the AddSupplier page
    navigate('/addsupplier'); // Assuming the route is "/addsupplier"
  };

  const handleCancel = () => {
    alert("You have canceled the agreement.");
    // Redirect or close the agreement, you can customize this behavior
    navigate('supplier-vehicle'); // Example: navigating to the home page
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h4>Supplier Vehicle Agreement</h4>
      <form>
        <p>
          * By agreeing to this agreement, I, as the supplier, confirm that I am providing my vehicle to <b>Vroom Vroom</b> for rental purposes. I acknowledge that the vehicle remains my property and will be used by the company in accordance with the agreed terms. I guarantee that the vehicle is in good condition and is insured as required.
          <br />
          <br />
          * I understand that <b>Vroom Vroom</b> will handle the vehicle responsibly and pay the agreed rental amount on time. I also agree to allow the company to create a supplier profile, including my vehicle details, rental price, and availability status.
          <br />
          <br />
          <b>Do you agree to these terms?</b>
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button
            type="button"
            onClick={handleAgree}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Agree
          </button>
          <button
            type="button"
            onClick={handleCancel}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
