import React from 'react';

const QuickLinks = () => {
  const links = [
    'Bill Limited Liability',
    'Agri Advisory Services',
    'Value Chain Finance',
    'Apply for UC/Refrence Number(s)',
    'Apply for MSME',
    'Apply for Secured Credit Card',
    'Union Bank FastTag Request',
    'Apply for General Insurance',
    'Branch/ATM Locator',
    'DigiLocker',
    'Complaints Helpline 24*7',
    'Door Step Banking',
    'Generate / Link Aadhaar',
    'Grievances Online',
    'Procedure to Lodge the Grievance',
    'Search for Small Loan',
    'PMAY Subsidy Status',
    'NPS',
    'Online Account Opening',
    'Online Loan Application',
    'Online Nomination',
    'Open Trading Account',
    'Online Tax Payments',
    'Union Bill Payments',
    'View Settlement Calendar & Instruction'
  ];

  return (
    <div className="bg-blue-500 rounded">
      <h2 className="bg-blue-600 text-white py-2 px-4 text-base font-medium rounded-t">Quick Links!</h2>
      <div className="p-3">
        <ul className="space-y-1.5">
          {links.map((link, index) => (
            <li key={index}>
              <a href="#" className="text-white hover:text-blue-200 block text-sm">
                → {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;