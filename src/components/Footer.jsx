import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F3FAF2] p-8 mt-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Information</h4>
          <ul className="text-gray-600">
            <li><a href="/" className="hover:text-green-600">Become a Vendor</a></li>
            <li><a href="/" className="hover:text-green-600">Affiliate Program</a></li>
            <li><a href="/" className="hover:text-green-600">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-green-600">Our Suppliers</a></li>
            <li><a href="/" className="hover:text-green-600">Extended Plan</a></li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Community</h4>
          <ul className="text-gray-600">
            <li><a href="/" className="hover:text-green-600">Customer Support</a></li>
            <li><a href="/" className="hover:text-green-600">Help Center</a></li>
            <li><a href="/" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="/" className="hover:text-green-600">Report Abuse</a></li>
            <li><a href="/" className="hover:text-green-600">Submit and Dispute</a></li>
          </ul>
        </div>
        
        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Online Shopping</h4>
          <ul className="text-gray-600">
            <li><a href="/" className="hover:text-green-600">My Account</a></li>
            <li><a href="/" className="hover:text-green-600">Order History</a></li>
            <li><a href="/" className="hover:text-green-600">Shopping Cart</a></li>
            <li><a href="/" className="hover:text-green-600">Compare</a></li>
            <li><a href="/" className="hover:text-green-600">Help Ticket</a></li>
            <li><a href="/" className="hover:text-green-600">Wishlist</a></li>
          </ul>
        </div>
        
        {/* Column 4 */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Daily Groceries</h4>
          <ul className="text-gray-600">
            <li><a href="/" className="hover:text-green-600">Dairy & Eggs</a></li>
            <li><a href="/" className="hover:text-green-600">Meat & Seafood</a></li>
            <li><a href="/" className="hover:text-green-600">Breakfast Food</a></li>
            <li><a href="/" className="hover:text-green-600">Household Supplies</a></li>
            <li><a href="/" className="hover:text-green-600">Bread & Bakery</a></li>
            <li><a href="/" className="hover:text-green-600">Pantry Staples</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-[#E8F9E9] p-4 mt-6 text-center text-gray-600">
        <p>© 2024 Nature Farms. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
