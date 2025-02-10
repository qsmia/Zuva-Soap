import React, { useState } from 'react';
import { ShoppingCart, Menu, Home, Search } from 'lucide-react';

// Soap data (can be expanded or connected to backend)
const soapVariants = [
  {
    id: 1,
    name: 'Classic Green',
    description: 'Our original signature soap',
    price: 5.99,
    image: '/api/placeholder/300/400'
  },
  {
    id: 2,
    name: 'Lavender Breeze',
    description: 'Calming lavender-infused soap',
    price: 6.49,
    image: '/api/placeholder/300/400'
  },
  {
    id: 3,
    name: 'Citrus Burst',
    description: 'Refreshing citrus blend',
    price: 5.99,
    image: '/api/placeholder/300/400'
  },
  {
    id: 4,
    name: 'Aloe Vera',
    description: 'Soothing and moisturizing',
    price: 6.99,
    image: '/api/placeholder/300/400'
  }
];

const ZuvaSoapApp = () => {
  const [activeTab, setActiveTab] = useState('shop');
  const [cart, setCart] = useState([]);

  const addToCart = (soap) => {
    setCart([...cart, soap]);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Zuva Soap</h1>
        <button>
          <ShoppingCart className="text-white" />
          <span className="bg-red-500 text-white rounded-full px-2 text-xs absolute top-2 right-2">
            {cart.length}
          </span>
        </button>
      </header>

      {/* Shop Tab Content */}
      <main className="flex-grow p-4">
        <div className="grid grid-cols-2 gap-4">
          {soapVariants.map((soap) => (
            <div 
              key={soap.id} 
              className="border border-green-200 rounded-lg p-4 text-center"
            >
              <img 
                src={soap.image} 
                alt={soap.name} 
                className="mx-auto mb-4 rounded-lg"
              />
              <h2 className="font-bold text-green-800">{soap.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{soap.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-green-900">${soap.price}</span>
                <button 
                  onClick={() => addToCart(soap)}
                  className="bg-green-600 text-white px-3 py-1 rounded-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-green-50 p-3 flex justify-around border-t">
        <button 
          onClick={() => setActiveTab('home')}
          className={`${activeTab === 'home' ? 'text-green-700' : 'text-gray-500'}`}
        >
          <Home />
        </button>
        <button 
          onClick={() => setActiveTab('shop')}
          className={`${activeTab === 'shop' ? 'text-green-700' : 'text-gray-500'}`}
        >
          <ShoppingCart />
        </button>
        <button 
          onClick={() => setActiveTab('search')}
          className={`${activeTab === 'search' ? 'text-green-700' : 'text-gray-500'}`}
        >
          <Search />
        </button>
        <button 
          onClick={() => setActiveTab('menu')}
          className={`${activeTab === 'menu' ? 'text-green-700' : 'text-gray-500'}`}
        >
          <Menu />
        </button>
      </nav>
    </div>
  );
};

export default ZuvaSoapApp;
