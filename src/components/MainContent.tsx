import React from 'react';

const MainContent = () => {
  return (
    <div className="space-y-4">
      <div className="text-xs text-blue-600 mb-2">
        Union Bank Of India is registered with DICGC (https://www.dicgc.org.in/)
      </div>
      <div className="flex justify-center bg-white p-4 rounded shadow-sm">
        <img 
          src="DBU_Banner.jpg" 
          alt="DBU Banner" 
          className="h-28"
        />
      </div>
      
      <div className="bg-white rounded shadow-sm p-4">
        <h2 className="text-red-600 font-medium mb-3 text-base">THE LATEST</h2>
        <p className="text-sm text-gray-700 mb-4">
          Customers are requested to note that all cheque books are being phased out with new ones having additional security features. Please contact your branch or Relationship Manager for replacement of old cheque book with new cheque book well before the old one if you have already used 75% of the existing cheque book. Bank will issue new cheque immediately. On receipt of confirmation from you, Bank will delete the old cheque book records from Core Banking System.
        </p>
        <p className="text-sm text-gray-700">
          You have registered for mandatory additional layer of security, i.e. Positive Confirmation and generation of OTP. Hence, in case of providing incorrect answers to such challenge questions, your Internet Banking will be Blocked. To such cases, please call our toll-free number 1800-208-2244 and choose option no. 3 for further process.
        </p>
      </div>

      <div className="bg-white rounded shadow-sm p-4">
        <h2 className="text-red-600 font-medium mb-3 text-base">BEWARE OF FRAUD CALLS</h2>
        <p className="text-sm text-gray-700">
          It has been observed that many fake and fraudulent contact numbers are circulated on web posing as Bank's Customer Care/Contact numbers (like 1800xxxxxx or +91xxxxxxxxxx). Customers are hereby cautioned to conduct their own independent verification of Contact numbers through Bank's official website www.unionbankofindia.co.in of the contact numbers before using any contact number received by the customer other than through our official website. The Bank shall not be responsible for any loss/damage/fraud etc. Bank accepts no responsibility towards any loss incurred by customer incidental to usage of any unauthorized contact number/QRCode/UPI.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
